import { useNavigate } from "react-router-dom"
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import RestoreIcon from '@mui/icons-material/Restore';




const RecipeCard = ({ recipe }) => {

    const navigate = useNavigate()
    
    return (

        
        <Card sx={{p:1, m: 2, maxWidth: 345, display: 'flex', flexDirection: 'column', ':hover': { boxShadow: 20, borderColor: 'neutral.outlinedHoverBorder', cursor:'pointer'}} } onClick={() => navigate(`/recipes/${recipe.id}`)}>
            <CardMedia
                component="img"
                height="194"
                image="./chicken_pasta.png"
                alt="Chicken pasta dish"

            >
            </CardMedia>

            <Typography variant="h7" sx={{ mt: 1 }}>
                Lunch
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                {recipe.name}
            </Typography>

            <Box sx={{ my: 1 }}>
                <RestoreIcon />
                <Typography variant="p"> 45min</Typography>
            </Box>

        </Card>

    )
}

export default RecipeCard