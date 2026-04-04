import { getPlanetImage } from '@/services/nasaServices'
import { useQuery } from '@tanstack/react-query'

export function useNasaImage(nasaQuery: string) {
  return useQuery<string>({
    staleTime: 1000 * 60 * 10,
    queryKey: ['nasaImage', nasaQuery],
    queryFn: () => getPlanetImage(nasaQuery),
    enabled: !!nasaQuery,
  })
}
