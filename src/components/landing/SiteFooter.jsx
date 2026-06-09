import { Send } from 'lucide-react'

const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Why', href: '#why' },
  { label: 'Feedback', href: '#feedback' },
  { label: 'FAQ', href: '#faq' },
]

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-terracotta flex items-center justify-center shrink-0">
                <span className="text-white font-heading font-bold text-sm">H</span>
              </div>
              <div>
                <p className="text-sm font-heading font-semibold text-white">
                  HEMANATHAN <span className="text-terracotta">SV</span>
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
                  Voice Portal
                </p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">Listening. Acting. Growing. Together.</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Navigate</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-terracotta transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Get Involved</p>
            <p className="text-sm text-white/50 leading-relaxed">
              Share your feedback and help shape the priorities that matter most to students.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-terracotta/50 text-terracotta text-sm font-bold min-h-[42px] px-5 py-2 hover:bg-terracotta hover:text-white transition-colors"
            >
              <Send size={16} />
              Share Your Feedback
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {year} Hemanathan SV — Candidate for Students Conduct, Safety &amp; Wellness.
          </p>
          <p className="text-xs text-white/20">Student-led · Community-driven · Listening first</p>
        </div>
      </div>
    </footer>
  )
}
