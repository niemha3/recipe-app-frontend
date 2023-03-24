import {Box, Paper, Typography, TextField, Button} from '@mui/material'
import { useState } from 'react'
import RecipesService from '../services/recipes'

const CreateRecipe = () => {

    const [recipeName, setRecipeName] = useState('')
    const [recipeIngredients, setRecipeIngredients] = useState([])
    const [recipeInstructions, setRecipeInstructions] = useState([])
    const [recipeCalories, setRecipeCalories] = useState('')
    const [recipeMainIngredient, setRecipeMainIngredient] = useState('')
    const [recipeCookingTime, setRecipeCookingTime] = useState('')
    const [recipeProtein, setRecipeProtein] = useState('')
    const [recipeCarbohydrates, setRecipeCarbohydrates] = useState('')
    const [recipeFat, setRecipeFat] = useState('')

    const handleNameOnChange = (event) => {
        setRecipeName(event.target.value)
        
    }

    const handleIngredientsOnChange = (event) => {
        setRecipeIngredients(event.target.value)
        
    }

    const handleInstructionsOnChange = (event) => {
        setRecipeInstructions(event.target.value)
        
    }

    const handleCaloriesOnChange = (event) => {
        setRecipeCalories(event.target.value)
        
    }

    const handleMainIngredientOnChange = (event) => {
        setRecipeMainIngredient(event.target.value)
        
    }

    const handleCookingTimeOnChange = (event) => {
        setRecipeCookingTime(event.target.value)
        
    }

    const handleProteinOnChange = (event) => {
        setRecipeProtein(event.target.value)
        
    }

    const handleCarbohydratesOnChange = (event) => {
        setRecipeCarbohydrates(event.target.value)
        
    }

    const handleFatOnChange = (event) => {
        setRecipeFat(event.target.value)
        
    }

    const submitNewRecipe = async () => {
        
        const newRecipe = {
            name: recipeName,
            ingredients: recipeIngredients,
            instructions: recipeInstructions,
            calories: recipeCalories,
            mainIngredient: recipeMainIngredient,
            cookingTimeInMinutes: recipeCookingTime,
            protein: recipeProtein,
            carbohydrates: recipeCarbohydrates,
            fat: recipeFat
        }

        await RecipesService.createNewRecipe(newRecipe)
    }


    
  

return (
    <Paper sx={{backgroundColor: '#FAF8FF', display:'flex', flexDirection:'column', justifyContent: {xs:'center'}}}>
        

        <Box sx={{ alignSelf:'center', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', borderRadius:'10px', width:'40vw', mt:15, p:3, backgroundColor:'white'}}> 

        <Typography variant ="h4" sx={{fontSize: '2em', fontWeight:'bold', m:2, alignSelf: {xs: 'center', sm:'start'}}}> New recipe</Typography>
        <Typography variant="p" sx={{m:2, fontSize:'1.1em'}}>Give required recipe info to submit a new recipe</Typography>

            <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', mt:4, width:{xs:'40vw', sm:'25vw', md:'20vw', xl:'10vw'}}}> 
          
            <TextField id="outlined-basic" label="Name" fullWidth required variant="outlined" size="small" onChange={handleNameOnChange} />

            <TextField variant="outlined" label="Ingredients" fullWidth required multiline size="small" margin="normal" onChange={handleIngredientsOnChange}  />

            <TextField variant="outlined" label="Instructions" fullWidth required multiline size="small" margin="normal"onChange={handleInstructionsOnChange} />
            
            <TextField variant="outlined" label="Calories" fullWidth size="small" margin="normal" onChange={handleCaloriesOnChange} />

            <TextField variant="outlined" label="Main ingredient" fullWidth size="small" margin="normal" onChange={handleMainIngredientOnChange}  />
         
            <TextField variant="outlined" label="Cooking time in minutes" fullWidth size="small" margin="normal" onChange={handleCookingTimeOnChange} />

            <TextField variant="outlined" label="Protein" size="small" fullWidth margin="normal" onChange={handleProteinOnChange}  />

            <TextField variant="outlined" label="Carbohydrates" fullWidth size="small" margin="normal" onChange={handleCarbohydratesOnChange}  />

            <TextField variant="outlined" label="Fat" fullWidth size="small" margin="normal" onChange={handleFatOnChange}  />
            </Box>

            <Button sx={{mt:2}} disabled={!recipeName || !recipeIngredients || !recipeInstructions} variant="outlined" onClick={submitNewRecipe}>Submit</Button>
        </Box>

  
    </Paper>
)
}


export default CreateRecipe
    
