import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CustomCursor } from '@/components/CustomCursor'
import { Footer } from '@/components/Footer'
import { profile } from '@/data/content'

export function ResumePage() {
  useEffect(() => {
    document.title = `${profile.name} — Resume`
  }, [])

  return (
    <>
      <CustomCursor />
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-void/70 px-6 py-5 backdrop-blur-md md:px-10">
        <a href="/" data-cursor="HOME" className="font-display text-sm tracking-[0.25em] text-bone">
          <span className="sm:hidden">SM</span>
          <span className="hidden sm:inline">{profile.name.toUpperCase()}</span>
        </a>
        <a
          href="/"
          data-cursor="BACK"
          className="group flex items-center gap-2 font-display text-xs uppercase tracking-[0.25em] text-mist transition-colors duration-300 hover:text-bone"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Back to Portfolio
        </a>
      </header>

      <main className="relative min-h-screen bg-void px-6 pb-32 pt-32 md:px-10">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center gap-4"
          >
            <span className="font-display text-xs text-accent">CV</span>
            <span className="h-px w-10 bg-line" />
            <h1 className="font-display text-xs uppercase tracking-[0.35em] text-mist">Resume</h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="max-w-xl font-display text-3xl leading-tight text-bone md:text-4xl"
          >
            {profile.name}, {profile.currentTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 max-w-lg font-body text-sm leading-relaxed text-mist"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/resume.pdf"
              download={`${profile.name.replace(/\s+/g, '_')}_Resume.pdf`}
              data-cursor="DOWNLOAD"
              className="group flex items-center gap-3 border border-line px-8 py-4 font-display text-xs uppercase tracking-[0.25em] text-bone transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Download Resume
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="group flex items-center gap-3 font-display text-xs uppercase tracking-[0.25em] text-mist transition-colors duration-300 hover:text-bone"
            >
              Open in New Tab
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-14 overflow-hidden rounded-sm border border-line bg-charcoal"
          >
            <iframe
              src="/resume.pdf"
              title={`${profile.name} — Resume`}
              className="h-[75vh] w-full"
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}
