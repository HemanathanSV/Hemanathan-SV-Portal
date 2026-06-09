const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

const NUDGES = [
  { emoji: '💬', text: 'Have a concern or suggestion? Share it with me.' },
  { emoji: '🎯', text: 'Your voice matters. Submit your feedback below.' },
  { emoji: '🌱', text: 'Help me better understand student concerns by sharing your experience.' },
]

export default function FeedbackSection() {
  return (
    <section id="feedback" className="bg-alabaster py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs tracking-widest uppercase font-medium font-body text-charcoal/50 mb-6">
          Student Feedback
        </p>

        <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-charcoal mb-6">
          Share Your <span className="italic text-terracotta">Feedback</span>
        </h2>

        <div className="space-y-4 font-body text-base lg:text-lg text-charcoal/70 leading-relaxed mb-8">
          <p>Have a concern, suggestion, idea, or experience you'd like to share?</p>
          <p>I want to hear directly from students.</p>
          <p>👇 Click the button below to submit your feedback.</p>
        </div>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta text-white font-body font-bold text-base min-h-[56px] sm:min-h-[64px] px-8 sm:px-14 py-4 sm:py-5 shadow-xl shadow-terracotta/40 hover:bg-terracotta-dark transition-all duration-200 ring-4 ring-terracotta/20 cta-glow w-full sm:w-auto"
        >
          📝 Submit Feedback
        </a>

        <p className="mt-4 text-xs font-body text-charcoal/40">
          Takes 2–3 minutes · Powered by Google Forms · Your privacy is respected
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {NUDGES.map((nudge) => (
            <div
              key={nudge.text}
              className="bg-[#F5EDE0] border border-[#E8D8C8] rounded-xl px-5 py-4 text-left"
            >
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                {nudge.emoji} {nudge.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
