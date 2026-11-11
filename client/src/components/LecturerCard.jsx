import { Link } from 'react-router-dom'
import { ArrowUpRight, Star } from 'lucide-react'

function formatPrice(value) {
  return `${new Intl.NumberFormat('cs-CZ').format(value)} Kč`
}

export function LecturerCard({ lecturer }) {
  return (
    <Link
      to={`/lektori/${lecturer.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-4xl bg-sand shadow-soft"
    >
      <img
        src={lecturer.image}
        alt={`Lektor ${lecturer.name}`}
        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5">
        <span className="rounded-full bg-cream/90 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink backdrop-blur">
          {lecturer.subject}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-ink/55 px-3 py-1.5 text-xs font-semibold text-cream backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-lime text-lime" />
          {lecturer.rating.toFixed(1)}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cream/60">
          {lecturer.city}
        </p>
        <h3 className="mt-1 font-display text-[1.65rem] font-bold leading-tight tracking-[-0.04em]">
          {lecturer.name}
        </h3>
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-cream/15 pt-4">
          <div>
            <p className="text-sm font-semibold">{formatPrice(lecturer.price)} / lekce</p>
            <p className="mt-0.5 text-[0.7rem] text-cream/55">1. lekce zdarma</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime text-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
