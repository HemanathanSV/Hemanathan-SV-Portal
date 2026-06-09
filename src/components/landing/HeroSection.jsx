import { ArrowDown, ArrowRight } from 'lucide-react'
import ShareSection from './ShareSection'

const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden pt-16"
      style={{ background: 'linear-gradient(160deg, #FDF9F3 0%, #F5EDE0 50%, #EDE0D0 100%)' }}
    >
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #C85D3D 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #7D8C7E 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-12 lg:pt-20 pb-12 lg:pb-16">
        <p className="text-xs tracking-widest uppercase font-medium font-body text-charcoal/50 mb-6">
          Candidate · Students Conduct, Safety & Wellness
        </p>

        <h1 className="font-heading text-xl lg:text-2xl font-light text-charcoal mb-2">
          Hemanathan SV
        </h1>

        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] text-charcoal mb-3">
          Turning Student <span className="italic text-terracotta">Voices</span> Into Action.
        </h2>

        <p className="text-lg lg:text-xl font-body font-medium text-charcoal/60 mb-10">
          Students Conduct, Safety and Wellness
        </p>

        <div className="border-2 border-terracotta bg-white/80 backdrop-blur-sm rounded-2xl p-7 py-8 shadow-xl max-w-2xl">
          <h3 className="text-terracotta font-bold font-body text-lg mb-4">
            📢 Click here to share your feedback
          </h3>

          <div className="space-y-4 text-charcoal/80 font-body text-base lg:text-lg leading-relaxed">
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

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta text-white font-body font-extrabold text-base min-h-[56px] sm:min-h-[64px] px-8 sm:px-14 py-4 sm:py-5 shadow-xl shadow-terracotta/40 hover:bg-terracotta-dark transition-all duration-200 ring-4 ring-terracotta/20 cta-glow w-full sm:w-auto"
            >
              📝 Share Feedback
            </a>
          </div>

          <p className="mt-4 text-xs font-body text-charcoal/40">
            Takes 2–3 minutes · Powered by Google Forms
          </p>

          <ShareSection />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          {[
            { value: 'Listen / First', label: 'Philosophy' },
            { value: '5', label: 'Guiding Pillars' },
            { value: '100%', label: 'Student-Led' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-charcoal">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest font-body font-medium text-charcoal/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-charcoal/30">
          <div className="w-px h-8 bg-charcoal/20 animate-pulse" />
          <span className="text-[10px] tracking-widest font-body font-medium">SCROLL</span>
        </div>
      </div>
    </section>
  )
}
