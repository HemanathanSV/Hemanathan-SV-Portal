export default function WhyBuiltSection() {
  return (
    <section id="why" className="relative bg-[#F5EDE0] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="bg-white border border-terracotta/10 rounded-2xl p-10 shadow-xl shadow-terracotta/5 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracotta via-terracotta-light to-sage rounded-t-2xl" />
              <div className="text-7xl font-heading text-terracotta/10 leading-none mb-4 select-none">
                &ldquo;
              </div>
              <blockquote className="text-2xl lg:text-3xl font-heading font-medium text-charcoal leading-tight -mt-4 relative z-10">
                Before we can solve problems, we must first understand them.
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-terracotta to-terracotta-dark flex items-center justify-center shrink-0 shadow-lg shadow-terracotta/25">
                  <span className="text-white font-heading font-bold text-lg">H</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-charcoal text-sm">Hemanathan SV</p>
                  <p className="text-xs font-body text-charcoal/50">Candidate · Conduct, Safety & Wellness</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <p className="text-xs tracking-widest uppercase font-medium font-body text-terracotta">
                Why Hemanathan SV Is Running
              </p>
            </div>

            <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-charcoal">
              Hemanathan SV's <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-terracotta-light">Commitment to You</span>
            </h2>

            <div className="space-y-4 font-body text-base lg:text-lg text-charcoal/60 leading-relaxed">
              <p>
                Too often, student representatives arrive with ready-made solutions before fully
                understanding what students actually need. Hemanathan SV is doing things differently.
              </p>
              <p>
                Hemanathan SV built this platform because the most important thing a representative
                can do right now is listen. Before proposing anything, before drafting a single
                initiative, the goal is to understand your lived experience on campus.
              </p>
              <p>
                Whether it's a concern about how a conduct matter was handled, a feeling of being
                unsafe, a gap in wellness support — or even something positive that should be
                celebrated — your experience is the foundation of everything Hemanathan SV will work
                toward.
              </p>
            </div>

            <div className="border-l-4 border-terracotta bg-gradient-to-r from-terracotta/10 to-transparent rounded-r-xl p-5">
              <p className="font-body text-sm text-charcoal/70 italic leading-relaxed">
                &ldquo;Every submission is reviewed to identify the themes and priorities I'll carry
                forward — your voice directly shapes the agenda.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
