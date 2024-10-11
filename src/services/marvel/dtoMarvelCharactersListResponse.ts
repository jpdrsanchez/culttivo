export interface DtoMarvelCharacter {
  id: number
  name: string
  thumbnail: {
    extension: string
    path: string
  },
  description: string
}

export interface DtoMarvelCharactersListResponse {
  data: {
    results: DtoMarvelCharacter[]
  },
  count: number
  offset: number
  limit: number
}
