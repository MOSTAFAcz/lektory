import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function CtaBand({
  eyebrow = 'První krok je na nás',
  title = 'A teď jste chytřejší!',
  text = 'Vyberte si lektora, zaregistrujte se a první lekci máte zdarma. Bez závazků, bez tlaku a bez nekonečných videí.',
  to = '/registrace',
  label = 'Chci 1. lekci zdarma',
}) {
  return (
    <div className="relative overflow-hidden rounded-5xl bg-ink px-6 py-12 text-cream sm:px-10 sm:py-14 lg:px-16 lg:py-16">
      <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-lime/15 blur-2xl" />
      <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-clay/15 blur-3xl" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">{eyebrow}</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-lime">{title.split(' ').slice(-1)}</span>
          </h2>
        </div>
        <div>
          <p className="max-w-md text-base leading-7 text-cream/65">{text}</p>
          <Link to={to} className="btn btn-lime mt-7">
            {label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
