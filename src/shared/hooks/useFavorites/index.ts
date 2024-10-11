import * as React from 'react'
import { Character } from '../../interfaces/character'

export const useFavorites = () => {
  const favoriteLocalStorageKey = '@favorites'

  const [favorites, setFavorites] = React.useState<Character[]>(JSON.parse(localStorage.getItem(favoriteLocalStorageKey) ?? '[]'))

  const handleFavoriteCharacter = React.useCallback((character: Character) => {
    setFavorites(prev => [...prev, character])
  }, [])

  const handleUnfavoriteCharacter = React.useCallback((id: number) => {
    setFavorites(prev => prev.filter(favorite => favorite.id !== id))
  }, [])

  React.useEffect(() => {
    localStorage.setItem(favoriteLocalStorageKey, JSON.stringify(favorites))
  }, [favorites])

  return {
    handleFavoriteCharacter,
    handleUnfavoriteCharacter,
    favorites
  }
}
