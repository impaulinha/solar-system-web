import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { PLANETS } from '@/constants/planets'
import { RouletteItem } from './RouletteItem'

interface RouletteVerticalProps {
  activeIndex: number
  onSelect: (index: number) => void
}

export function RouletteVertical({
  activeIndex,
  onSelect,
}: RouletteVerticalProps) {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!listRef.current) return

    const items = listRef.current.querySelectorAll('[data-roulette-item]')

    gsap.to(items, {
      y: (i) => (i - activeIndex) * 72,
      duration: 0.7,
      ease: 'power3.out',
    })
  }, [activeIndex])

  function getPosition(index: number): 'prev' | 'active' | 'next' | 'hidden' {
    const diff = index - activeIndex
    if (diff === 0) return 'active'
    if (diff === -1) return 'prev'
    if (diff === 1) return 'next'
    return 'hidden'
  }

  return (
    <div className="relative flex h-64 w-full flex-col items-center justify-center overflow-hidden">
      {/* linha indicadora do item ativo */}
      <div
        className="absolute left-0 h-px w-3 bg-nebula-500"
        aria-hidden="true"
      />

      <div ref={listRef} className="relative flex flex-col items-center gap-4">
        {PLANETS.map((planet, index) => (
          <div key={planet.id} data-roulette-item>
            <RouletteItem
              planet={planet}
              position={getPosition(index)}
              onClick={() => onSelect(index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
