
import React, { useState, useEffect } from 'react'
import { Paper, Typography, Grid } from '@mui/material'
import RecipeCard from '../components/RecipeCard'
import recipesService from '../services/recipes'
import Searchbar from '../components/Searchbar'
import RandomRecipes from '../components/RandomRecipes'



const Home = () => {

    const [recipes, setRecipes] = useState(null)
    const [randomRecipes, setRandomRecipes] = useState(null)

    useEffect(() => {
        const doActions = async () => {
            const response = await recipesService.getRecipes()

            setRecipes(response)

            const shuffledRecipes = response.sort(() => 0.5 - Math.random())

            setRandomRecipes(shuffledRecipes.slice(0,5))

        }
        doActions()

    }, [])

    

    return (
        <> 
       
          
            <RandomRecipes randomRecipes={randomRecipes}  />
            
                {/* <Typography variant="h5" sx={{fontWeight:'bold', ml: {xs: 0, md:3}, textAlign: { xs:'center', md: 'start'} }}>
                    Have you tried out these?
                </Typography>

                {recipes &&
                    < Grid container sx={{display:'flex', justifyContent:'center'}}>
                        {recipes.map((recipe) => (
                            <Grid item key={recipe.id}>
                                <RecipeCard recipe={recipe} />
                            </Grid>
                        ))}
                    </Grid>
                } */}
         
        </>
    )
}
export default Home