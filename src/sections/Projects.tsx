import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { TiltCard } from '@/components/TiltCard'
import { ProjectVisual } from '@/components/ProjectVisual'
import { projects } from '@/data/content'

const VARIANTS: Array<'messenger' | 'aicode' | 'voice'> = ['messenger', 'aicode', 'voice']

export function Projects() {
  return (
    <section id="projects" className="relative bg-void px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="05" label="Projects" />

        <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col justify-between bg-void p-8 transition-colors duration-300 hover:bg-charcoal"
            >
              <div>
                <TiltCard className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-line">
                  <ProjectVisual variant={VARIANTS[i % VARIANTS.length]} />
                </TiltCard>

                <span className="mt-6 block font-display text-xs text-accent">
                  PROJECT {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-xl text-bone">{project.title}</h3>
                <p className="mt-3 font-body text-xs leading-relaxed text-mist">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3 py-1 font-body text-[10px] text-mist"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-line pt-6">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="VIEW"
                    className="group/link flex items-center gap-1 font-display text-[10px] uppercase tracking-[0.2em] text-bone"
                  >
                    View
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="OPEN"
                    className="font-display text-[10px] uppercase tracking-[0.2em] text-mist transition-colors hover:text-bone"
                  >
                    Source
                  </a>
                )}
                {project.videoDemo && (
                  <a
                    href={project.videoDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="PLAY"
                    className="font-display text-[10px] uppercase tracking-[0.2em] text-mist transition-colors hover:text-bone"
                  >
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
