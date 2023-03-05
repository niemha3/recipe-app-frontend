import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Searchbar from "./components/Searchbar"
import Home from './views/Home'
// import Breakfast from './views/Breakfast'
// import Lunch from './views/Lunch'
// import Dinner from './views/Dinner'
// import Snack from './views/Snack'
// import Dessert from './views/Dessert'
// import Login from './views/Login'


const App = () => {

  return (
    <div>
      <Navbar />
      <Searchbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
