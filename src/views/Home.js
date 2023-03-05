
import React, { useState, useEffect } from 'react'
import { Paper, Typography, Grid } from '@mui/material'
import RecipeCard from '../components/RecipeCard'
import recipesService from '../services/recipes'



const Home = () => {

    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const doActions = async () => {
            const response = await recipesService.getRecipes()

            setRecipes(response)

        }
        doActions()

    }, [])

    console.log(recipes)

    return (
        <Paper sx={{ my: 3, py: 3, backgroundColor: '#FAF8FF' }}>
            <Typography variant="h5" sx={{ ml: 3, }}>
                Have you tried out these?
            </Typography>

            {recipes &&
                < Grid container>
                    {recipes.map((recipe) => (
                        <Grid item key={recipe.id}>
                            <RecipeCard recipe={recipe} />
                        </Grid>
                    ))}
                </Grid>
            }
        </Paper >
    )
}
export default Home