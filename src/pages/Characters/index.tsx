import { Link } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { useFavorites } from "../../shared/hooks/useFavorites"
import { useListCharacters } from "./hooks/useListCharacters"
import styles from './styles.module.css'

export const Characters = () => {
  const listCharacters = useListCharacters()
  const favorites = useFavorites()

  return (
    <div>
      <Menu />
      {!!listCharacters.loading && <p className={styles['loading-wrapper']}>Carregando...</p>}
      {!listCharacters.loading && (
        <ul className={styles.list}>
          {listCharacters.characters?.map(character => {
            const alreadyFavorited = !!favorites.favorites.find(favorite => favorite.id === character.id)

            return (
              <li className={styles.card} key={character.id}>
                <div className={styles['card-thumb']}>
                  <img className={styles['card-image']} alt={character.name} src={character.thumbnail} />
                </div>
                <div className={styles['card-content']}>
                  <p>{character.name}</p>
                  <p className={styles['card-description']}>{character.description.length ? character.description : '-'}</p>
                  <button
                    onClick={() => {
                      if (alreadyFavorited) {
                        favorites.handleUnfavoriteCharacter(character.id)

                        return
                      }
                      favorites.handleFavoriteCharacter(character)
                    }}
                  >
                    {alreadyFavorited ? 'Remover' : 'Favoritar'}
                  </button>
                  <Link to={`/${character.id}`}>Editar</Link>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
