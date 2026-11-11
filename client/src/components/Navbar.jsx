import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from './Logo'

const links = [
  { to: '/lektori', label: 'Lektoři' },
  { to: '/#pribeh', label: 'Náš příběh' },
  { to: '/#jak-to-funguje', label: 'Jak to funguje' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold text-ink/60 transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link to="/prihlaseni" className="text-sm font-semibold text-ink/60 transition hover:text-ink">
            Přihlásit se
          </Link>
          <Link to="/registrace" className="btn btn-lime">
            Chci 1. lekci zdarma
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-ink/75 transition hover:bg-ink/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/prihlaseni"
              className="rounded-2xl px-4 py-3 text-base font-semibold text-ink/75 transition hover:bg-ink/5"
            >
              Přihlásit se
            </Link>
          </nav>
          <Link to="/registrace" className="btn btn-lime mt-4 w-full">
            Chci 1. lekci zdarma
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  )
}
