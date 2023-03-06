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
      {/* <RecipeCard /> */}
      <button onClick={getRecipes}> Hae reseptit</button>
      {recipes &&
        <ul>


          {recipes.map((recipe) => (
            <li key={recipe.id}> {recipe.name}</li>
          ))}
        </ul>
      }


    </div>
  )
}

export default App;




// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Navbar from './components/Navbar'
// import Searchbar from "./components/Searchbar"
// import Home from './views/Home'
// // import Breakfast from './views/Breakfast'
// // import Lunch from './views/Lunch'
// // import Dinner from './views/Dinner'
// // import Snack from './views/Snack'
// // import Dessert from './views/Dessert'
// // import Login from './views/Login'


// const App = () => {


//   return (
//     <div>
//       <Navbar />
//       <Searchbar />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/breakfast" element={<Breakfast />} />
//           <Route path="/lunch" element={<Lunch />} />
//           <Route path="/dinner" element={<Dinner />} />
//           <Route path="/snack" element={<Snack />} />
//           <Route path="/dessert" element={<Dessert />} />
//           <Route path="/login" element={<Login />} /> */}
//         </Routes>

//       </BrowserRouter>

//     </div>
//   )
// }

// export default App;
