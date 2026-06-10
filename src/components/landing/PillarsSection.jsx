const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

const PILLARS = [
  {
    num: '01',
    emoji: '🎙️',
    title: 'Listen First',
    color: '#C85D3D',
    description:
      'Before I act, I listen. Your experience shapes every decision I make. No agenda is set until I hear from you.',
  },
  {
    num: '02',
    emoji: '🛡️',
    title: 'Safety & Wellbeing',
    color: '#7D8C7E',
    description:
      'Every student deserves to feel safe, supported, and cared for on campus — both physically and emotionally.',
  },
  {
    num: '03',
    emoji: '🤝',
    title: 'Respect & Inclusion',
    color: '#6B7B8C',
    description:
      'A campus where every voice matters, regardless of background, identity, or circumstance.',
  },
  {
    num: '04',
    emoji: '✊',
    title: 'Action Over Words',
    color: '#A84A2E',
    description:
      'I don\'t just talk about change — I work to make it happen. Commitments are followed through, not forgotten.',
  },
  {
    num: '05',
    emoji: '🌱',
    title: 'Growth Together',
    color: '#5C7A5E',
    description:
      'We grow as a community when we support one another. Student wellbeing is a shared responsibility.',
  },
]

export default function PillarsSection() {
  return (
    <section id="mission" className="bg-alabaster py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase font-medium font-body text-charcoal/50 mb-6">
            Hemanathan SV · Guiding Pillars
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-charcoal mb-4">
            Hemanathan SV's <span className="italic text-terracotta">Ideology</span>
          </h2>
          <p className="font-body text-base lg:text-lg text-charcoal/60 max-w-2xl mx-auto">
            Five principles that guide every conversation, every decision, and every action
            Hemanathan SV takes on behalf of students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 1px 3px rgba(26,32,44,0.04), 0 1px 2px rgba(26,32,44,0.02)', border: `1px solid ${pillar.color}20`, backgroundColor: `${pillar.color}05` }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,32,44,0.08)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(26,32,44,0.04), 0 1px 2px rgba(26,32,44,0.02)'}
            >
              <div className="text-3xl mb-4">{pillar.emoji}</div>
              <p className="text-[11px] uppercase tracking-widest font-body font-medium mb-2" style={{ color: pillar.color }}>
                Pillar {pillar.num}
              </p>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">{pillar.title}</h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-4">{pillar.description}</p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: pillar.color }}
              >
                Share your thoughts on this →
              </a>
            </div>
          ))}

          <div
            className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center"
            style={{ backgroundColor: '#C85D3D', boxShadow: '0 12px 40px rgba(200,93,61,0.15)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(200,93,61,0.25)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(200,93,61,0.15)'}
          >
            <div className="text-3xl mb-4">💬</div>
            <p className="text-white font-heading text-xl font-semibold mb-2">Have something to add?</p>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-6">
              These pillars were shaped by early conversations with students — and they'll keep
              evolving with your input.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex self-start items-center gap-2 rounded-full bg-white text-terracotta font-body font-bold text-sm min-h-[44px] px-6 py-3 hover:bg-white/90 transition-all duration-200"
            >
              Share Your Voice
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
