import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Why I Built This', href: '#why' },
  { label: 'Share Feedback', href: '#feedback' },
  { label: 'FAQ', href: '#faq' },
]

export default function NavHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? 'bg-alabaster/95 backdrop-blur-md border-b border-alabaster/20 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-terracotta flex items-center justify-center shrink-0">
            <span className="text-white font-heading font-bold text-sm">H</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-heading font-semibold leading-tight text-charcoal">
              HEMANATHAN <span className="text-terracotta">SV</span>
            </p>
            <p className="text-[10px] uppercase tracking-widest text-charcoal/60 font-body font-medium leading-tight">
              Voice Portal
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-charcoal/70 hover:text-terracotta transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta text-white font-body font-bold text-sm min-h-[44px] px-6 py-3 shadow-xl shadow-terracotta/25 hover:bg-terracotta-dark transition-all duration-200 cta-glow"
          >
            📝 Share Your Voice
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-charcoal hover:text-terracotta transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-16 bg-alabaster z-40 transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 pt-12 px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-body font-medium text-charcoal/70 hover:text-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-terracotta text-white font-body font-bold text-base min-h-[56px] px-10 py-4 shadow-xl shadow-terracotta/25 hover:bg-terracotta-dark transition-all duration-200"
          >
            📝 Share Your Voice
          </a>
        </nav>
      </div>
    </header>
  )
}
