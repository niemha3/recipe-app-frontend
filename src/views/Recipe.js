import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import recipesService from '../services/recipes'
import { Grid } from '@mui/material'
import RecipeInfo from "../components/RecipeInfo"
import RecipeIngredients from "../components/RecipeIngredients"
import RecipeInstruction from "../components/RecipeInstruction"

const Recipe = () => {
    
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const doActions = async () => {
            const response = await recipesService.getRecipe(id)
            setRecipe(response)
        }
        doActions()
    }, [id])

    console.log(recipe)
    
    return (
        <>
            {recipe &&
            // <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>

                <Grid container sx={{display:'flex', flexDirection: {xs:'column', sm:'row'}, justifyContent:'center',  alignItems:{xs:'center', sm:'start' },  }}>
                    <Grid item xs={12} sm={6}>
                        <img alt="chicken pasta" src="../chicken_pasta.png" style={{maxWidth: '100%', height:'auto'}}  />
                    </Grid>
                
                
                <Grid item xs={12} sm={6}> 
                <RecipeInfo recipe={recipe} />
                </Grid>

                <Grid item xs={12}>
                <RecipeIngredients ingredients={recipe.ingredients} />
                </Grid>

                <Grid item xs={12}>
                <RecipeInstruction instructions={recipe.instructions} />
                </Grid>
{/*               
                <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:'center',  alignItems:{md:'end' } }}>

                        <Grid item xs={12}>
                        <Typography variant="h5">Info</Typography>

                        </Grid>
                    <Grid item xs={6}>
                        <Typography>Cooking time:</Typography>
                        <Typography>{recipe.cookingTimeInMinutes} min</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography>Protein:</Typography>
                        <Typography>{recipe.protein}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography>Carbs:</Typography>
                        <Typography>{recipe.carbohydrates}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography>Fat:</Typography>
                        <Typography>{recipe.fat}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h5">Ingredients</Typography>
                        {recipe.ingredients.map(ingredient => (
                            <Typography key={ingredient}> {ingredient}</Typography>
                        ))}
                    </Grid>

                    <Grid item xs={12}>
                        <Typography>Instructions</Typography>
                    </Grid>
                    <Grid item>
                        
                        <Typography>{recipe.instructions}</Typography>
                    </Grid>
                </Grid> */}


               
                </Grid>
            }
             </>
    )
}

export default Recipe