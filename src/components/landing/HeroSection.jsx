import { Send, ArrowRight, ChevronDown, Users, Target, Shield } from 'lucide-react'

const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen pt-16 bg-gradient-to-b from-alabaster via-[#F5EDE0] to-[#EDE0D0]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-terracotta" />
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
              Candidate · Conduct, Safety & Wellness
            </span>
          </div>

          <h1 className="font-heading text-sm font-medium text-charcoal/60 mb-2 uppercase tracking-widest">
            Hemanathan SV
          </h1>

          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-charcoal mb-4">
            Turning Student <span className="italic text-terracotta">Voices</span> Into Action
          </h2>

          <p className="text-lg text-charcoal/50 mb-10 max-w-xl">
            Students Conduct, Safety and Wellness
          </p>

          <div className="bg-white rounded-xl border border-terracotta/10 p-6 md:p-8 shadow-sm max-w-2xl">
            <h3 className="flex items-center gap-2 text-terracotta font-bold text-lg mb-4">
              <Send size={20} />
              Share your feedback
            </h3>
            <p className="text-charcoal/70 mb-5 leading-relaxed">
              Your opinions, concerns, ideas, and experiences matter. By filling out this form,
              you help me understand what students are thinking and how I can represent them better.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-terracotta text-white font-bold text-base min-h-[52px] px-8 py-3 hover:bg-terracotta-dark transition-colors shadow-sm"
            >
              Share Feedback
              <ArrowRight size={20} />
            </a>
            <p className="mt-3 text-xs text-charcoal/40">
              Takes 2-3 minutes · Google Forms · Private
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center">
              <Users size={20} className="text-terracotta" />
            </div>
            <div>
              <p className="font-heading font-bold text-xl text-charcoal">Listen First</p>
              <p className="text-xs text-charcoal/50 uppercase tracking-wider">Philosophy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center">
              <Target size={20} className="text-sage" />
            </div>
            <div>
              <p className="font-heading font-bold text-xl text-charcoal">5</p>
              <p className="text-xs text-charcoal/50 uppercase tracking-wider">Guiding Pillars</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#6B7B8C]/10 flex items-center justify-center">
              <Shield size={20} className="text-[#6B7B8C]" />
            </div>
            <div>
              <p className="font-heading font-bold text-xl text-charcoal">100%</p>
              <p className="text-xs text-charcoal/50 uppercase tracking-wider">Student-Led</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-charcoal/20">
          <ChevronDown size={20} className="animate-bounce" />
          <span className="text-[10px] tracking-widest font-medium">SCROLL</span>
        </div>
      </div>
    </section>
  )
}
