import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { LecturerCard } from './LecturerCard'

export function LecturerCarousel({ items }) {
  const trackRef = useRef(null)

  const scrollBy = (direction) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <div className="mt-10">
      <div
        ref={trackRef}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
      >
        {items.map((lecturer) => (
          <div
            key={lecturer.slug}
            className="w-[78%] shrink-0 snap-start sm:w-[47%] lg:w-[32%] xl:w-[24%]"
          >
            <LecturerCard lecturer={lecturer} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink/40">
          Přetáhněte nebo použijte šipky
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
            aria-label="Předchozí lektoři"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
            aria-label="Další lektoři"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
