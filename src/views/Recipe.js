import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import recipesService from '../services/recipes'
import { Grid, Button, Box } from '@mui/material'
import RecipeInfo from "../components/RecipeInfo"
import RecipeIngredients from "../components/RecipeIngredients"
import RecipeInstruction from "../components/RecipeInstruction"

const Recipe = () => {
    
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [showIngredients, setShowIngredients] = useState(true)
    const [suggestRecipes, setSuggestRecipes] = useState(null)

    useEffect(() => {
        const doActions = async () => {
            const response = await recipesService.getRecipe(id)
            setRecipe(response)

        }
        doActions()
    }, [id])

    const showIngredientsHandler = () => {
        setShowIngredients(true)
    }

    const showInstructionsHandler = () => {
        setShowIngredients(false)
    }

   
    
    return (
        <>
            {recipe &&
                <Grid container sx={{display:'flex', flexDirection: {xs:'column', sm:'row'}, justifyContent:'center',  alignItems:{xs:'center', sm:'start' },  }}>
                    <Grid item xs={12}>
                        <img alt="chicken pasta" src="../chicken_pasta.png" style={{maxWidth: '100%', height:'auto'}}  />
                    </Grid>
                
                
                    <Grid item xs={12}> 
                    <RecipeInfo recipe={recipe} />
                    </Grid>

                    
                    <Box sx={{mt:8}}>
                        <Button style={{borderBottom: showIngredients ? '2px solid black': 'none'}} sx={{mr:7, color:'black', fontWeight:'bold', borderRadius:0, fontSize:'1.5em' }} onClick={showIngredientsHandler}>Ingredients</Button>
                        <Button style={{borderBottom: !showIngredients ? '2px solid black': 'none'}} sx={{color:'black', fontWeight:'bold', borderRadius:0, fontSize:'1.5em' }} onClick={showInstructionsHandler}>Instructions</Button>
                    </Box>
                    
                    {/* {/* <Grid item xs={12} md={6}>
                    <RecipeIngredients ingredients={recipe.ingredients} />
                    </Grid> */}

                    <Grid item xs={12}>
                        {showIngredients ?
                    <RecipeIngredients ingredients={recipe.ingredients} />
                    : <RecipeInstruction instructions={recipe.instructions} />
                    
                        }
                    </Grid> 
                </Grid>
            }
             </>
    )
}

export default Recipe