import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'

export function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/50">
        <Sparkles className="h-3.5 w-3.5 text-clay" />
        Stránka nenalezena
      </span>
      <p className="mt-6 font-display text-[clamp(6rem,18vw,12rem)] font-extrabold leading-none tracking-[-0.08em] text-ink">
        404
      </p>
      <h1 className="font-display text-3xl font-bold tracking-[-0.04em] text-ink sm:text-4xl">
        Tady se asi učíme něco jiného.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-ink/55">
        Tahle stránka neexistuje nebo se přestěhovala. Zkus to z úvodu nebo se podívej na
        naše lektory.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-primary">
          <ArrowLeft className="h-4 w-4" />
          Zpět na úvod
        </Link>
        <Link to="/lektori" className="btn btn-outline">
          Prohlédnout lektory
        </Link>
      </div>
    </section>
  )
}
