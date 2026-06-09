import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'
const STORAGE_KEY = 'hs-sticky-cta-dismissed'

export default function StickyMobileCTA() {
  const [dismissed, setDismissed] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) === 'true' } catch { return false }
  })

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, dismissed) } catch { }
  }, [dismissed])

  if (dismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="relative bg-alabaster/95 backdrop-blur-md border-t border-terracotta/20 px-4 py-3 shadow-xl">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 p-1 text-charcoal/40 hover:text-charcoal transition-colors"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center rounded-full bg-terracotta text-white font-body font-bold text-base min-h-[52px] flex items-center justify-center gap-2 px-6 shadow-xl shadow-terracotta/25 hover:bg-terracotta-dark transition-all duration-200 cta-glow"
        >
          📝 Share Feedback
        </a>
      </div>
    </div>
  )
}
