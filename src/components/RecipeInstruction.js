import { Paper, Grid, Typography, Divider } from '@mui/material'

const RecipeInstruction = ( {instructions} ) => (

    // <Paper sx={{ m:1, p:2, backgroundColor: '#FAF8FF' }}>
        <Grid container sx={{display:'flex', flexDirection:'column', my:4, width:'90%'}}>
            <Typography variant="h5" sx={{fontWeight:'bold', mb:1}}>Instructions</Typography>
     
                {instructions.map(instruction => (
                <Grid key={instruction} item sx={{p:1}}>
                    <Typography key={instruction}>{instruction}</Typography>
                    <Divider />
                </Grid>
                ))}
        </Grid>
    // </Paper>   
  
)

export default RecipeInstruction