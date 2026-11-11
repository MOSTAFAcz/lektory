import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-ink text-cream">
      <div className="container-x relative z-10 pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-7 text-cream/60">
              Lidské doučování a kurzy s lektory, kteří umí látku předat tak, aby dávala smysl.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink">
              První lekce zdarma
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/40">Navigace</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li><Link className="transition hover:text-lime" to="/lektori">Naši lektoři</Link></li>
              <li><Link className="transition hover:text-lime" to="/#pribeh">Náš příběh</Link></li>
              <li><Link className="transition hover:text-lime" to="/#jak-to-funguje">Jak to funguje</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/40">Pro klienty</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li><Link className="transition hover:text-lime" to="/registrace">Registrace</Link></li>
              <li><Link className="transition hover:text-lime" to="/prihlaseni">Přihlášení</Link></li>
              <li><Link className="transition hover:text-lime" to="/registrace">Rezervovat lekci</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/40">Kontakt</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-lime" />
                <a className="transition hover:text-lime" href="mailto:ahoj@learniko.cz">ahoj@learniko.cz</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-lime" />
                Praha a celá Česká republika
              </li>
            </ul>
            <Link
              to="/registrace"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lime transition hover:text-cream"
            >
              Začít se učit
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Learniko Academy s.r.o. Všechna práva vyhrazena.</p>
          <p>Vizuální prototyp · IČO 000 00 000</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[23vw] font-extrabold leading-[0.7] tracking-[-0.08em] text-cream/[0.035]"
      >
        learniko
      </div>
    </footer>
  )
}
