import { profile, socials } from '@/data/content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-void px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <div className="font-display text-sm tracking-[0.2em] text-bone">{profile.name.toUpperCase()}</div>
          <div className="font-body text-xs uppercase tracking-[0.15em] text-mist">{profile.role}</div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {socials.map((s) => (
            <a
              key={s.key}
              href={s.url}
              target={s.url.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="font-body text-xs uppercase tracking-[0.15em] text-mist transition-colors hover:text-bone"
            >
              {s.label}
            </a>
          ))}
          <a
            href={`tel:${profile.phone}`}
            data-cursor="CALL"
            className="font-body text-xs uppercase tracking-[0.15em] text-mist transition-colors hover:text-bone"
          >
            {profile.phone}
          </a>
        </div>

        <div className="font-body text-xs text-mist">© {new Date().getFullYear()} {profile.name}</div>
      </div>
    </footer>
  )
}
