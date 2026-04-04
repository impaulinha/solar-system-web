interface NasaImageLink {
  href: string
  rel: string
  render?: string
}

interface NasaImageData {
  title: string
  description: string
  date_created: string
  nasa_id: string
  media_type: string
}

interface NasaImageItem {
  href: string
  links: NasaImageLink[]
  data: NasaImageData[]
}

interface NasaCollectionMetadata {
  total_hits: number
}

interface NasaCollection {
  href: string
  items: NasaImageItem[]
  metadata: NasaCollectionMetadata
}

export interface NasaSearchResponse {
  collection: NasaCollection
}
