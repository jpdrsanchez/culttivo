import { useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import styles from './styles.module.css'
import { useGetCharacter } from "./hooks/useGetCharacter"

export const Character = () => {
  const {characterId} = useParams<{characterId: string}>()
  const character = useGetCharacter({
    characterId: Number(characterId)
  })

  return (
    <div>
      <Menu />
      <div className={styles.form}>
        <form className={styles['form-wrapper']}>
          <div>
            <label htmlFor="name">Nome: </label>
            <input className={styles.input} id="name" type="text" name="name" value={character.character?.name} onChange={(e) => {
              character.handleUpdateCharacterInfo({
                name: e.target.value
              })
            }}  />
          </div>
          <div>
            <label htmlFor="description">Descrição: </label>
            <input className={styles.input} id="description" type="text" name="description" value={character.character?.description} onChange={(e) => {
              character.handleUpdateCharacterInfo({
                description: e.target.value
              })
            }}  />
          </div>
        </form>
      </div>
    </div>
  )
}
