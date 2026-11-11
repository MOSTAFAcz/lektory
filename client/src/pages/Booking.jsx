import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import { getLecturer } from '../data/lecturers'
import { Steps } from '../components/Steps'

function formatPrice(value) {
  return `${new Intl.NumberFormat('cs-CZ').format(value)} Kč`
}

export function Booking() {
  const { slug } = useParams()
  const lecturer = getLecturer(slug)
  const [selectedSlot, setSelectedSlot] = useState(lecturer.slots[0])

  return (
    <section className="container-x py-8 sm:py-12">
      <Link
        to={`/lektori/${lecturer.slug}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-ink/50 transition hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Zpět na profil lektora
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <div>
          <Steps active={1} />

          <h1 className="mt-8 font-display text-4xl font-bold leading-[0.94] tracking-[-0.055em] text-ink sm:text-5xl lg:text-6xl">
            Rezervuj si první<br />
            <span className="text-moss">lekci zdarma.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink/55 sm:text-base">
            Vyber termín, který ti sedne. Rezervaci potvrdíme a všechny detaily pošleme
            tobě i lektorovi e-mailem.
          </p>

          <div className="mt-8 rounded-4xl border border-ink/10 bg-paper p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-4">
              <img
                src={lecturer.image}
                alt={`Lektor ${lecturer.name}`}
                className="h-20 w-16 rounded-2xl object-cover sm:h-24 sm:w-20"
              />
              <div className="min-w-0 flex-1">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink/35">
                  Vybraný lektor
                </p>
                <p className="mt-1 font-display text-2xl font-bold tracking-[-0.04em] text-ink">
                  {lecturer.name}
                </p>
                <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink/50">
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-lime text-ink" />
                    {lecturer.rating.toFixed(1)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-clay" />
                    {lecturer.city}
                  </span>
                  <span>{lecturer.subject}</span>
                </p>
              </div>
              <span className="rounded-full bg-lime px-3.5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink">
                1. lekce zdarma
              </span>
            </div>
          </div>

          <div className="mt-9">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-moss" />
              <h2 className="font-display text-2xl font-bold tracking-[-0.04em] text-ink">
                Vyber termín
              </h2>
            </div>
            <p className="mt-2 text-sm text-ink/50">Orientační volné termíny. Přesný čas doladíme e-mailem.</p>

            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {lecturer.slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                    selectedSlot === slot
                      ? 'border-ink bg-ink text-cream shadow-soft'
                      : 'border-ink/10 bg-paper text-ink/60 hover:border-ink/30 hover:text-ink'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <button type="button" className="mt-3 text-xs font-bold text-moss hover:underline">
              Chci jiný termín
            </button>
          </div>

          <div className="mt-9">
            <h2 className="font-display text-2xl font-bold tracking-[-0.04em] text-ink">
              Údaje pro rezervaci
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="booking-name">Jméno a příjmení</label>
                <input id="booking-name" className="field" placeholder="Jana Nováková" />
              </div>
              <div>
                <label className="field-label" htmlFor="booking-email">E-mail</label>
                <input id="booking-email" type="email" className="field" placeholder="jana@email.cz" />
              </div>
              <div>
                <label className="field-label" htmlFor="booking-phone">Telefon</label>
                <input id="booking-phone" type="tel" className="field" placeholder="+420 777 123 456" />
              </div>
              <div>
                <label className="field-label" htmlFor="booking-level">Úroveň</label>
                <select id="booking-level" className="field">
                  <option>Začátečník</option>
                  <option>Mírně pokročilý</option>
                  <option>Pokročilý</option>
                  <option>Nevím, poradí lektor</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="booking-note">Co bys chtěl probrat?</label>
                <textarea
                  id="booking-note"
                  rows="4"
                  className="field resize-none"
                  placeholder="Např. připravuji se na přijímačky z matematiky a potřebuji pomoct s rovnicemi."
                />
              </div>
            </div>
          </div>
        </div>

        <aside>
          <div className="sticky top-28 rounded-4xl bg-ink p-6 text-cream shadow-lift sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cream/45">Shrnutí rezervace</p>
              <Sparkles className="h-5 w-5 text-lime" />
            </div>

            <div className="mt-6 space-y-4 border-b border-cream/15 pb-6">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-cream/50">Lektor</span>
                <span className="text-right font-semibold">{lecturer.name}</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-cream/50">Předmět</span>
                <span className="text-right font-semibold">{lecturer.subject}</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-cream/50">Termín</span>
                <span className="inline-flex items-center gap-1.5 text-right font-semibold">
                  <Clock className="h-3.5 w-3.5 text-lime" />
                  {selectedSlot}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-cream/50">Běžná cena</span>
                <span className="text-right font-semibold text-cream/45 line-through">
                  {formatPrice(lecturer.price)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cream/45">Celkem</p>
                <p className="mt-1 font-display text-5xl font-bold leading-none text-lime">0 Kč</p>
              </div>
              <span className="rounded-full bg-lime/15 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-lime">
                1. lekce zdarma
              </span>
            </div>

            <Link
              to={`/pokladna/${lecturer.slug}?slot=${encodeURIComponent(selectedSlot)}`}
              className="btn btn-lime mt-6 w-full"
            >
              Pokračovat k potvrzení
              <ArrowRight className="h-4 w-4" />
            </Link>

            <p className="mt-4 flex items-start gap-2 text-[0.7rem] leading-5 text-cream/40">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
              E-mail lektorovi odešleme po potvrzení rezervace. První lekce je bez platby.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
