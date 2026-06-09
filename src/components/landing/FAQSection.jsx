import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQS = [
  {
    q: 'Who is this platform for?',
    a: 'This platform is for all students who have experiences, concerns, or ideas related to campus conduct, safety, or wellness. Every student\'s voice matters here.',
  },
  {
    q: 'What happens after I submit my feedback?',
    a: 'Your submission is reviewed to identify recurring themes and priorities. These themes directly inform the proposals and initiatives I bring forward as your representative.',
  },
  {
    q: 'How is this different from a formal complaint system?',
    a: 'This is a listening platform, not a formal complaints process. It\'s a space for honest conversation — not a place where submissions trigger investigations. Think of it as the first step in understanding what students need.',
  },
  {
    q: 'Can I suggest ideas, not just raise problems?',
    a: 'Absolutely. Positive experiences and ideas for improvement are equally valuable. If you\'ve seen something that works well, or have a creative idea — please share it.',
  },
  {
    q: 'Who sees my responses?',
    a: 'Only the campaign team reviews submissions. Individual submissions are never shared publicly or with university administration without your explicit consent.',
  },
  {
    q: 'What if my concern is urgent?',
    a: 'If your situation requires immediate attention, please reach out directly to school authorities, counselors, or emergency contacts. This platform should not be used as a substitute for immediate help in urgent situations.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5EDE0]">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              FAQ
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Questions <span className="italic text-terracotta">Answered</span>
            </h2>
            <p className="text-charcoal/60 leading-relaxed mb-6">
              Transparency matters. Here are the most common questions about this platform and how
              your feedback is used.
            </p>
            <div className="hidden lg:flex items-center gap-3 text-charcoal/40">
              <HelpCircle size={20} />
              <span className="text-sm">{FAQS.length} questions</span>
            </div>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className={`w-full flex items-center justify-between gap-4 p-5 text-left transition-colors ${
                      isOpen ? 'text-terracotta' : 'text-charcoal/70 hover:text-charcoal'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium leading-snug">{faq.q}</span>
                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-terracotta text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                    <div>
                      <div className="px-5 pb-5">
                        <p className="text-sm text-charcoal/60 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
