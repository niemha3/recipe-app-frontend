
import React, { useState, useEffect } from 'react'
import { Paper, Typography, Grid, Box } from '@mui/material'
import RecipeCard from '../components/RecipeCard'
import recipesService from '../services/recipes'
import Searchbar from '../components/Searchbar'
import RandomRecipes from '../components/RandomRecipes'
import RecipesByMeal from '../components/RecipesByMeal'



const Home = () => {

    const [recipes, setRecipes] = useState(null)
    const [randomRecipes, setRandomRecipes] = useState(null)
    const [lunchRecipes, setLunchRecipes] = useState(null)


    useEffect(() => {
        const doActions = async () => {
            const response = await recipesService.getRecipes()

            setRecipes(response)

            const shuffledRecipes = response.sort(() => 0.5 - Math.random())

            setRandomRecipes(shuffledRecipes.slice(0,5))

            const shuffledLunch = response.filter((lunch) => lunch.meal.toLowerCase().includes('lunch')).sort(() => 0.5 - Math.random())

            setLunchRecipes(shuffledLunch.slice(0,4))


        }
        doActions()

    }, [])

    console.log(lunchRecipes)
  

    

    return (
        <> 
       
          
            <RandomRecipes randomRecipes={randomRecipes}  />
            <RecipesByMeal lunchRecipes={lunchRecipes} />
            
            <Box sx={{ my: 3, px: { xs: 3, md:'20', xl:35}, backgroundColor: '#FAF8FF', width:'100%' }}>
                <Typography variant="h5" sx={{fontWeight:'bold', ml: {xs: 0, md:3}, textAlign: { xs:'center', md: 'start'} }}>
                    Popular Recipes
                </Typography>
                
                {recipes &&
                    <Grid container sx={{display:'flex', justifyContent:'center'}}>
                        {recipes.map((recipe) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
                                <RecipeCard recipe={recipe} />
                            </Grid>
                        ))}
                    </Grid>
                }
                
                </Box>
         
        </>
    )
}
export default Home