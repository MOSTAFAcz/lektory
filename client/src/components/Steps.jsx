import { Fragment } from 'react'
import { Check } from 'lucide-react'

const items = ['Termín', 'Potvrzení', 'Hotovo']

export function Steps({ active = 1 }) {
  return (
    <div className="flex items-center">
      {items.map((label, index) => {
        const number = index + 1
        const done = number < active
        const current = number === active

        return (
          <Fragment key={label}>
            <div className="flex items-center gap-2">
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold transition ${
                  done
                    ? 'bg-ink text-lime'
                    : current
                      ? 'bg-lime text-ink'
                      : 'border border-ink/15 text-ink/30'
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : number}
              </span>
              <span
                className={`text-[0.7rem] font-bold uppercase tracking-[0.1em] sm:text-xs ${
                  current ? 'text-ink' : 'text-ink/35'
                }`}
              >
                {label}
              </span>
            </div>
            {index < items.length - 1 && <div className="mx-3 h-px flex-1 bg-ink/10 sm:mx-5" />}
          </Fragment>
        )
      })}
    </div>
  )
}
