import { Mic, Shield, Handshake, Zap, Sprout, MessageCircle } from 'lucide-react'

const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

const PILLARS = [
  {
    icon: Mic,
    title: 'Listen First',
    subtitle: 'Pillar 01',
    description: 'Before I act, I listen. Your experience shapes every decision. No agenda is set until I hear from you.',
    color: '#C85D3D',
    bg: 'bg-[#C85D3D]/5',
    border: 'border-[#C85D3D]/20',
    iconBg: 'bg-[#C85D3D]/10',
  },
  {
    icon: Shield,
    title: 'Safety & Wellbeing',
    subtitle: 'Pillar 02',
    description: 'Every student deserves to feel safe, supported, and cared for on campus — physically and emotionally.',
    color: '#7D8C7E',
    bg: 'bg-[#7D8C7E]/5',
    border: 'border-[#7D8C7E]/20',
    iconBg: 'bg-[#7D8C7E]/10',
  },
  {
    icon: Handshake,
    title: 'Respect & Inclusion',
    subtitle: 'Pillar 03',
    description: 'A campus where every voice matters, regardless of background, identity, or circumstance.',
    color: '#6B7B8C',
    bg: 'bg-[#6B7B8C]/5',
    border: 'border-[#6B7B8C]/20',
    iconBg: 'bg-[#6B7B8C]/10',
  },
  {
    icon: Zap,
    title: 'Action Over Words',
    subtitle: 'Pillar 04',
    description: 'I don\'t just talk about change — I work to make it happen. Commitments are followed through.',
    color: '#A84A2E',
    bg: 'bg-[#A84A2E]/5',
    border: 'border-[#A84A2E]/20',
    iconBg: 'bg-[#A84A2E]/10',
  },
  {
    icon: Sprout,
    title: 'Growth Together',
    subtitle: 'Pillar 05',
    description: 'We grow as a community when we support one another. Student wellbeing is a shared responsibility.',
    color: '#5C7A5E',
    bg: 'bg-[#5C7A5E]/5',
    border: 'border-[#5C7A5E]/20',
    iconBg: 'bg-[#5C7A5E]/10',
  },
]

export default function PillarsSection() {
  return (
    <section id="mission" className="py-20 lg:py-28 bg-alabaster">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
            Hemanathan SV · Guiding Pillars
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-3">
            My <span className="italic text-terracotta">Ideology</span>
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            Five principles that guide every conversation, decision, and action I take on behalf of
            students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.subtitle}
                className={`${pillar.bg} ${pillar.border} border rounded-xl p-6 hover:shadow-md transition-shadow`}
              >
                <div className={`w-10 h-10 rounded-lg ${pillar.iconBg} flex items-center justify-center mb-4`}>
                  <Icon size={20} style={{ color: pillar.color }} />
                </div>
                <p className="text-[11px] uppercase tracking-widest font-medium mb-1" style={{ color: pillar.color }}>
                  {pillar.subtitle}
                </p>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">{pillar.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed mb-4">{pillar.description}</p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline inline-flex items-center gap-1"
                  style={{ color: pillar.color }}
                >
                  Share thoughts
                  <span>→</span>
                </a>
              </div>
            )
          })}

          <div className="rounded-xl p-6 flex flex-col justify-center bg-gradient-to-br from-terracotta to-terracotta-dark border border-terracotta">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
              <MessageCircle size={20} className="text-white" />
            </div>
            <p className="text-white font-heading text-lg font-bold mb-1">Have something to add?</p>
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              These pillars were shaped by early conversations and evolve with your input.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex self-start items-center gap-2 rounded-lg bg-white text-terracotta font-bold text-sm min-h-[42px] px-5 py-2 hover:bg-white/90 transition-colors"
            >
              Share Your Voice
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
