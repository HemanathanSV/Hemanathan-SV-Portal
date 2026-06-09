import { ArrowDown, ArrowRight } from 'lucide-react'
import ShareSection from './ShareSection'

const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDF9F3] via-[#F5EDE0] to-[#EDE0D0]" />
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full hero-glow" style={{ background: 'radial-gradient(circle, #C85D3D 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full float-delayed" style={{ background: 'radial-gradient(circle, #7D8C7E 0%, transparent 70%)' }} />
      <div className="absolute top-[40%] left-[10%] w-2 h-2 rounded-full bg-terracotta/40 float" />
      <div className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-sage/30 float-delayed" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-28 pb-12 lg:pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
          <p className="text-xs tracking-widest uppercase font-medium font-body text-terracotta">
            Candidate · Students Conduct, Safety & Wellness
          </p>
        </div>

        <h1 className="font-heading text-xl lg:text-2xl font-light text-charcoal/70 mb-3">
          Hemanathan SV
        </h1>

        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] text-charcoal mb-4 max-w-5xl">
          Turning Student <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-terracotta-light">Voices</span> Into Action.
        </h2>

        <p className="text-lg lg:text-xl font-body font-medium text-charcoal/50 mb-12 max-w-2xl">
          Students Conduct, Safety and Wellness
        </p>

        <div className="border border-terracotta/20 bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl shadow-terracotta/10 max-w-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracotta via-terracotta-light to-sage" />
          <h3 className="text-terracotta font-bold font-body text-lg mb-5 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center text-base">📢</span>
            Click here to share your feedback
          </h3>

          <div className="space-y-4 text-charcoal/70 font-body text-base lg:text-lg leading-relaxed">
            <p>Your opinions, concerns, ideas, suggestions, and experiences matter.</p>
            <p>
              By filling out this form, you help me better understand what students are thinking,
              what challenges they face, and how I can represent them more effectively.
            </p>
            <p>
              Rather than making assumptions, I want to hear directly from students and learn from
              their experiences.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-terracotta font-body font-bold text-sm animate-bounce hidden sm:inline">
              <ArrowRight size={20} className="inline" />
            </span>
            <span className="text-terracotta font-body font-bold text-sm animate-bounce sm:hidden">
              <ArrowDown size={20} className="inline" />
            </span>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-terracotta to-terracotta-dark text-white font-body font-bold text-base min-h-[56px] sm:min-h-[64px] px-8 sm:px-14 py-4 sm:py-5 shadow-xl shadow-terracotta/40 hover:shadow-2xl hover:shadow-terracotta/50 hover:scale-105 transition-all duration-200 w-full sm:w-auto"
            >
              Share Feedback
            </a>
          </div>

          <p className="mt-4 text-xs font-body text-charcoal/40 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-sage" />
            Takes 2–3 minutes · Powered by Google Forms
          </p>

          <ShareSection />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
          {[
            { value: 'Listen / First', label: 'Philosophy' },
            { value: '5', label: 'Guiding Pillars' },
            { value: '100%', label: 'Student-Led' },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="font-heading text-3xl font-semibold bg-gradient-to-b from-charcoal to-charcoal/70 bg-clip-text text-transparent group-hover:from-terracotta group-hover:to-terracotta-light transition-all duration-300">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest font-body font-medium text-charcoal/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-2 text-charcoal/20">
          <div className="w-px h-10 bg-gradient-to-b from-terracotta/40 to-transparent animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] font-body font-medium">SCROLL</span>
        </div>
      </div>
    </section>
  )
}
