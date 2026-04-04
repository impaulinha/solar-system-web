import { useState, useCallback } from 'react'
import { PLANETS } from '@/constants/planets'

export function useActivePlanet() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev < PLANETS.length - 1 ? prev + 1 : prev))
  }, [])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }, [])

  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < PLANETS.length) {
      setActiveIndex(index)
    }
  }, [])

  return {
    activeIndex,
    activePlanet: PLANETS[activeIndex],
    goToNext,
    goToPrev,
    goToIndex,
  }
}
