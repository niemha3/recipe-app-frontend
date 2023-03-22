import { Paper, Grid, Typography } from '@mui/material'

const RecipeInstruction = ( {instructions} ) => (

    <Paper sx={{ m:1, p:2, backgroundColor: '#FAF8FF' }}>
        <Grid container sx={{display:'flex', flexDirection:'column', mt:2, width:'90%'}}>
            <Typography sx={{fontWeight:'bold'}}>Instructions</Typography>
     
                {instructions.map(instruction => (
                <Grid item sx={{p:1}}>
                    <Typography key={instruction}>{instruction}</Typography>
                </Grid>
                ))}
        </Grid>
    </Paper>   
  
)

export default RecipeInstruction