'use client'

import { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'

interface FaqAccordionProps {
  items: { q: string; a: string }[]
  heading?: string
  subtext?: string
}

export default function FaqAccordion({
  items,
  heading = 'Frequently Asked Questions',
  subtext = 'Have more questions? Reach out to our team.',
}: FaqAccordionProps) {
  const [open, setOpen] = useState<string>('')

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner relative z-10">
        <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-16">
          <div>
            <span className="eyebrow-pill mb-6 inline-block">FAQ</span>
            <h2
              className="mb-4 text-[26px] md:text-[40px]"
              style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
            >
              {heading}
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(250,250,250,0.6)', lineHeight: '24px' }}>
              {subtext}
            </p>
          </div>

          <div>
            <Accordion.Root
              type="single"
              collapsible
              value={open}
              onValueChange={setOpen}
              className="flex flex-col"
            >
              {items.map((item, i) => (
                <Accordion.Item
                  key={item.q}
                  value={`item-${i}`}
                  className="border-b"
                  style={{ borderColor: 'rgba(250,250,250,0.08)' }}
                >
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-6 py-5 text-left outline-none cursor-pointer group">
                    <span
                      className="text-[16px] font-medium transition-colors duration-200"
                      style={{
                        color: open === `item-${i}` ? 'rgb(250,250,250)' : 'rgba(250,250,250,0.8)',
                        letterSpacing: '-0.3px',
                      }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[14px] transition-all duration-200"
                      style={{
                        background: open === `item-${i}` ? 'rgba(250,250,250,0.1)' : 'rgba(250,250,250,0.07)',
                        color: open === `item-${i}` ? 'rgb(250,250,250)' : 'rgba(250,250,250,0.4)',
                        transform: open === `item-${i}` ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      +
                    </span>
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden">
                    <p className="pb-5 text-[15px] leading-6" style={{ color: 'rgba(250,250,250,0.65)' }}>
                      {item.a}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
              <div className="border-b" style={{ borderColor: 'rgba(250,250,250,0.08)' }} />
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  )
}
