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
      <h1> Reseptejä</h1>
      <button onClick={getRecipes}>Get recipes</button>
      {recipes &&
        <ul>
          {recipes.map(recipe =>
            <RecipeCard key={recipe.id} recipe={recipe} />
          )}

        </ul>
      }
    </div>
  )
}

export default App;
