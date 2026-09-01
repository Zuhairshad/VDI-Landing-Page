'use client'

import { useRef, useEffect } from 'react'

const VERT_SRC = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

/* Reduced from 6 octaves → 3, removed double domain-warp.
   Same visual character, ~60% less fragment work per pixel. */
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
  for (int i = 0; i < 3; i++) {
    v += a * vnoise(p);
    p  = p * 2.1 + vec2(3.7, 1.9);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  uv.y = 1.0 - uv.y;

  float ang = 0.70;
  mat2  rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
  vec2  p   = rot * uv;

  p   *= vec2(2.2, 14.0);
  p.y -= u_time * 0.22;

  float f = fbm(p);
  f = pow(clamp(f * 1.5 - 0.1, 0.0, 1.0), 1.6);

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

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const gl = canvas.getContext('webgl', { antialias: false, powerPreference: 'low-power' })
    if (!gl) return

    const prog = gl.createProgram()!
    gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER,   VERT_SRC))
    gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes  = gl.getUniformLocation(prog, 'u_res')

    const resize = () => {
      /* Cap DPR at 1 — retina pixels don't improve perception of a blurry noise shader */
      const dpr = 1
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let rafId = 0
    const start = performance.now()
    let last = 0
    let inView = true
    let pageVisible = document.visibilityState === 'visible'

    const shouldAnimate = () => inView && pageVisible && !reducedMotion.matches

    const frame = (now: number) => {
      if (!shouldAnimate()) { rafId = 0; return }
      rafId = requestAnimationFrame(frame)
      /* ~20 fps is plenty for a slow-moving background texture */
      if (now - last < 50) return
      last = now
      gl.uniform1f(uTime, (now - start) * 0.001)
      gl.uniform2f(uRes,  canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    const drawStill = () => {
      gl.uniform1f(uTime, 0)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    const syncAnimation = () => {
      if (shouldAnimate() && !rafId) rafId = requestAnimationFrame(frame)
      if (!shouldAnimate() && rafId) { cancelAnimationFrame(rafId); rafId = 0 }
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      syncAnimation()
    }, { threshold: 0.01 })

    const handleVisibility = () => {
      pageVisible = document.visibilityState === 'visible'
      syncAnimation()
    }

    observer.observe(canvas)
    document.addEventListener('visibilitychange', handleVisibility)
    reducedMotion.addEventListener('change', syncAnimation)
    drawStill()
    syncAnimation()

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      ro.disconnect()
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
      reducedMotion.removeEventListener('change', syncAnimation)
      gl.deleteProgram(prog)
      gl.deleteBuffer(buf)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  )
}
