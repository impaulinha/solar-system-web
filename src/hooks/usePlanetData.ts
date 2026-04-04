import { getPlanetById } from '@/services/solarSystemServices'
import type { ISolarSystemBody } from '@/types/solarSystemApi'
import { useQuery } from '@tanstack/react-query'

export function usePlanetData(apiId: string) {
  return useQuery<ISolarSystemBody>({
    staleTime: 1000 * 60 * 5,
    queryKey: ['planet', apiId],
    queryFn: () => getPlanetById(apiId),
    enabled: !!apiId,
  })
}
