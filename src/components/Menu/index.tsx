import { Link } from "react-router-dom"
import { mainRoutes } from "../../routes"
import styles from './styles.module.css'

export const Menu = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li>
          <Link to={mainRoutes.home}>Personagens</Link>
        </li>
        <li>
          <Link to={mainRoutes.favorites}>Favoritos</Link>
        </li>
      </ul>
    </header>
  )
}
