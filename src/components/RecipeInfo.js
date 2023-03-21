import {Paper, Typography, Grid } from '@mui/material'

const RecipeInfo = ({ recipe }) => (

    <Paper sx={{ m:1, p:2, backgroundColor: '#FAF8FF' }}>
        <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:'center',  alignItems:{ md:'end' } }}>

            <Grid item xs={12}>
            <Typography variant="h4">{recipe.name}</Typography>

            </Grid>
            <Grid item xs={6} sx={{mt:1}}>
                <Typography sx={{fontWeight:'bold'}}> Cooking time: </Typography>
                <Typography>{recipe.cookingTimeInMinutes} min</Typography>
            </Grid>

            <Grid item xs={6} sx={{mt:1}}>
                <Typography sx={{fontWeight:'bold'}}> Protein: </Typography>
                <Typography>{recipe.protein}g</Typography>
            </Grid>

            <Grid item xs={6} sx={{mt:1}}>
                <Typography sx={{fontWeight:'bold'}}> Carbs: </Typography>
                <Typography>{recipe.carbohydrates}g</Typography>
            </Grid>

            <Grid item xs={6} sx={{mt:1}}>
                <Typography sx={{fontWeight:'bold'}}> Fat: </Typography>
                <Typography>{recipe.fat}g</Typography>
            </Grid>
        </Grid>
    </Paper>
)

export default RecipeInfo