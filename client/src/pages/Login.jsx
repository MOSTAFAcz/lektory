import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, LockKeyhole, Mail } from 'lucide-react'
import { AuthAside } from '../components/AuthAside'

export function Login() {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    navigate('/')
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

            <p className="section-kicker mt-8">Přihlášení</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[0.95] tracking-[-0.055em] text-ink sm:text-5xl">
              Vítej zpět.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-ink/55">
              Přihlas se a pokračuj tam, kde jsi skončil. Tvoje rezervace i lektoři na
              tebe čekají.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
              <div>
                <label className="field-label" htmlFor="login-email">E-mail</label>
                <div className="relative">
                  <Mail className="field-icon" />
                  <input
                    id="login-email"
                    type="email"
                    className="field pl-11"
                    placeholder="tvuj@email.cz"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between gap-4">
                  <label className="field-label" htmlFor="login-password">Heslo</label>
                  <button type="button" className="text-xs font-semibold text-moss hover:underline">
                    Zapomněl jsi heslo?
                  </button>
                </div>
                <div className="relative">
                  <LockKeyhole className="field-icon" />
                  <input
                    id="login-password"
                    type="password"
                    className="field pl-11"
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Přihlásit se
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-7 text-sm text-ink/55">
              Ještě nemáš účet?{' '}
              <Link to="/registrace" className="font-bold text-moss underline-offset-4 hover:underline">
                Zaregistruj se
              </Link>
            </p>
          </div>

          <AuthAside
            title="A teď jste chytřejší!"
            text="Každá lekce je krok vpřed. Přihlas se a naplánuj ten další."
          />
        </div>
      </div>
    </section>
  )
}
