import * as React from 'react'
import { Character } from '../../../../shared/interfaces/character'
import { MavelService } from '../../../../services/marvel'
import { characterMapper } from '../../../../shared/mappers/characterMapper'

interface UseGetCharacterProps {
  characterId?: number
}

export const useGetCharacter = (props: UseGetCharacterProps) => {
  const [character, setCharacter] = React.useState<Character>({
    name: '',
    description: '',
    id: 0,
    thumbnail: ''
  })

  const getCharacter = React.useCallback(async (id: number) => {
    try {
      const response = await MavelService.getCharacter(id)
      setCharacter(characterMapper(response.data.results)?.[0])
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleUpdateCharacterInfo = React.useCallback((data: Partial<Character>) => {
    setCharacter(prev => {
      return ({
        ...prev,
        ...data
      })
    })
  }, [])

  React.useEffect(() => {
    if (!props.characterId) return

    getCharacter(props.characterId)
  }, [])

  return {
    character,
    getCharacter,
    handleUpdateCharacterInfo
  }
}
