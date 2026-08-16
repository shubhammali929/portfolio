import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navItems, socials } from '@/data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-colors duration-500 md:px-10 ${
          scrolled ? 'bg-void/70 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <button
          onClick={() => goTo('home')}
          data-cursor="TOP"
          className="font-display text-sm tracking-[0.25em] text-bone"
        >
          <span className="sm:hidden">SM</span>
          <span className="hidden sm:inline">SHUBHAM MALI</span>
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          data-cursor={open ? 'CLOSE' : 'MENU'}
          className="group flex items-center gap-3 font-display text-xs uppercase tracking-[0.25em] text-bone"
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <span className="relative flex h-8 w-8 flex-col items-center justify-center gap-[5px]">
            <span
              className={`h-px w-5 bg-bone transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-5 bg-bone transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-30 bg-void/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-4 top-20 z-40 flex max-h-[75vh] w-[calc(100%-2rem)] max-w-xs flex-col gap-8 overflow-y-auto rounded-sm border border-line bg-void p-6 shadow-2xl md:right-10 md:max-w-sm md:p-8"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => goTo(item.id)}
                    data-cursor="GO"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.03 }}
                    className="group flex items-baseline gap-4 border-b border-line py-3 text-left"
                  >
                    <span className="font-display text-[10px] text-mist">{item.number}</span>
                    <span className="font-display text-xl text-bone/70 transition-colors duration-300 group-hover:text-accent">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    data-cursor="OPEN"
                    className="font-body text-[11px] uppercase tracking-[0.2em] text-mist transition-colors hover:text-bone"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
