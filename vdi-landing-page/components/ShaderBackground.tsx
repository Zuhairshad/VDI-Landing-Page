'use client'

import { useRef, useEffect } from 'react'

const VERT_SRC = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

const FRAG_SRC = `
precision mediump float;
uniform float u_time;
uniform vec2  u_res;

float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0,0)), hash(i + vec2(1,0)), f.x),
    mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  vec2  s = vec2(1.0);
  for (int i = 0; i < 6; i++) {
    v += a * vnoise(p);
    p  = p * 2.1 + s;
    a *= 0.5;
    s += vec2(3.7, 1.9);
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  uv.y = 1.0 - uv.y;

  /* Rotate so fibres run diagonally at ~40° */
  float ang = 0.70;
  mat2  rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
  vec2  p   = rot * uv;

  /* Stretch into thin fibres, animate downward */
  p   *= vec2(2.2, 14.0);
  p.y -= u_time * 0.22;

  /* Domain-warp once for organic variation */
  vec2 q = vec2(fbm(p + vec2(0.0, 0.0)),
                fbm(p + vec2(5.2, 1.3)));
  float f = fbm(p + 0.6 * q);

  /* Lift contrast so dark valleys are deep */
  f = pow(clamp(f * 1.5 - 0.1, 0.0, 1.0), 1.6);

  /* Colour palette: dark rust → amber → bright orange */
  vec3 dark   = vec3(0.110, 0.035, 0.008);
  vec3 mid    = vec3(0.490, 0.195, 0.022);
  vec3 bright = vec3(0.835, 0.353, 0.039);

  vec3 col = f < 0.5
    ? mix(dark,   mid,    f * 2.0)
    : mix(mid,    bright, (f - 0.5) * 2.0);

  gl_FragColor = vec4(col, 1.0);
}
`

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!
  gl.shaderSource(s, src)
  gl.compileShader(s)
  return s
}

export default function ShaderBackground({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { antialias: false, powerPreference: 'low-power' })
    if (!gl) return

    const prog = gl.createProgram()!
    gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER,   VERT_SRC))
    gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    /* Full-screen quad */
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes  = gl.getUniformLocation(prog, 'u_res')

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let rafId: number
    const start = performance.now()
    let last = 0

    const frame = (now: number) => {
      rafId = requestAnimationFrame(frame)
      /* ~30 fps cap — background doesn't need 60 */
      if (now - last < 32) return
      last = now
      gl.uniform1f(uTime, (now - start) * 0.001)
      gl.uniform2f(uRes,  canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
    rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      gl.deleteProgram(prog)
      gl.deleteBuffer(buf)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  )
}
