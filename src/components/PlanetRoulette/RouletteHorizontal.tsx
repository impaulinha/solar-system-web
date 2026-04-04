import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { PLANETS } from '@/constants/planets'
import { RouletteItem } from './RouletteItem'

interface RouletteHorizontalProps {
  activeIndex: number
  onSelect: (index: number) => void
  onNext: () => void
  onPrev: () => void
}

export function RouletteHorizontal({
  activeIndex,
  onSelect,
  onNext,
  onPrev,
}: RouletteHorizontalProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)

  useEffect(() => {
    if (!listRef.current) return

    const items = listRef.current.querySelectorAll('[data-roulette-item]')

    gsap.to(items, {
      x: (i) => (i - activeIndex) * 72,
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

  function handleTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX
  }

  function handleTouchEnd(event: React.TouchEvent) {
    const deltaX = touchStartX.current - event.changedTouches[0].clientX
    const threshold = 40

    if (deltaX > threshold) onNext()
    if (deltaX < -threshold) onPrev()
  }

  return (
    <div
      className="relative flex h-24 w-full items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div ref={listRef} className="relative flex items-center gap-4">
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
