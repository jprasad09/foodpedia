import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home/Home'
import Recipes from './pages/recipes/Recipes'
import RecipeDetails from './pages/recipeDetails/recipeDetails'
import UserProfile from './pages/userProfile/userProfile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/recipes" element={<Recipes />} />
        <Route exact path="/recipeDetails" element={<RecipeDetails />} />
        <Route exact path="/userProfile" element={<UserProfile />} />
      </Routes>
  </BrowserRouter>  )
}

export default App
