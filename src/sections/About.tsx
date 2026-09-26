import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { TextReveal } from '@/components/TextReveal'
import { profile, focusAreas } from '@/data/content'

export function About() {
  return (
    <section id="about" className="relative bg-void px-6 py-32 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading number="02" label="About" />

          <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-sm border border-line">
            <div className="absolute inset-0 bg-gradient-to-br from-graphite via-charcoal to-void" />
            <motion.img
              src="/images/shubham-mali-800.webp"
              srcSet="/images/shubham-mali-480.webp 480w, /images/shubham-mali-800.webp 800w"
              sizes="(min-width: 640px) 384px, calc(100vw - 48px)"
              width={800}
              height={1200}
              loading="lazy"
              decoding="async"
              alt={profile.name}
              initial={{ opacity: 0, scale: 1.08 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full object-cover grayscale-[0.15] contrast-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 font-display text-[10px] uppercase tracking-[0.25em] text-bone">
              {profile.location}
            </div>
          </div>
        </div>

        <div>
          <TextReveal
            className="max-w-xl font-display text-2xl leading-snug text-bone md:text-4xl"
            lines={['Full-stack developer,', 'two years into building', 'software people actually use.']}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 max-w-lg font-body text-sm leading-relaxed text-mist"
          >
            {profile.bioLong}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 max-w-lg border-l border-accent/40 pl-4 font-body text-sm leading-relaxed text-mist"
          >
            {profile.availability}
          </motion.p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="border-t border-line pt-4"
              >
                <div className="font-display text-xs text-accent">0{i + 1}</div>
                <h3 className="mt-2 font-display text-base text-bone">{area.title}</h3>
                <p className="mt-2 font-body text-xs leading-relaxed text-mist">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
