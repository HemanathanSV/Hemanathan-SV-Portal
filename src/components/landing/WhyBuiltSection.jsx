import { Quote } from 'lucide-react'

export default function WhyBuiltSection() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-[#F5EDE0]">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="bg-white rounded-xl p-8 border border-terracotta/10 shadow-sm relative">
              <Quote size={32} className="text-terracotta/20 mb-3" />
              <blockquote className="text-xl lg:text-2xl font-heading font-medium text-charcoal leading-snug">
                Before we can solve problems, we must first understand them.
              </blockquote>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center">
                  <span className="text-white font-heading font-bold">H</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm">Hemanathan SV</p>
                  <p className="text-xs text-charcoal/50">Candidate · Conduct, Safety & Wellness</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              Why I'm Running
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              My Commitment to You
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                Too often, representatives arrive with ready-made solutions before understanding
                what students actually need. I'm doing things differently.
              </p>
              <p>
                I built this platform because the most important thing a representative can do is
                listen. Before proposing anything, the goal is to understand your lived experience.
              </p>
              <p>
                Whether it's a concern about conduct, safety, wellness — or something positive —
                your experience is the foundation of everything I'll work toward.
              </p>
            </div>
            <div className="mt-6 pl-4 border-l-4 border-terracotta bg-terracotta/5 rounded p-4">
              <p className="text-sm text-charcoal/70 italic">
                &ldquo;Every submission is reviewed to identify the themes and priorities I'll carry
                forward — your voice shapes the agenda.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
