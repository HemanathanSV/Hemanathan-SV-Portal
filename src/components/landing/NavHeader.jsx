import { useState, useEffect } from 'react'
import { Menu, X, Send } from 'lucide-react'

const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Why', href: '#why' },
  { label: 'Feedback', href: '#feedback' },
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
        scrolled ? 'bg-white shadow-sm border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        <a href="#about" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-terracotta flex items-center justify-center shrink-0">
            <span className="text-white font-heading font-bold text-sm">H</span>
          </div>
          <div>
            <p className="text-sm font-heading font-semibold leading-tight text-charcoal">
              HEMANATHAN <span className="text-terracotta">SV</span>
            </p>
            <p className="text-[10px] uppercase tracking-widest text-charcoal/50 font-body font-medium leading-tight">
              Voice Portal
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-charcoal/60 hover:text-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-terracotta text-white text-sm font-bold min-h-[42px] px-5 py-2.5 hover:bg-terracotta-dark transition-colors shadow-sm"
          >
            <Send size={16} />
            Share Your Voice
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
        className={`fixed inset-0 top-0 z-40 lg:hidden transition-opacity duration-200 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl flex flex-col pt-20 px-8 transition-transform duration-200 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-body font-medium text-charcoal/60 hover:text-terracotta transition-colors py-3 border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta text-white font-bold text-base min-h-[50px] px-6 hover:bg-terracotta-dark transition-colors w-full"
          >
            <Send size={18} />
            Share Your Voice
          </a>
        </nav>
      </div>
    </header>
  )
}
