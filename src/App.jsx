import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"

import Home from './pages/home/Home'
import Recipes from './pages/recipes/Recipes'
import RecipeDetails from './pages/recipeDetails/RecipeDetails'
import UserProfile from './pages/userProfile/UserProfile'
import store from "./store"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipes" element={<Recipes />} />
          <Route exact path="/recipe/:id" element={<RecipeDetails />} />
          <Route exact path="/userProfile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )

}

export default App
