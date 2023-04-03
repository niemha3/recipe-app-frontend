import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './views/Home'
import Recipe from './views/Recipe'
import CreateRecipe from './views/CreateRecipe'
import Search from './views/Search'
import { createTheme, ThemeProvider } from '@mui/material'
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline'

const App = () => {

const theme = createTheme({
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: {
    //       '#root': {
    //         minHeight: '100vh'
    //       }}
    //     }
    //   },
      typography: {
        fontFamily:['Oswald, Roboto, Helvetica Neue']
    }
    })



  return (
    <div>
      <ThemeProvider theme={theme}> 
      <CssBaseline />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/recipes/create" element={<CreateRecipe />} />
          <Route path="/recipes/search" element={<Search />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      </ThemeProvider>

    </div>
  )
}

export default App;
