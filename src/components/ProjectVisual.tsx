/** Tasteful abstract, per-project SVG compositions — not fake UI screenshots. */
export function ProjectVisual({ variant }: { variant: 'messenger' | 'aicode' | 'voice' }) {
  if (variant === 'messenger') {
    return (
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <rect x="0" y="0" width="400" height="400" fill="#121214" />
        <rect x="60" y="90" width="180" height="70" rx="14" fill="none" stroke="#c98a4b" strokeWidth="1.5" />
        <rect x="150" y="190" width="200" height="70" rx="14" fill="none" stroke="#eeeeec" strokeWidth="1" opacity="0.6" />
        <rect x="80" y="280" width="150" height="60" rx="14" fill="none" stroke="#2a2a2e" strokeWidth="1" />
        <circle cx="150" cy="125" r="3" fill="#c98a4b" />
        <circle cx="170" cy="125" r="3" fill="#c98a4b" />
        <circle cx="190" cy="125" r="3" fill="#c98a4b" />
      </svg>
    )
  }
  if (variant === 'aicode') {
    return (
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <rect x="0" y="0" width="400" height="400" fill="#121214" />
        <path d="M140 130 L90 200 L140 270" fill="none" stroke="#eeeeec" strokeWidth="1.5" opacity="0.7" />
        <path d="M260 130 L310 200 L260 270" fill="none" stroke="#eeeeec" strokeWidth="1.5" opacity="0.7" />
        <line x1="220" y1="120" x2="180" y2="280" stroke="#c98a4b" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="60" fill="none" stroke="#2a2a2e" strokeWidth="1" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full">
      <rect x="0" y="0" width="400" height="400" fill="#121214" />
      <circle cx="200" cy="200" r="40" fill="none" stroke="#c98a4b" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="80" fill="none" stroke="#2a2a2e" strokeWidth="1" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="#2a2a2e" strokeWidth="1" opacity="0.6" />
      <path d="M200 200 L260 140" stroke="#eeeeec" strokeWidth="1.5" />
      <circle cx="260" cy="140" r="4" fill="#eeeeec" />
    </svg>
  )
}
