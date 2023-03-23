import { Paper, Grid, Typography, Divider } from '@mui/material'

const RecipeIngredients = ( {ingredients} ) => (

    <Paper sx={{my:4, p:2, backgroundColor: '#FAF8FF'}}> 
        <Grid container sx={{display:'flex', flexDirection:'column', my:4, width:'100%'}}>
            <Typography variant="h5" sx={{fontWeight:'bold', mb:1}}>Ingredients</Typography>
            {ingredients.map(ingredient => (
                <Grid key={ingredient} item sx={{p:1}}>
                    <Typography>{ingredient}</Typography>
                    <Divider />
                    </Grid>
            ))}
        </Grid>
        </Paper>
        
  
)

export default RecipeIngredients