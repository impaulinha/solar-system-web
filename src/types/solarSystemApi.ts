interface SolarBodyMass {
  massValue: number
  massExponent: number
}

interface SolarBodyVolume {
  volValue: number
  volExponent: number
}

interface SolarBodyMoon {
  moon: string
  rel: string
}

export interface SolarSystemBody {
  id: string
  name: string
  englishName: string
  isPlanet: boolean
  mass: SolarBodyMass | null
  vol: SolarBodyVolume | null
  gravity: number
  meanRadius: number
  sideralOrbit: number
  sideralRotation: number
  moons: SolarBodyMoon[] | null
  avgTemp: number
  axialTilt: number
}
