import { Menu } from "../../components/Menu"
import { useFavorites } from "../../shared/hooks/useFavorites"
import styles from './styles.module.css'

export const Favorites = () => {
  const favorites = useFavorites()

  return (
    <div>
      <Menu />
      <ul className={styles.list}>
        {favorites.favorites?.map(character => {
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
                    favorites.handleUnfavoriteCharacter(character.id)
                  }}
                >
                  Remover
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
