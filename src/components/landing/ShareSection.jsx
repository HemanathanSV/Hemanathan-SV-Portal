import { Share2, Check, Copy } from 'lucide-react'
import { useState } from 'react'

const SHARE_URL = 'https://hemanathan4students.com/'
const SHARE_TEXT = 'A platform built to listen to students\' opinions, concerns, expectations, and challenges, understand their needs, and turn their voices into meaningful action. You\'re just one vote away from making it happen.'

export default function ShareSection() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Hemanathan SV — Voice Portal', text: SHARE_TEXT, url: SHARE_URL })
      } catch { }
    } else {
      handleCopy()
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { }
  }

  const handleTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`, '_blank', 'noopener')
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + ' ' + SHARE_URL)}`, '_blank', 'noopener')
  }

  return (
    <div className="mt-8 pt-6 border-t border-terracotta/10">
      <p className="text-sm font-body font-medium text-charcoal/50 mb-3">Spread the word</p>
      <div className="flex items-center gap-3">
        <button
          onClick={handleShare}
          className="flex items-center gap-2 rounded-full border border-terracotta/20 text-charcoal/60 hover:bg-terracotta hover:text-white hover:border-terracotta transition-all duration-200 min-h-[40px] px-4 py-2 text-sm font-body font-medium"
        >
          {copied ? <Check size={16} /> : <Share2 size={16} />}
          {copied ? 'Copied!' : 'Share'}
        </button>
        <button
          onClick={handleTwitter}
          className="rounded-full border border-terracotta/20 text-charcoal/60 hover:bg-terracotta hover:text-white hover:border-terracotta transition-all duration-200 min-h-[40px] w-10 h-10 flex items-center justify-center text-sm font-bold"
          aria-label="Share on Twitter"
        >
          𝕏
        </button>
        <button
          onClick={handleWhatsApp}
          className="rounded-full border border-terracotta/20 text-charcoal/60 hover:bg-terracotta hover:text-white hover:border-terracotta transition-all duration-200 min-h-[40px] w-10 h-10 flex items-center justify-center text-lg"
          aria-label="Share on WhatsApp"
        >
          💬
        </button>
        <button
          onClick={handleCopy}
          className="rounded-full border border-terracotta/20 text-charcoal/60 hover:bg-terracotta hover:text-white hover:border-terracotta transition-all duration-200 min-h-[40px] w-10 h-10 flex items-center justify-center"
          aria-label="Copy link"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  )
}
