import { useState, useEffect } from 'react'
import { X, Send } from 'lucide-react'

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
      <div className="bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-charcoal transition-colors"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-terracotta text-white font-bold text-base min-h-[48px] px-6 hover:bg-terracotta-dark transition-colors shadow-sm"
        >
          <Send size={18} />
          Share Feedback
        </a>
      </div>
    </div>
  )
}
