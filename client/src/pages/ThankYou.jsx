import { Link } from 'react-router-dom'
import { ArrowRight, Check, Mail, Sparkles, UserRoundCheck } from 'lucide-react'
import { Steps } from '../components/Steps'

const nextSteps = [
  {
    icon: Mail,
    title: 'E-mail s potvrzením',
    text: 'Do pár minut ti přijdou všechny detaily rezervace. Stejný e-mail dostane i lektor.',
  },
  {
    icon: UserRoundCheck,
    title: 'Lektor se ozve',
    text: 'Ještě před lekcí se ti lektor ozve, aby si potvrdil čas a místo setkání.',
  },
  {
    icon: Sparkles,
    title: 'První lekce zdarma',
    text: 'Přijď s otázkami a chuť učit se. První hodina je plně v režii tebe i lektora.',
  },
]

export function ThankYou() {
  return (
    <section className="container-x py-8 sm:py-12">
      <Steps active={3} />

      <div className="relative mt-10 overflow-hidden rounded-5xl border border-ink/10 bg-paper px-6 py-14 text-center shadow-soft sm:px-10 sm:py-20">
        <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-lime/40 blur-2xl" />
        <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-clay/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-lime text-ink shadow-soft">
            <Check className="h-9 w-9" strokeWidth={3} />
          </span>
          <p className="section-kicker mt-7">Hotovo</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[0.95] tracking-[-0.055em] text-ink sm:text-6xl">
            Rezervace je<br />
            <span className="text-moss">potvrzená!</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-ink/55">
            Těšíme se na tebe. E-mail s detaily jsme poslali tobě i lektorovi — když
            něco nesedí, stačí odpovědět na něj.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn btn-primary">
              Zpět na úvod
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/lektori" className="btn btn-outline">
              Prohlédnout další lektory
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {nextSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={step.title} className="rounded-4xl border border-ink/10 bg-paper p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream text-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-3xl font-bold text-ink/10">0{index + 1}</span>
              </div>
              <h2 className="mt-5 font-display text-xl font-bold tracking-[-0.03em] text-ink">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink/55">{step.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
