import { motion } from 'framer-motion'

export function SectionHeading({
  number,
  label,
  center = false,
}: {
  number: string
  label: string
  center?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6 }}
      className={`mb-10 flex items-center gap-4 ${center ? 'justify-center' : ''}`}
    >
      <span className="font-display text-xs text-accent">{number}</span>
      <span className="h-px w-10 bg-line" />
      <h2 className="font-display text-xs uppercase tracking-[0.35em] text-mist">{label}</h2>
    </motion.div>
  )
}
