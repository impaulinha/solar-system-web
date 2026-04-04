import type { PlanetDetails } from '@/types/planetDetails'

export type PlanetColor =
  | 'planet-mercury'
  | 'planet-venus'
  | 'planet-earth'
  | 'planet-mars'
  | 'planet-jupiter'
  | 'planet-saturn'
  | 'planet-uranus'
  | 'planet-neptune'

export interface Planet {
  id: string
  index: number
  name: string
  apiId: string
  nasaQuery: string
  texture: string
  color: PlanetColor
  ringTexture?: string
  description: string
}

export type PlanetFull = Planet & {
  details?: PlanetDetails
}
