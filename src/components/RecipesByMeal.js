import RecipeCard from '../components/RecipeCard'
import { Grid, Typography } from '@mui/material'

// TODO: Refactor to have any meal as a prop
const RecipesByMeal = ({ lunchRecipes }) =>  (
        <> 
        <Typography variant="h5" sx={{fontWeight: 'bold', ml: {xs:3, md:3}}}>Looking for lunch?</Typography>
        {lunchRecipes &&
        <Grid container sx={{display:'flex', flexDirection:{xs: 'column', sm:'row'}, justifyContent:'center'}}> 
            {lunchRecipes.map((lunchRecipe) => (
                <Grid item key={lunchRecipe.name} xs={12} sm={6} md={3}>
                    <RecipeCard recipe={lunchRecipe} />
                    </Grid>
            ))}
            </Grid>
        }
        </>
    )


export default RecipesByMeal