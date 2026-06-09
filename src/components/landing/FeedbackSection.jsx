const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

const NUDGES = [
  { emoji: '💬', text: 'Have a concern or suggestion? Share it with me.' },
  { emoji: '🎯', text: 'Your voice matters. Submit your feedback below.' },
  { emoji: '🌱', text: 'Help me better understand student concerns by sharing your experience.' },
]

export default function FeedbackSection() {
  return (
    <section id="feedback" className="relative bg-alabaster py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #C85D3D 0%, transparent 70%)' }} />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
          <p className="text-xs tracking-widest uppercase font-medium font-body text-terracotta">
            Student Feedback
          </p>
        </div>

        <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-charcoal mb-6">
          Share Your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-terracotta-light">Feedback</span>
        </h2>

        <div className="space-y-4 font-body text-base lg:text-lg text-charcoal/60 leading-relaxed mb-10">
          <p>Have a concern, suggestion, idea, or experience you'd like to share?</p>
          <p>I want to hear directly from students.</p>
        </div>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-terracotta to-terracotta-dark text-white font-body font-bold text-base min-h-[56px] sm:min-h-[64px] px-8 sm:px-14 py-4 sm:py-5 shadow-xl shadow-terracotta/40 hover:shadow-2xl hover:shadow-terracotta/50 hover:scale-105 transition-all duration-200 w-full sm:w-auto"
        >
          Submit Feedback
        </a>

        <p className="mt-4 text-xs font-body text-charcoal/40">
          Takes 2–3 minutes · Powered by Google Forms · Your privacy is respected
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {NUDGES.map((nudge) => (
            <div
              key={nudge.text}
              className="bg-white border border-terracotta/10 rounded-xl px-5 py-4 text-left hover:shadow-md hover:border-terracotta/20 transition-all duration-200"
            >
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                {nudge.emoji} {nudge.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
