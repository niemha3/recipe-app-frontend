import {Box, Paper, Typography, TextField} from '@mui/material'
import { useState } from 'react'

const CreateRecipe = () => {

    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const [calories, setCalories] = useState('')
    const [mainIngredient, setMainIngredient] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [protein, setProtein] = useState('')
    const [carbohydratess, setCarbohydrates] = useState('')
    const [fat, setFat] = useState('')

    const handleNameOnChange = (event) => {
        setName(event.target.value)
        
    }

    const handleIngredientsOnChange = (event) => {
        setIngredients(event.target.value)
        
    }

    const handleInstructionsOnChange = (event) => {
        setInstructions(event.target.value)
        
    }

    const handleCaloriesOnChange = (event) => {
        setCalories(event.target.value)
        
    }

    const handleMainIngredientOnChange = (event) => {
        setMainIngredient(event.target.value)
        
    }

    const handleCookingTimeOnChange = (event) => {
        setCookingTime(event.target.value)
        
    }

    const handleProteinOnChange = (event) => {
        setProtein(event.target.value)
        
    }

    const handleCarbohydratesOnChange = (event) => {
        setCarbohydrates(event.target.value)
        
    }

    const handleFatOnChange = (event) => {
        setFat(event.target.value)
        
    }


    
  

return (
    <Paper sx={{mt:5}}>
        <Typography variant ="h4"> Create new recipe</Typography>

        <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'50vw', mt:5}}> 
          
            <TextField id="outlined-basic" label="Name" variant="outlined" size="small" margin="normal" onChange={handleNameOnChange} />

            <TextField variant="outlined" label="Ingredients" multiline size="small" margin="normal"  />

            <TextField variant="outlined" label="Instructions" multiline size="small" margin="normal" />
            
            <TextField variant="outlined" label="Calories" size="small" margin="normal" />

            <TextField variant="outlined" label="Main ingredient" size="small" margin="normal"  />
         
            <TextField variant="outlined" label="Cooking time in minutes" size="small" margin="normal" />

            <TextField variant="outlined" label="Protein" size="small" margin="normal"  />

            <TextField variant="outlined" label="Carbohydrates" size="small" margin="normal"  />

            <TextField variant="outlined" label="Fat" size="small" margin="normal"  />
        </Box>

  
    </Paper>
)
}


export default CreateRecipe
    
