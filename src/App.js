import RecipeCard from "./components/RecipeCard"


const App = () => {
  const recipes = [
    {
      id: 1,
      name: "Taco chicken salad",
      mainIngredient: "chicken",
      meal: "lunch",
      calories: 650,
      carbs: 50,
      protein: 40,
      fat: 20,
      instructions: "",
    },
    {
      id: 2,
      name: "Tuna club sandwich",
      mainIngredient: "Fish",
      meal: "lunch",
      calories: 650,
      carbs: 50,
      protein: 40,
      fat: 20,
      instructions: "",
    },
    {
      id: 3,
      name: "Pasta bolognese",
      mainIngredient: "Minced pork meat",
      meal: "lunch/dinner",
      calories: 650,
      carbs: 50,
      protein: 40,
      fat: 20,
      instructions: "testing nodemon",
    },
    {
      id: 4,
      name: "Protein oats",
      mainIngredient: "Oats",
      meal: "breakfast",
      calories: 333,
      carbs: 30,
      protein: 30,
      fat: 13,

    }
  ];

  return (
    <div>
      <h1> Reseptejä</h1>
      <ul>
        {recipes.map(recipe =>
          <RecipeCard key={recipe.id} recipe={recipe} />
        )}

      </ul>
    </div>
  )
}

export default App;
