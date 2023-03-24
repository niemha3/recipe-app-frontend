import {Box, Paper, Typography, TextField, Button} from '@mui/material'
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

            <Button sx={{mt:2}} disabled={!name || !ingredients || !instructions} variant="outlined">Submit</Button>
        </Box>

  
    </Paper>
)
}


export default CreateRecipe
    
