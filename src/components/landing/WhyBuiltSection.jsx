export default function WhyBuiltSection() {
  return (
    <section id="why" className="bg-[#F5EDE0] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="bg-alabaster border border-[#E8E0D5] rounded-2xl p-10 shadow-sm relative">
              <div className="text-6xl font-heading text-terracotta/20 leading-none mb-4 select-none">
                &ldquo;
              </div>
              <blockquote className="text-xl lg:text-2xl font-heading font-medium text-charcoal leading-tight -mt-6">
                Before we can solve problems, we must first understand them.
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center shrink-0">
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
            <p className="text-xs tracking-widest uppercase font-medium font-body text-charcoal/50">
              Why Hemanathan SV Is Running
            </p>

            <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-charcoal">
              Hemanathan SV's <span className="italic text-terracotta">Commitment to You</span>
            </h2>

            <div className="space-y-4 font-body text-base lg:text-lg text-charcoal/70 leading-relaxed">
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

            <div className="border-l-4 border-terracotta bg-terracotta/8 rounded-xl p-4">
              <p className="font-body text-sm text-charcoal/80 italic leading-relaxed">
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
