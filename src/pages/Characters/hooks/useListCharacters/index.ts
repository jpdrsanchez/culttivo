import * as React from 'react'
import { MavelService } from '../../../../services/marvel'
import { Character } from '../../../../shared/interfaces/character'
import { characterMapper } from '../../../../shared/mappers/characterMapper'

export const useListCharacters = () => {
  const [characters, setCharacters] = React.useState<Character[]>()
  const [loading, setLoading] = React.useState<boolean>()

  const getCharacters = React.useCallback(async () => {
    try {
      setLoading(true)
      const response = await MavelService.listAllCharacters()
      setCharacters(characterMapper(response.data.results))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  React.useEffect(() => {
    getCharacters()
  }, [getCharacters])

  return {
    loading,
    characters
  }
}
