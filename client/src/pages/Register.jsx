import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, BadgeCheck, Mail, Phone, ShieldCheck } from 'lucide-react'
import { lecturers } from '../data/lecturers'
import { AuthAside } from '../components/AuthAside'

export function Register() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const lecturerSlug = searchParams.get('lecturer') || lecturers[0].slug

  const onSubmit = (event) => {
    event.preventDefault()
    navigate(`/objednavka/${lecturerSlug}`)
  }

  return (
    <section className="container-x py-8 sm:py-12 lg:py-16">
      <div className="overflow-hidden rounded-5xl border border-ink/10 bg-paper shadow-soft">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink/50 transition hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              Zpět na úvod
            </Link>

            <p className="section-kicker mt-8">Registrace</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[0.95] tracking-[-0.055em] text-ink sm:text-5xl">
              Začni svou první<br />
              <span className="text-moss">lekci zdarma.</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-ink/55">
              Vytvoř si účet, ověř e-mail a telefon a můžeš si rezervovat termín u
              vybraného lektora.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
              <div>
                <label className="field-label" htmlFor="name">Jméno a příjmení</label>
                <input
                  id="name"
                  name="name"
                  className="field"
                  placeholder="Jana Nováková"
                  autoComplete="name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="email">E-mail</label>
                  <div className="relative">
                    <Mail className="field-icon" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="field pl-11"
                      placeholder="jana@email.cz"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="field-label" htmlFor="phone">Telefon</label>
                  <div className="relative">
                    <Phone className="field-icon" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="field pl-11"
                      placeholder="+420 777 123 456"
                      autoComplete="tel"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="field-label" htmlFor="password">Heslo</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="field"
                  placeholder="Alespoň 8 znaků"
                  autoComplete="new-password"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 pt-1 text-xs leading-5 text-ink/50">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-ink/25 accent-ink"
                />
                <span>
                  Souhlasím s obchodními podmínkami a zpracováním osobních údajů.
                  První lekce zdarma je určena jedné osobě.
                </span>
              </label>

              <button type="submit" className="btn btn-primary w-full">
                Vytvořit účet
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink/40">
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-moss" />
                E-mail ověříme odkazem
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-moss" />
                Telefon ověříme SMS kódem
              </span>
            </div>

            <p className="mt-7 text-sm text-ink/55">
              Už máš účet?{' '}
              <Link to="/prihlaseni" className="font-bold text-moss underline-offset-4 hover:underline">
                Přihlas se
              </Link>
            </p>
          </div>

          <AuthAside />
        </div>
      </div>
    </section>
  )
}
