const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: '#C85D3D' }}>
      <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #FDF9F3 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-150px] left-[-150px] w-[350px] h-[350px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1A202C 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs tracking-widest uppercase font-medium font-body text-white/70 mb-6">
          Your Turn
        </p>
        <p className="text-xs tracking-widest uppercase font-medium font-body text-white/50 mb-4">
          Hemanathan SV · Voice Portal
        </p>

        <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-white text-balance mb-6">
          Your experience matters.<br />
          <span className="italic">Help shape what comes next.</span>
        </h2>

        <p className="font-body text-base lg:text-lg text-white/80 leading-relaxed mb-8">
          Your feedback goes directly into shaping the priorities Hemanathan SV will champion as
          your representative.
        </p>

        <div className="inline-block border border-white/20 rounded-xl p-4 mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
          <p className="font-body text-sm text-white/90">
            👇 Click Submit Feedback to open the form and help Hemanathan SV better understand
            student concerns.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-terracotta font-body font-bold text-base min-h-[56px] sm:min-h-[64px] px-8 sm:px-14 py-4 sm:py-5 shadow-xl hover:bg-white/90 transition-all duration-200 w-full sm:w-auto"
          >
            📝 Submit Feedback
          </a>
          <p className="text-xs font-body text-white/50">
            Takes 2–3 minutes · Powered by Google Forms
          </p>
        </div>
      </div>
    </section>
  )
}
