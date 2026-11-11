import { BadgeCheck, Sparkles, Star } from 'lucide-react'
import { lecturers } from '../data/lecturers'

export function AuthAside({
  title = 'A teď jste chytřejší!',
  text = 'První lekce je zdarma. Ty si vybereš lektora, my se postaráme o zbytek.',
}) {
  return (
    <div className="relative hidden overflow-hidden bg-ink p-10 text-cream lg:flex lg:flex-col lg:justify-between">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime/15 blur-2xl" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-clay/15 blur-3xl" />

      <div className="relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cream/70">
          <Sparkles className="h-3.5 w-3.5 text-lime" />
          Learniko Academy
        </span>
        <h2 className="mt-7 max-w-sm font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.04em] xl:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xs text-sm leading-7 text-cream/55">{text}</p>
      </div>

      <div className="relative z-10 my-10 h-56">
        <div className="absolute bottom-0 left-4 w-40 rotate-[-7deg] overflow-hidden rounded-3xl border-4 border-ink shadow-lift xl:w-44">
          <img
            src={lecturers[1].image}
            alt=""
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="absolute bottom-6 right-2 w-44 rotate-[6deg] overflow-hidden rounded-3xl border-4 border-ink shadow-lift xl:w-48">
          <img
            src={lecturers[0].image}
            alt=""
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="absolute left-1/2 top-2 z-20 -translate-x-1/2 rounded-full bg-lime px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-ink shadow-soft">
          1. lekce zdarma
        </div>
      </div>

      <div className="relative z-10 space-y-3 border-t border-cream/15 pt-6 text-sm text-cream/65">
        <p className="flex items-center gap-2.5">
          <BadgeCheck className="h-4 w-4 text-lime" />
          Ověření lektoři s praxí
        </p>
        <p className="flex items-center gap-2.5">
          <Star className="h-4 w-4 fill-lime text-lime" />
          4,9/5 průměrné hodnocení
        </p>
      </div>
    </div>
  )
}
