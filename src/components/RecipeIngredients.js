import { Paper, Grid, Typography, Divider } from '@mui/material'

const RecipeIngredients = ( {ingredients} ) => (

        <Grid container sx={{display:'flex', flexDirection:'column', mt:2, width:'90%'}}>
            <Typography variant="h5" sx={{fontWeight:'bold', mb:1}}>Ingredients</Typography>
            {ingredients.map(ingredient => (
                <Grid item sx={{p:1}}>
                    <Typography>{ingredient}</Typography>
                    <Divider />
                    </Grid>
            ))}
        </Grid>
  
)

export default RecipeIngredients