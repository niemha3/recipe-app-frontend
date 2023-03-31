import { useEffect, useState } from "react"
import recipesService from '../services/recipes'
import { Box, TextField, InputBase, Paper, Button, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import RecipeCard from "../components/RecipeCard"
import Searchbar from "../components/Searchbar"


const Search = () => {
    const [recipes, setRecipes] = useState(null)
    const [searchbar, setSearchbar] = useState('')
    const [matchingRecipes, setMatchingRecipes] = useState(null)

    useEffect(() => {
       const doActions = async () => {
            const response = await recipesService.getRecipes()
            setRecipes(response)

            if(searchbar.length > 1) {
            const searchedRecipes = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchbar.toLowerCase()) ||
            recipe.meal.toLowerCase().includes(searchbar.toLowerCase()) ||
            recipe.mainIngredient.toLowerCase().includes(searchbar.toLowerCase()))
            
            setMatchingRecipes(searchedRecipes)
            }

        }

        doActions()
    }, [recipes, searchbar, matchingRecipes])

    const handleSearchbarChange = (event) => {
        setSearchbar(event.target.value)

    }


    

    return (
        <>
            
            <Paper sx={{ display:'flex', flexDirection:'column', justifyContent:'center', backgroundColor:'#FAF8FF', width:'100%', height:'auto', p:9}}> 
                   <Searchbar handleSearchbarChange={handleSearchbarChange} />

                    <Box sx={{display:'flex', flexDirection:'row', mt:5}}> 
                        {matchingRecipes &&
                                <Grid container sx={{display:'flex', justifyContent:'center'}}>
                                    {matchingRecipes.map((recipe) => (
                                        <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
                                            <RecipeCard recipe={recipe} />
                                        </Grid>
                                    ))}
                                </Grid>
                            }
                    </Box>    
            </Paper>


     
        </>
    )
}

export default Search