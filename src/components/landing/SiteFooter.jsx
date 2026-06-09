const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Why I Built This', href: '#why' },
  { label: 'Share Feedback', href: '#feedback' },
  { label: 'FAQ', href: '#faq' },
]

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center shrink-0">
                <span className="text-white font-heading font-bold text-base">H</span>
              </div>
              <div>
                <p className="text-sm font-heading font-semibold leading-tight text-white">
                  HEMANATHAN <span className="text-terracotta">SV</span>
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-body font-medium leading-tight">
                  Voice Portal
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Listening. Acting. Growing. Together.
            </p>
            <p className="font-body text-xs text-white/40">
              Feedback collected via Google Forms for your privacy.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs tracking-widest uppercase font-medium font-body text-white/50">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-terracotta transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs tracking-widest uppercase font-medium font-body text-white/50">
              Get Involved
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Your voice drives this campaign. Share your feedback and help shape the priorities
              that matter most to students.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-terracotta text-terracotta font-body font-bold text-sm min-h-[44px] px-5 py-3 hover:bg-terracotta hover:text-white transition-all duration-200"
            >
              Share Your Feedback →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40 text-center sm:text-left">
            &copy; {year} Hemanathan SV — Candidate for Students Conduct, Safety &amp; Wellness. All
            rights reserved.
          </p>
          <p className="font-body text-xs text-white/30 text-center sm:text-right">
            Student-led. Community-driven. Listening first.
          </p>
        </div>
      </div>
    </footer>
  )
}
