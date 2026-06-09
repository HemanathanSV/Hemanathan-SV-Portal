const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

const PILLARS = [
  {
    num: '01',
    emoji: '🎙️',
    title: 'Listen First',
    color: '#C85D3D',
    gradient: 'from-[#C85D3D] to-[#E8866B]',
    bgLight: 'bg-[#C85D3D]/5',
    border: 'border-[#C85D3D]/20',
    description:
      'Before I act, I listen. Your experience shapes every decision I make. No agenda is set until I hear from you.',
  },
  {
    num: '02',
    emoji: '🛡️',
    title: 'Safety & Wellbeing',
    color: '#7D8C7E',
    gradient: 'from-[#7D8C7E] to-[#9DAC9E]',
    bgLight: 'bg-[#7D8C7E]/5',
    border: 'border-[#7D8C7E]/20',
    description:
      'Every student deserves to feel safe, supported, and cared for on campus — both physically and emotionally.',
  },
  {
    num: '03',
    emoji: '🤝',
    title: 'Respect & Inclusion',
    color: '#6B7B8C',
    gradient: 'from-[#6B7B8C] to-[#8B9BAC]',
    bgLight: 'bg-[#6B7B8C]/5',
    border: 'border-[#6B7B8C]/20',
    description:
      'A campus where every voice matters, regardless of background, identity, or circumstance.',
  },
  {
    num: '04',
    emoji: '✊',
    title: 'Action Over Words',
    color: '#A84A2E',
    gradient: 'from-[#A84A2E] to-[#C86A4E]',
    bgLight: 'bg-[#A84A2E]/5',
    border: 'border-[#A84A2E]/20',
    description:
      'I don\'t just talk about change — I work to make it happen. Commitments are followed through, not forgotten.',
  },
  {
    num: '05',
    emoji: '🌱',
    title: 'Growth Together',
    color: '#5C7A5E',
    gradient: 'from-[#5C7A5E] to-[#7C9A7E]',
    bgLight: 'bg-[#5C7A5E]/5',
    border: 'border-[#5C7A5E]/20',
    description:
      'We grow as a community when we support one another. Student wellbeing is a shared responsibility.',
  },
]

export default function PillarsSection() {
  return (
    <section id="mission" className="relative bg-alabaster py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <p className="text-xs tracking-widest uppercase font-medium font-body text-terracotta">
              Hemanathan SV · Guiding Pillars
            </p>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-charcoal mb-4">
            Hemanathan SV's <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-terracotta-light">Ideology</span>
          </h2>
          <p className="font-body text-base lg:text-lg text-charcoal/50 max-w-2xl mx-auto">
            Five principles that guide every conversation, every decision, and every action
            Hemanathan SV takes on behalf of students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className={`pillar-card rounded-2xl p-7 ${pillar.bgLight} ${pillar.border} border hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${pillar.gradient}/10`} />
              <div className="text-3xl mb-4 relative">{pillar.emoji}</div>
              <div className="relative">
                <p className="text-[11px] uppercase tracking-widest font-body font-medium mb-2" style={{ color: pillar.color }}>
                  Pillar {pillar.num}
                </p>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">{pillar.title}</h3>
                <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-5">{pillar.description}</p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-body font-medium transition-all duration-200 hover:gap-2"
                  style={{ color: pillar.color }}
                >
                  Share your thoughts
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          ))}

          <div
            className="pillar-card rounded-2xl p-7 flex flex-col justify-center relative overflow-hidden group"
            style={{ background: 'linear-gradient(135deg, #C85D3D 0%, #A84A2E 100%)' }}
          >
            <div className="absolute inset-0 shimmer opacity-30" />
            <div className="text-3xl mb-4 relative">💬</div>
            <p className="text-white font-heading text-xl font-semibold mb-2 relative">Have something to add?</p>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-6 relative">
              These pillars were shaped by early conversations with students — and they'll keep
              evolving with your input.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex self-start items-center gap-2 rounded-full bg-white text-terracotta font-body font-bold text-sm min-h-[44px] px-6 py-3 hover:bg-white/95 hover:scale-105 transition-all duration-200 shadow-xl relative"
            >
              Share Your Voice
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
