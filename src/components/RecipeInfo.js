import {Typography, Grid, Divider } from '@mui/material'

const RecipeInfo = ({ recipe }) => (

    <> 
        <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:'center',  alignItems:{ md:'end' }, my:2, p:2 }}>

            <Grid item xs={12}>
            <Typography variant="h4">{recipe.name}</Typography>
            </Grid>
            
            <Grid item xs={9} sx={{mt:3}}>
                <Typography sx={{fontWeight:'bold'}}> Cooking time: </Typography>
                <Typography>{recipe.cookingTimeInMinutes} min</Typography>
            </Grid>

            <Grid item xs={3} sx={{mt:3}}>
                <Typography sx={{fontWeight: 'bold'}}> Calories: </Typography>
                <Typography>{recipe.calories} kcal</Typography>
            </Grid>
        </Grid>

            <Divider />

            <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:'center',  alignItems:{ md:'end' }, p:2 }}>
                <Grid item xs={5} sx={{mt:2}}>
                    <Typography sx={{fontWeight:'bold'}}> Protein: </Typography>
                    <Typography>{recipe.protein}g</Typography>
                </Grid>

                <Grid item xs={5} sx={{mt:2}}>
                    <Typography sx={{fontWeight:'bold'}}> Carbs: </Typography>
                    <Typography>{recipe.carbohydrates}g</Typography>
                </Grid>

                <Grid item xs={2} sx={{mt:2}}>
                    <Typography sx={{fontWeight:'bold'}}> Fat: </Typography>
                    <Typography>{recipe.fat}g</Typography>
                </Grid>
            </Grid>
        </>
        
      
   
)

export default RecipeInfo