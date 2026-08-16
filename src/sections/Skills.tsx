import { Suspense, lazy, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { skills } from '@/data/content'
import { SKILL_ICONS } from '@/data/skillIcons'
import { usePointer } from '@/hooks/usePointer'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery'

const SkillsCanvas = lazy(() => import('@/three/SkillsCanvas').then((m) => ({ default: m.SkillsCanvas })))

const CATEGORY_LABEL: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  data: 'Data & Storage',
  cloud: 'Cloud & DevOps',
  tools: 'Tooling',
}

export function Skills() {
  const pointer = usePointer()
  const [hovered, setHovered] = useState<{ name: string; category: string } | null>(null)
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()
  const { ref: canvasRef, inView } = useInViewOnce<HTMLDivElement>()
  const showCanvas = !reducedMotion && inView

  return (
    <section id="skills" className="relative bg-void px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04" label="Tech Stack" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h3 className="max-w-md font-display text-3xl leading-tight text-bone md:text-4xl">
              Technologies I reach for, in one continuous system.
            </h3>
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-mist">
              Hover any node in the constellation to see where it fits.
            </p>

            <div className="relative mt-10 h-16">
              <AnimatePresence mode="wait">
                {hovered ? (
                  <motion.div
                    key={hovered.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="border-l border-accent pl-4"
                  >
                    <div className="font-display text-xl text-bone">{hovered.name}</div>
                    <div className="font-display text-[10px] uppercase tracking-[0.3em] text-accent">
                      {CATEGORY_LABEL[hovered.category] ?? hovered.category}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-display text-xs uppercase tracking-[0.3em] text-mist"
                  >
                    {skills.length} technologies
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div ref={canvasRef} className="relative aspect-square w-full">
            {showCanvas ? (
              <Suspense fallback={null}>
                <SkillsCanvas
                  pointer={pointer}
                  onHover={setHovered}
                  quality={isMobile ? 'low' : 'high'}
                  isMobile={isMobile}
                />
              </Suspense>
            ) : (
              <div className="flex h-full flex-wrap content-center justify-center gap-3 p-6">
                {skills.map((s) => {
                  const entry = SKILL_ICONS[s.name]
                  const Icon = entry?.icon
                  return (
                    <button
                      key={s.name}
                      type="button"
                      onFocus={() => setHovered({ name: s.name, category: s.group })}
                      onBlur={() => setHovered(null)}
                      onMouseEnter={() => setHovered({ name: s.name, category: s.group })}
                      onMouseLeave={() => setHovered(null)}
                      className="group flex items-center gap-2 rounded-full border border-line bg-void/40 px-4 py-2 font-body text-xs text-mist transition-colors duration-300 hover:border-accent/60 hover:text-bone"
                      style={{ ['--icon-color' as string]: entry?.color ?? '#c98a4b' }}
                    >
                      {Icon ? (
                        <Icon
                          size={14}
                          className="text-mist transition-colors duration-300 group-hover:text-[var(--icon-color)]"
                        />
                      ) : null}
                      {s.name}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
