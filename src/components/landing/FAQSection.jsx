import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'Who is this platform for?',
    a: 'This platform is for all students who have experiences, concerns, or ideas related to campus conduct, safety, or wellness. Whether you have a specific concern, a positive experience to share, or a suggestion — every student\'s voice matters here.',
  },
  {
    q: 'What happens after I submit my feedback?',
    a: 'Your submission is reviewed to identify recurring themes, gaps, and priorities. These themes directly inform the proposals and initiatives I bring forward as your representative. You\'re not sending feedback into a void — it shapes a real agenda.',
  },
  {
    q: 'How is this different from a formal complaint system?',
    a: 'This is a listening platform, not a formal complaints process. It\'s a space for honest conversation — not a place where submissions trigger investigations or formal procedures. Think of it as the first step: helping me understand what students actually need.',
  },
  {
    q: 'Can I suggest ideas, not just raise problems?',
    a: 'Absolutely. Positive experiences and ideas for improvement are equally valuable. If you\'ve seen something that works well and should be expanded, or have a creative idea for how campus life could be better — please share it.',
  },
  {
    q: 'Who sees my responses?',
    a: 'Only the campaign team reviews submissions. Responses are analysed to identify themes and patterns — individual submissions are never shared publicly or with university administration without your explicit consent.',
  },
  {
    q: 'What if my concern is urgent or requires immediate support?',
    a: 'If your situation requires immediate attention, please reach out directly to the appropriate school authorities, staff members, counselors, or emergency contacts who can provide timely assistance. This platform is designed to listen to student concerns, gather feedback, and help identify areas where students need greater support. While I am committed to understanding and advocating for student voices, this platform should not be used as a substitute for immediate help in urgent situations.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="bg-[#F5EDE0] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs tracking-widest uppercase font-medium font-body text-charcoal/50 mb-6">
              FAQ
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-charcoal mb-6">
              Questions <span className="italic text-terracotta">Answered</span>
            </h2>
            <p className="font-body text-base lg:text-lg text-charcoal/60 leading-relaxed">
              Transparency matters. Here are the most common questions about this platform and how
              your feedback is used.
            </p>
          </div>

          <div role="list" className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  role="listitem"
                  className="bg-alabaster rounded-xl border border-[#E8E0D5] overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left font-body font-medium text-charcoal/80 hover:text-terracotta transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-sm lg:text-base leading-snug ${isOpen ? 'text-terracotta' : ''}`}>
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isOpen ? 'bg-terracotta text-white' : 'bg-charcoal/5 text-charcoal/40'
                      }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                    <div>
                      <div className="px-5 pb-5">
                        <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                          {faq.a}
                        </p>
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
