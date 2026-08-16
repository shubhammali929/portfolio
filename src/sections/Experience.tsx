import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { Counter } from '@/components/Counter'
import { profile } from '@/data/content'

export function Experience() {
  return (
    <section id="experience" className="relative bg-void px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="03" label="Experience" />

        <div className="grid gap-16 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="flex items-center gap-6 lg:flex-col lg:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex h-4 w-4 items-center justify-center"
            >
              <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent/40" />
              <span className="h-2 w-2 rounded-full bg-accent" />
            </motion.div>
            <div className="h-px w-16 bg-line lg:h-40 lg:w-px" />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-[13vw] leading-none text-bone md:text-[7rem]"
            >
              <Counter to={profile.yearsExperience} />
              <span className="text-accent">+</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-1 font-display text-xs uppercase tracking-[0.35em] text-mist"
            >
              Years of Experience
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-12 max-w-xl border-l border-accent/40 pl-6"
            >
              <div className="font-display text-xs uppercase tracking-[0.3em] text-accent">Currently</div>
              <h3 className="mt-2 font-display text-2xl text-bone md:text-3xl">
                {profile.currentTitle} at {profile.currentCompany}
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-mist">{profile.bio}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
