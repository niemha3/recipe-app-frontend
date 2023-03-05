import { useState } from "react"
import Navbar from './components/Navbar'
import RecipeCard from "./components/RecipeCard"
import recipesService from './services/recipes'


const App = () => {

  const [recipes, setRecipes] = useState(null)

  const getRecipes = async () => {
    const response = await recipesService.getRecipes()
    setRecipes(response)

  }


  return (
    <div>
      <Navbar />
      <RecipeCard />

    </div>
  )
}

export default App;
