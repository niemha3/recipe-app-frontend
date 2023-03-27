import { Paper, Grid, Typography, Divider } from '@mui/material'

const RecipeInstruction = ( {instructions} ) => (

        <Grid container sx={{display:'flex', flexDirection:'column', width:'100%', backgroundColor:'#FAF8FF', p:2}}>
            <Typography variant="h5" sx={{fontWeight:'bold', mb:1}}>Instructions</Typography>
     
                {instructions.map(instruction => (
                    <Grid key={instruction} item sx={{p:1}}>
                        <Typography key={instruction}>{instruction}</Typography>
                        <Divider />
                    </Grid>
                ))}
        </Grid>
)

export default RecipeInstruction