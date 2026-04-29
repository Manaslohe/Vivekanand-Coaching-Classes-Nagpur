import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { scrollToId } from '../utils/scroll'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => scrollToId('top', { duration: 1200, offset: 0 })}
          className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/50 bg-[#11183f] px-4 py-3 text-sm font-black text-white shadow-[0_18px_40px_rgba(17,24,63,0.28)] backdrop-blur transition hover:-translate-y-1 hover:bg-[#f58220] sm:right-6"
          initial={{ opacity: 0, x: 24, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 24, scale: 0.92 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#11183f]">
            <ArrowUp size={17} />
          </span>
          <span className="hidden sm:inline">Top</span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

export default BackToTop
