import { Grid, Typography, Divider } from '@mui/material'

const RecipeIngredients = ({ ingredients }) => (

        <Grid container sx={{display:'flex', flexDirection:'column', width:'100%', backgroundColor:'#FAF8FF', p:2}}>
            <Typography variant="h5" sx={{fontWeight:'bold', mb:1}}>Ingredients</Typography>
            {ingredients.map(ingredient => (
                <Grid key={ingredient} item sx={{p:1}}>
                    <Typography>{ingredient}</Typography>
                    <Divider />
                </Grid>
            ))}
        </Grid>
)

export default RecipeIngredients