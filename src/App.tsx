import { Route, Routes } from "react-router-dom"
import { mainRoutes } from "./routes"
import { Characters } from "./pages/Characters"
import { Favorites } from "./pages/Favorites"
import { Character } from "./pages/Character"

function App() {
  return (
    <Routes>
      <Route path={mainRoutes.home} element={<Characters />} />
      <Route path={mainRoutes.favorites} element={<Favorites />} />
      <Route path={mainRoutes.character} element={<Character />} />
    </Routes>
  )
}

export default App
