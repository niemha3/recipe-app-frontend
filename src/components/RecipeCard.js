import { useNavigate } from "react-router-dom"
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import RestoreIcon from '@mui/icons-material/Restore';




const RecipeCard = ({ recipe }) => {

    const navigate = useNavigate()
    
    return (

        
        <Card sx={{p:1, m: 2, maxWidth: 345, height:'auto', display: 'flex', flexDirection: 'column', ':hover': { transform:'scale(1.1)', boxShadow: 20, borderColor: 'neutral.outlinedHoverBorder', cursor:'pointer'}} } onClick={() => navigate(`/recipes/${recipe.id}`)}>
            <CardMedia
                component="img"
                height="194"
                image="./chicken_pasta.png"
                alt="Chicken pasta dish"

            >
            </CardMedia>

        

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                {recipe.name}
            </Typography>

            <Grid container sx={{ my: 1, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'end' }}>
                <Grid item xs={9}> 
                    <RestoreIcon />
                    <Typography variant="p"> 45min</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="p">
                    Lunch
                    </Typography>
                </Grid>
            </Grid>

        </Card>

    )
}

export default RecipeCard