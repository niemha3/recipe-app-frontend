import {Typography, Grid, Divider } from '@mui/material'

const RecipeInfo = ({ recipe }) => (

    <> 
        <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:{xs:'center', md:'start'}, alignItems:{ md:'start' }, p:2, gap:2, mb:2}}>

            <Grid item xs={12}>
            <Typography variant="h4" sx={{textAlign:{xs:'center', md:'start'}}}>{recipe.name}</Typography>
            </Grid>
            
            <Grid item sx={{mt:3, mr:3,}}>
                <Typography sx={{fontWeight:'bold'}}> Cooking time: </Typography>
                <Typography>{recipe.cookingTimeInMinutes} min</Typography>
            </Grid>

            <Grid item sx={{mt:3}}>
                <Typography sx={{fontWeight: 'bold'}}> Calories: </Typography>
                <Typography>{recipe.calories} kcal</Typography>
            </Grid>
        </Grid>

            <Divider sx={{ml:2, display:{xs:'block', md:'none'}}}/>

            <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:{xs:'center', md:'start'}, alignItems:{ md:'start' }, p:2, gap:5 }}>
                <Grid item sx={{mt:2}}>
                    <Typography sx={{fontWeight:'bold'}}> Protein: </Typography>
                    <Typography>{recipe.protein}g</Typography>
                </Grid>

                <Grid item sx={{mt:2}}>
                    <Typography sx={{fontWeight:'bold'}}> Carbs: </Typography>
                    <Typography>{recipe.carbohydrates}g</Typography>
                </Grid>

                <Grid item sx={{mt:2}}>
                    <Typography sx={{fontWeight:'bold'}}> Fat: </Typography>
                    <Typography>{recipe.fat}g</Typography>
                </Grid>
            </Grid>
        </>
        
      
   
)

export default RecipeInfo