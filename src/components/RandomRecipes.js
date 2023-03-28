import { Grid, Typography, Box} from '@mui/material'
import RecipeCard from '../components/RecipeCard'

const RandomRecipes = ({ randomRecipes }) => {

    return (
        <Box sx={{ mb: 3, px: { xs: 3, md:0, xl:5}, py:3, backgroundColor: '#FAF8FF' }}>
        <Typography variant="h5" sx={{fontWeight:'bold', ml: {xs:3, md:3} }}> Have you tried these?</Typography>

        {randomRecipes &&
       <> 
        <Grid container sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, alignItems:'center'}}>
            <Grid item xs={12} sm={12} lg={6} > 
                <RecipeCard recipe={randomRecipes[0]} largeCardHeight={400} />
            </Grid>
       


        <Grid item lg container sx={{display:'flex', flexDirection: {xs: 'column', sm:'row'}}}> 
                <Grid item xs={12} sm={6}  lg={6}>
                    <RecipeCard recipe={randomRecipes[1]} />
                </Grid>

                <Grid item xs={12} sm={6} lg={6}>
                    <RecipeCard recipe={randomRecipes[2]} />
                </Grid>

                <Grid item xs={12} sm={6} lg={6}>
                    <RecipeCard recipe={randomRecipes[3]} />
                </Grid>

                <Grid item xs={12} sm={6} lg={6}>
                    <RecipeCard recipe={randomRecipes[4]} />
                </Grid>
  
        </Grid>
        </Grid>    
        </>
            }
            </Box>
      
    )
}

export default RandomRecipes