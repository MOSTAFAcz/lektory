import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  Search,
  Sparkles,
  Star,
  UserRoundPlus,
} from 'lucide-react'
import { lecturers } from '../data/lecturers'
import { LecturerCarousel } from '../components/LecturerCarousel'
import { CtaBand } from '../components/CtaBand'

const marqueeItems = [
  'Matematika',
  'Programování',
  'Angličtina',
  'Fyzika',
  'Chemie',
  'Český jazyk',
  'Studijní dovednosti',
  'Příprava na přijímačky',
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Vyber si lektora',
    text: 'Projdi si profily a najdi někoho, kdo ti sedne. Podívej se na předmět, zkušenosti i volné termíny.',
  },
  {
    number: '02',
    icon: UserRoundPlus,
    title: 'Zaregistruj se',
    text: 'Vytvoř si účet a ověř e-mail i telefon. Zabere to chvilku a chráníme tím první lekci zdarma.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Přijď na první lekci',
    text: 'Domluvíš termín, lektor potvrdí rezervaci a e-mailem dostane všechny detaily. První lekce je na nás.',
  },
]

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-x relative pb-16 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/70 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink/60">
              <span className="h-2 w-2 rounded-full bg-clay" />
              Vzdělávání pro zvídavé
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink/35">
              Praha · Brno · online
            </span>
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.4rem,12.4vw,11.5rem)] font-extrabold leading-[0.82] tracking-[-0.065em] text-ink">
            <span className="block">Learniko</span>
            <span className="block text-moss">Academy</span>
            <span className="flex items-end gap-3 sm:gap-6">
              <span className="text-transparent [-webkit-text-stroke:1.5px_#13251C] sm:[-webkit-text-stroke:2px_#13251C]">
                s.r.o.
              </span>
              <span className="mb-[0.33em] hidden h-3 w-3 rounded-full bg-clay sm:block lg:h-4 lg:w-4" />
            </span>
          </h1>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
            <div className="lg:pl-[3%]">
              <p className="max-w-3xl font-serif text-[clamp(2rem,4.6vw,4.3rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-ink">
                <span className="relative inline-block">
                  <span className="relative z-10">A teď jste chytřejší!</span>
                  <svg
                    className="absolute -bottom-2 left-0 z-0 h-3 w-full text-lime sm:-bottom-3 sm:h-5"
                    viewBox="0 0 640 22"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 15C112 6 233 19 347 11C462 3 556 15 636 8"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </p>

              <p className="mt-8 max-w-xl text-base leading-7 text-ink/60 sm:text-lg sm:leading-8">
                Vyber si lektora, se kterým tě učení bude bavit. Zaregistruj se a první
                lekci máš zdarma. Žádná nekonečná videa, žádný stres — jen člověk, který
                ti látku opravdu vysvětlí.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/lektori" className="btn btn-primary">
                  Najít lektora
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="#jak-to-funguje" className="btn btn-outline">
                  Jak to funguje
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink/55">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-moss" />
                  Ověření lektoři
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-clay" />
                  1. lekce zdarma
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 fill-lime text-ink" />
                  4,9/5 od studentů
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="absolute -left-8 -top-8 hidden h-24 w-24 rounded-full bg-lime sm:block" />
              <div className="absolute -right-5 top-24 hidden h-12 w-12 rounded-full border-[10px] border-clay/80 sm:block" />

              <div className="relative rounded-4xl bg-ink p-7 text-cream shadow-lift sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-cream/10 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cream/70">
                    Pro nové klienty
                  </span>
                  <Sparkles className="h-5 w-5 text-lime" />
                </div>

                <p className="mt-8 font-display text-[5.2rem] font-bold leading-none tracking-[-0.07em] text-lime">
                  0 Kč
                </p>
                <p className="mt-1 font-serif text-2xl">první lekce zdarma</p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-cream/55">
                  Vyber si lektora, zaregistruj se a první hodinu máš na nás.
                </p>

                <div className="mt-7 flex items-center gap-4 border-t border-cream/15 pt-5">
                  <div className="flex -space-x-3">
                    {lecturers.slice(0, 3).map((lecturer) => (
                      <img
                        key={lecturer.slug}
                        src={lecturer.image}
                        alt=""
                        className="h-10 w-10 rounded-full border-2 border-ink object-cover"
                      />
                    ))}
                  </div>
                  <p className="text-xs leading-5 text-cream/55">
                    <span className="font-bold text-cream">6 ověřených lektorů</span>
                    <br />
                    <span className="text-lime">4,9/5</span> průměrné hodnocení
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-7 -left-4 rounded-3xl bg-paper p-4 shadow-soft ring-1 ring-ink/10 sm:-left-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-ink">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-ink">Bez závazků</p>
                    <p className="mt-0.5 text-[0.68rem] text-ink/45">Zrušíš kdykoliv</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-ink/10 bg-paper py-4">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center gap-8 pr-8">
              {marqueeItems.map((item) => (
                <span
                  key={`${group}-${item}`}
                  className="flex items-center gap-8 text-sm font-bold uppercase tracking-[0.16em] text-ink/50"
                >
                  {item}
                  <Sparkles className="h-3.5 w-3.5 text-clay" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="pribeh" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-kicker">Proč Learniko existuje</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-7xl">
              Náš příběh
            </h2>

            <div className="mt-10 space-y-6 text-base leading-8 text-ink/65 sm:text-lg sm:leading-9">
              <p>
                Learniko Academy vzniklo z přesvědčení, že dobré učení není o nekonečných
                videích ani o biflování. Je o člověku, který umí látku vysvětlit tak, aby
                najednou dávala smysl.
              </p>
              <p>
                Začínali jsme jako parta lektorů, kteří si sami pamatují, jaké to je sedět
                nad příkladem a nevědět, kde začít. Proto u nás nenajdete anonymní kurz,
                ale konkrétního lektora, který vás zná jménem, ví, kde jste se zasekli, a
                pomůže vám jít dál.
              </p>
              <p className="font-medium text-ink">
                Věříme, že každý má nárok na svůj „aha!“ moment. A ten první krok může být
                zdarma.
              </p>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-paper px-4 py-2.5 shadow-soft">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-clay/15 font-serif text-lg font-semibold text-clay">
                A
              </span>
              <span className="text-left">
                <span className="block text-sm font-bold text-ink">Aďa</span>
                <span className="block text-[0.68rem] uppercase tracking-[0.14em] text-ink/40">
                  zakladatelka Learniko Academy
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="lektori" className="scroll-mt-20 border-y border-ink/10 bg-paper py-20 sm:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="section-kicker">Naši lektoři</p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-ink sm:text-6xl">
                Lidé, kteří to umí předat.
              </h2>
            </div>
            <Link to="/lektori" className="btn btn-outline">
              Všichni lektoři
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <LecturerCarousel items={lecturers} />
        </div>
      </section>

      <section id="jak-to-funguje" className="scroll-mt-20 py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-kicker">Jednoduše a bez stresu</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-ink sm:text-6xl">
                Jak to funguje
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-ink/60">
                Od prvního kliknutí po první lekci to zvládneš za pár minut. A když se
                něco nepovede, jsme na e-mailu.
              </p>
              <Link to="/lektori" className="btn btn-primary mt-7">
                Prohlédnout lektory
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.number}
                    className="group grid gap-6 rounded-4xl border border-ink/10 bg-paper p-6 transition hover:border-ink/25 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cream text-ink transition group-hover:bg-lime">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-ink sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-ink/55">{step.text}</p>
                    </div>
                    <span className="font-display text-4xl font-bold text-ink/10 sm:text-5xl">
                      {step.number}
                    </span>
                  </div>
                )
              })}
            </div>
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
