import { DtoMarvelCharacter } from "../../services/marvel/dtoMarvelCharactersListResponse";
import { Character } from "../interfaces/character";

export const characterMapper = (apiCharacters: DtoMarvelCharacter[]): Character[] => {
  return apiCharacters.map(apiCharacter => ({
    id: apiCharacter.id,
    name: apiCharacter.name,
    thumbnail: `${apiCharacter.thumbnail.path}.${apiCharacter.thumbnail.extension}`,
    description: apiCharacter.description
  }))
}
