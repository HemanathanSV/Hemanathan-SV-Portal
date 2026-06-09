import { Send, ArrowRight } from 'lucide-react'

const FORM_URL = 'https://forms.gle/CxZTfRKVWLQJCuHs9'

export default function CTABanner() {
  return (
    <section className="py-16 lg:py-20 bg-terracotta">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
          Your experience matters.
          <br />
          <span className="italic text-white/80">Help shape what comes next.</span>
        </h2>
        <p className="text-white/80 mb-8 max-w-lg mx-auto">
          Your feedback goes directly into shaping the priorities I'll champion as your
          representative.
        </p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-white text-terracotta font-bold text-base min-h-[52px] px-8 py-3 hover:bg-white/90 transition-colors shadow-sm"
        >
          <Send size={20} />
          Submit Feedback
          <ArrowRight size={20} />
        </a>
        <p className="mt-3 text-xs text-white/50">Takes 2-3 minutes · Google Forms</p>
      </div>
    </section>
  )
}
