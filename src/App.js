import { useState } from "react"
import RecipeCard from "./components/RecipeCard"
import recipesService from './services/recipes'


const App = () => {

  const [recipes, setRecipes] = useState(null)

  const getRecipes = async () => {
    const response = await recipesService.getAll()
    setRecipes(response)

  }


  return (
    <div>
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
