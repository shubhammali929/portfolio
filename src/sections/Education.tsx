import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { education } from '@/data/content'

export function Education() {
  return (
    <section id="education" className="relative bg-void px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="07" label="Education" />

        <div className="flex flex-col">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="grid gap-4 border-t border-line py-10 last:border-b md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10"
            >
              <span className="font-display text-xs text-accent">{edu.year}</span>

              <div>
                <h3 className="font-display text-2xl leading-tight text-bone md:text-4xl">
                  {edu.degree.split(' ').map((word, wi) => (
                    <span key={wi} className="mr-3 inline-block">
                      {word}
                    </span>
                  ))}
                </h3>
                <p className="mt-3 font-body text-sm text-mist">{edu.institution}</p>
                <p className="font-body text-xs text-mist">{edu.location}</p>
                <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-mist">{edu.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span key={course} className="rounded-full border border-line px-3 py-1 font-body text-[11px] text-mist">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
