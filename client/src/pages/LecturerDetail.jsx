import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Clock,
  GraduationCap,
  Languages,
  MapPin,
  Sparkles,
  Star,
} from 'lucide-react'
import { getLecturer, lecturers } from '../data/lecturers'
import { CtaBand } from '../components/CtaBand'
import { LecturerCard } from '../components/LecturerCard'

function formatPrice(value) {
  return `${new Intl.NumberFormat('cs-CZ').format(value)} Kč`
}

export function LecturerDetail() {
  const { slug } = useParams()
  const lecturer = getLecturer(slug)
  const others = lecturers.filter((item) => item.slug !== lecturer.slug).slice(0, 3)

  return (
    <>
      <section className="container-x pb-16 pt-8 sm:pt-10">
        <Link
          to="/lektori"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink/50 transition hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Zpět na lektory
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="relative">
            <div className="overflow-hidden rounded-5xl bg-sand shadow-soft">
              <img
                src={lecturer.image}
                alt={`Lektor ${lecturer.name}`}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-3xl bg-paper p-4 shadow-lift ring-1 ring-ink/10 sm:left-8 sm:right-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-ink">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">První lekce zdarma</p>
                  <p className="text-[0.68rem] text-ink/45">Bez závazků a bez platby</p>
                </div>
              </div>
              <span className="hidden rounded-full bg-ink px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-cream sm:inline">
                Nový klient
              </span>
            </div>
          </div>

          <div className="pt-8 lg:pt-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-ink px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-cream">
                {lecturer.subject}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-semibold text-ink/60">
                <Star className="h-3.5 w-3.5 fill-lime text-ink" />
                {lecturer.rating.toFixed(1)} ({lecturer.reviews} hodnocení)
              </span>
            </div>

            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.92] tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
              {lecturer.name}
            </h1>
            <p className="mt-4 font-serif text-xl leading-snug text-ink/60 sm:text-2xl">
              {lecturer.headline}
            </p>

            <div className="mt-7 space-y-4 text-base leading-8 text-ink/65">
              <p>{lecturer.bio}</p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-3xl border border-ink/10 bg-paper p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink/35">Cena</p>
                <p className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                  {formatPrice(lecturer.price)}
                </p>
                <p className="text-[0.68rem] text-ink/40">za 60 minut</p>
              </div>
              <div className="rounded-3xl border border-ink/10 bg-paper p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink/35">Praxe</p>
                <p className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                  {lecturer.years} let
                </p>
                <p className="text-[0.68rem] text-ink/40">s výukou</p>
              </div>
              <div className="rounded-3xl border border-ink/10 bg-paper p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink/35">Hodnocení</p>
                <p className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                  {lecturer.rating.toFixed(1)}
                </p>
                <p className="text-[0.68rem] text-ink/40">z 5 hvězdiček</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={`/objednavka/${lecturer.slug}`} className="btn btn-lime">
                Rezervovat 1. lekci zdarma
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to={`/registrace?lecturer=${lecturer.slug}`} className="btn btn-outline">
                Nejdřív se zaregistrovat
              </Link>
            </div>

            <p className="mt-4 flex items-center gap-2 text-xs text-ink/40">
              <BadgeCheck className="h-4 w-4 text-moss" />
              První lekce je zdarma. Platba proběhne až u dalších lekcí.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper py-14 sm:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div>
            <p className="section-kicker">Co spolu probereme</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {lecturer.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/15 bg-cream px-3.5 py-2 text-sm font-semibold text-ink/65"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="section-kicker">Vzdělání a jazyky</p>
            <ul className="mt-5 space-y-3 text-sm text-ink/65">
              <li className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                {lecturer.education}
              </li>
              <li className="flex items-start gap-3">
                <Languages className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                {lecturer.languages.join(' · ')}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                {lecturer.city}
              </li>
            </ul>
          </div>

          <div>
            <p className="section-kicker">Volné termíny</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {lecturer.slots.map((slot) => (
                <span
                  key={slot}
                  className="inline-flex items-center gap-2 rounded-2xl border border-ink/10 bg-cream px-3 py-2.5 text-xs font-semibold text-ink/60"
                >
                  <Clock className="h-3.5 w-3.5 text-clay" />
                  {slot}
                </span>
              ))}
            </div>
            <Link
              to={`/objednavka/${lecturer.slug}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-moss transition hover:text-ink"
            >
              Vybrat termín
              <CalendarDays className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold tracking-[-0.05em] text-ink sm:text-4xl">
              Mohlo by tě zajímat
            </h2>
            <Link to="/lektori" className="text-sm font-bold text-moss transition hover:text-ink">
              Všichni lektoři →
            </Link>
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <LecturerCard key={item.slug} lecturer={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <CtaBand />
        </div>
      </section>
    </>
  )
}
