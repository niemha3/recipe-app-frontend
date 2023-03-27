import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './views/Home'
import Recipe from './views/Recipe'
import CreateRecipe from './views/CreateRecipe'
import CssBaseline from '@mui/material/CssBaseline'
// import Breakfast from './views/Breakfast'
// import Lunch from './views/Lunch'
// import Dinner from './views/Dinner'
// import Snack from './views/Snack'
// import Dessert from './views/Dessert'
// import Login from './views/Login'


const App = () => {


  return (
    <div>
      <CssBaseline />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="recipes/create" element={<CreateRecipe />} />
          {/* <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/snack" element={<Snack />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App;
