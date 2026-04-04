import { Navbar } from '@/components/Navbar'
import { Layout } from '@/components/Layout'
import { PlanetRoulette } from '@/components/PlanetRoulette'
import { useActivePlanet } from '@/hooks/useActivePlanet'
import { useScrollHijack } from '@/hooks/useScrollHijack'

export default function App() {
  const { activeIndex, activePlanet, goToNext, goToPrev, goToIndex } =
    useActivePlanet()

  useScrollHijack({ onNext: goToNext, onPrev: goToPrev })

  return (
    <div className="relative">
      <Navbar />
      <Layout
        roulette={
          <PlanetRoulette
            activeIndex={activeIndex}
            onSelect={goToIndex}
            onNext={goToNext}
            onPrev={goToPrev}
          />
        }
        info={
          <p className="font-mono text-xs text-star-300">{activePlanet.name}</p>
        }
        scene={<p className="font-mono text-xs text-star-300">scene</p>}
      />
    </div>
  )
}
