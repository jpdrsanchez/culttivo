import { client } from "../../lib/axios/client"
import { DtoMarvelCharactersListResponse } from "./dtoMarvelCharactersListResponse"

export class MavelService {
  static async listAllCharacters() {
    const url = '/characters'

    const response = await client.get<DtoMarvelCharactersListResponse>(url, {
      params: {
        apikey: import.meta.env.VITE_API_KEY
      }
    })

    return response.data
  }

  static async getCharacter(id: number) {
    const url = `/characters/${id}`

    const response = await client.get<DtoMarvelCharactersListResponse>(url, {
      params: {
        apikey: import.meta.env.VITE_API_KEY
      }
    })

    return response.data
  }
}
