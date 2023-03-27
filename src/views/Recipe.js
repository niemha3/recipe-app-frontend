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
                    <Grid item xs={12} md={6}>
                        <img alt="chicken pasta" src="../chicken_pasta.png" style={{maxWidth: '100%', height:'400px', objectFit:'cover', objectPosition:'bottom' }}  />
                    </Grid>
                
                    <Grid item xs={12} md={6}> 
                    <RecipeInfo recipe={recipe} />
                    </Grid>

                    <Box sx={{mt:8, display:{xs:'flex', md:'none'}}}>
                        <Button style={{borderBottom: showIngredients ? '2px solid black': 'none'}} sx={{mr:7, color:'black', fontWeight:'bold', borderRadius:0, fontSize: {xs:'0.8em', sm:'1.5rem' }}} onClick={showIngredientsHandler}>Ingredients</Button>
                        <Button style={{borderBottom: !showIngredients ? '2px solid black': 'none'}} sx={{color:'black', fontWeight:'bold', borderRadius:0, fontSize: {xs:'0.8em', sm:'1.5rem' }}} onClick={showInstructionsHandler}>Instructions</Button>
                    </Box>
                    
                   

                    <Grid item xs={12} sx={{display: {xs:'block', md:'none'}, my:8, width:'100%'}}>
                        {showIngredients ?
                    <RecipeIngredients ingredients={recipe.ingredients} />
                    : <RecipeInstruction instructions={recipe.instructions} />
                        }
                         </Grid> 
                        
                        <Grid container sx={{display:{xs:'none', md:'flex', lg:'flex'}, flexDirection:'row', justifyContent:'center', alignItems:'start', backgroundColor:'#FAF8FF', my:4, py:4, gap:5 }}> 
                            <Grid item lg={6} sx={{display: {xs:'none', md:'flex', lg:'flex'}}}>
                                <RecipeIngredients ingredients={recipe.ingredients} />
                            </Grid>

                            <Grid item lg={6} sx={{display: {xs:'none', md:'flex', lg:'flex'}}}>
                                <RecipeInstruction instructions={recipe.instructions} />
                            </Grid>
                        </Grid>
                </Grid>
            }
             </>
    )
}

export default Recipe