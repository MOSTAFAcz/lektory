import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { lecturers, subjects } from '../data/lecturers'
import { LecturerCard } from '../components/LecturerCard'
import { CtaBand } from '../components/CtaBand'

export function Lecturers() {
  const [activeSubject, setActiveSubject] = useState('Vše')

  const filtered =
    activeSubject === 'Vše'
      ? lecturers
      : lecturers.filter((lecturer) => lecturer.subject === activeSubject)

  return (
    <>
      <section className="container-x pb-14 pt-12 sm:pt-16">
        <div className="max-w-4xl">
          <p className="section-kicker">Naši lektoři</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.9] tracking-[-0.065em] text-ink sm:text-7xl lg:text-8xl">
            Lidé, kteří to umí předat.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/60 sm:text-lg">
            Vyber si podle předmětu, zkušeností nebo prostě podle toho, kdo ti bude
            sympatický. První lekci máš u kohokoliv zdarma.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          {subjects.map((subject) => (
            <button
              key={subject}
              type="button"
              onClick={() => setActiveSubject(subject)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                activeSubject === subject
                  ? 'border-ink bg-ink text-cream'
                  : 'border-ink/15 bg-paper text-ink/60 hover:border-ink/35 hover:text-ink'
              }`}
            >
              {subject}
            </button>
          ))}
          <span className="ml-auto hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/40 sm:inline-flex">
            <Sparkles className="h-3.5 w-3.5 text-clay" />
            {filtered.length} lektorů
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((lecturer) => (
            <LecturerCard key={lecturer.slug} lecturer={lecturer} />
          ))}
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
