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
    <div className="mt-6 pt-5 border-t border-gray-200">
      <p className="text-sm font-medium text-charcoal/50 mb-3">Spread the word</p>
      <div className="flex items-center gap-2">
        <button
          onClick={handleShare}
          className="flex items-center gap-2 rounded-lg border border-gray-200 text-charcoal/60 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors min-h-[38px] px-4 text-sm font-medium"
        >
          {copied ? <Check size={15} /> : <Share2 size={15} />}
          {copied ? 'Copied!' : 'Share'}
        </button>
        <button
          onClick={handleTwitter}
          className="rounded-lg border border-gray-200 text-charcoal/60 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors min-h-[38px] w-[38px] flex items-center justify-center text-sm"
          aria-label="Share on Twitter"
        >
          𝕏
        </button>
        <button
          onClick={handleWhatsApp}
          className="rounded-lg border border-gray-200 text-charcoal/60 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors min-h-[38px] w-[38px] flex items-center justify-center"
          aria-label="Share on WhatsApp"
        >
          💬
        </button>
        <button
          onClick={handleCopy}
          className="rounded-lg border border-gray-200 text-charcoal/60 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors min-h-[38px] w-[38px] flex items-center justify-center"
          aria-label="Copy link"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>
      </div>
    </div>
  )
}
