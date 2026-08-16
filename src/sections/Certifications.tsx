import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { certifications } from '@/data/content'

const BADGE_COLOR: Record<string, string> = {
  gold: '#c98a4b',
  silver: '#9a9a9f',
  bronze: '#8a5a34',
}

export function Certifications() {
  return (
    <section id="certifications" className="relative bg-void px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="06" label="Certifications" />

        <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="VERIFY"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative flex flex-col justify-between bg-void p-8 transition-colors duration-300 hover:bg-charcoal"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: BADGE_COLOR[cert.badge] }}
                  />
                  <span className="font-display text-[10px] uppercase tracking-[0.25em] text-mist">
                    {cert.organization}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl text-bone">{cert.title}</h3>
                <p className="mt-3 font-body text-xs leading-relaxed text-mist">{cert.description}</p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-line pt-4">
                <span className="font-body text-[10px] text-mist">ID {cert.credentialId}</span>
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-mist transition-colors group-hover:text-accent">
                  Verify →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
