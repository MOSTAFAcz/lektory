import { Link } from 'react-router-dom'

export function Logo({ light = false }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Learniko Academy — domů">
      <span
        className={`relative grid h-10 w-10 place-items-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 ${
          light ? 'bg-lime text-ink' : 'bg-ink text-lime'
        }`}
      >
        <span className="font-display text-2xl font-extrabold leading-none">l</span>
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-clay" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-xl font-bold tracking-[-0.05em] ${
            light ? 'text-cream' : 'text-ink'
          }`}
        >
          learniko
        </span>
        <span
          className={`mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.28em] ${
            light ? 'text-cream/45' : 'text-ink/45'
          }`}
        >
          academy
        </span>
      </span>
    </Link>
  )
}
