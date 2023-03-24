import { useNavigate } from "react-router-dom"
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import RestoreIcon from '@mui/icons-material/Restore';




const RecipeCard = ({ recipe }) => {

    const navigate = useNavigate()
    
    return (
        <> 
            {recipe &&
                <Card sx={{m:2, borderRadius:'15px', maxWidth: '100%', height:'auto', display: 'flex', flexDirection: 'column', ':hover': { transform:'scale(1.1)', boxShadow: 20, borderColor: 'neutral.outlinedHoverBorder', cursor:'pointer'}} } onClick={() => navigate(`/recipes/${recipe.id}`)}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image="./chicken_pasta.png"
                        alt="Chicken pasta dish"

                    >
                    </CardMedia>

                

                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1, ml:2 }}>
                        {recipe.name}
                    </Typography>
                    
                    <Box sx={{display:'flex', ml:2, mb:1}}>
                        <RestoreIcon />
                        <Typography sx={{ml:1}}>{recipe.cookingTimeInMinutes}min</Typography>
                        <Typography sx={{ml:1}}>{recipe.meal}</Typography>
                    </Box>

                </Card>
            }
        </>

    )
}

export default RecipeCard