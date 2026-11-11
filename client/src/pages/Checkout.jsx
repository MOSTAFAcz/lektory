import { Link, useParams, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { getLecturer } from '../data/lecturers'
import { Steps } from '../components/Steps'

export function Checkout() {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const lecturer = getLecturer(slug)
  const slot = searchParams.get('slot') || lecturer.slots[0]

  return (
    <section className="container-x py-8 sm:py-12">
      <Link
        to={`/objednavka/${lecturer.slug}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-ink/50 transition hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Zpět na výběr termínu
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <div>
          <Steps active={2} />

          <h1 className="mt-8 font-display text-4xl font-bold leading-[0.94] tracking-[-0.055em] text-ink sm:text-5xl lg:text-6xl">
            Poslední krok<br />
            <span className="text-moss">a jdeme na to.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink/55 sm:text-base">
            Zkontroluj si údaje. U první lekce neprobíhá platba — tu máš zdarma.
          </p>

          <div className="mt-8 overflow-hidden rounded-4xl border border-ink/10 bg-paper">
            <div className="border-b border-ink/10 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/35">Rezervace</p>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={lecturer.image}
                  alt={`Lektor ${lecturer.name}`}
                  className="h-16 w-14 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-display text-xl font-bold tracking-[-0.03em] text-ink">
                    {lecturer.name}
                  </p>
                  <p className="mt-0.5 text-xs text-ink/45">
                    {lecturer.subject} · {slot}
                  </p>
                </div>
                <span className="rounded-full bg-lime px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink">
                  Zdarma
                </span>
              </div>
            </div>

            <div className="grid gap-4 p-5 text-sm sm:grid-cols-2 sm:p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/35">Klient</p>
                <p className="mt-1.5 font-semibold text-ink">Jana Nováková</p>
                <p className="text-xs text-ink/45">jana@email.cz</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/35">Termín</p>
                <p className="mt-1.5 font-semibold text-ink">{slot}</p>
                <p className="text-xs text-ink/45">60 minut · {lecturer.city}</p>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-moss" />
              <h2 className="font-display text-2xl font-bold tracking-[-0.04em] text-ink">Platba</h2>
            </div>

            <div className="mt-4 flex items-start gap-4 rounded-4xl border-2 border-lime bg-lime/20 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lime text-ink">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold text-ink">První lekce je zdarma</p>
                <p className="mt-1 text-sm leading-6 text-ink/55">
                  U této rezervace není potřeba platit. Platební údaje budeme potřebovat až
                  u dalších lekcí.
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-4 rounded-3xl border border-ink/10 bg-paper/60 p-4 opacity-60">
              <span className="flex items-center gap-3 text-sm font-semibold text-ink/55">
                <CreditCard className="h-4 w-4" />
                Platební karta
              </span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink/35">
                U dalších lekcí
              </span>
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-ink/50">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-ink/25 accent-ink" />
              <span>
                Souhlasím s obchodními podmínkami a potvrzuji, že jsem se seznámil se
                zpracováním osobních údajů.
              </span>
            </label>

            <Link to="/dekujeme" className="btn btn-primary mt-6 w-full sm:w-auto">
              Dokončit rezervaci
              <LockKeyhole className="h-4 w-4" />
            </Link>

            <p className="mt-4 flex items-center gap-2 text-xs text-ink/40">
              <Mail className="h-4 w-4 text-moss" />
              Po potvrzení pošleme e-mail tobě i lektorovi.
            </p>
          </div>
        </div>

        <aside>
          <div className="sticky top-28 rounded-4xl bg-ink p-6 text-cream shadow-lift sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cream/45">Celková cena</p>
              <Sparkles className="h-5 w-5 text-lime" />
            </div>

            <p className="mt-5 font-display text-6xl font-bold leading-none tracking-[-0.06em] text-lime">
              0 Kč
            </p>
            <p className="mt-2 text-sm text-cream/50">První lekce je na nás.</p>

            <div className="mt-7 space-y-3 border-t border-cream/15 pt-6 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-cream/50">Lekce</span>
                <span className="font-semibold">60 minut</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-cream/50">Lektor</span>
                <span className="text-right font-semibold">{lecturer.name}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-cream/50">Termín</span>
                <span className="text-right font-semibold">{slot}</span>
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-cream/10 p-4">
              <p className="flex items-start gap-2 text-xs leading-5 text-cream/60">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                Rezervace je nezávazná. Pokud se něco změní, stačí nám napsat.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
