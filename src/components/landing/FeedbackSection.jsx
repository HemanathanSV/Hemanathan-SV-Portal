import { Send, MessageSquare, Lightbulb, Heart } from 'lucide-react'

const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

const NUDGES = [
  { icon: MessageSquare, text: 'Have a concern or suggestion? Share it with me.' },
  { icon: Lightbulb, text: 'Your voice matters. Submit your feedback below.' },
  { icon: Heart, text: 'Help me understand student concerns by sharing your experience.' },
]

export default function FeedbackSection() {
  return (
    <section id="feedback" className="py-20 lg:py-28 bg-alabaster">
      <div className="section-divider" />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
          Student Feedback
        </p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-4">
          Share Your <span className="italic text-terracotta">Feedback</span>
        </h2>
        <p className="text-charcoal/60 mb-8 max-w-xl mx-auto">
          Have a concern, suggestion, or experience? I want to hear directly from students.
        </p>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-terracotta text-white font-bold text-base min-h-[52px] px-8 py-3 hover:bg-terracotta-dark transition-colors shadow-sm"
        >
          <Send size={20} />
          Submit Feedback
        </a>

        <p className="mt-3 text-xs text-charcoal/40">
          Takes 2-3 minutes · Google Forms · Your privacy is respected
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {NUDGES.map((nudge) => {
            const Icon = nudge.icon
            return (
              <div
                key={nudge.text}
                className="bg-[#F5EDE0] rounded-xl px-5 py-4 text-left flex items-start gap-3"
              >
                <Icon size={18} className="text-terracotta mt-0.5 shrink-0" />
                <p className="text-sm text-charcoal/70">{nudge.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
