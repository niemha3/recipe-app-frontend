import { useNavigate } from "react-router-dom"
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import RestoreIcon from '@mui/icons-material/Restore';


const RecipeCard = ({ recipe, largeCardHeight }) => {

    const navigate = useNavigate()
    
    return (
        <> 
            {recipe &&
                <Card sx={{m:2, borderRadius:'15px', maxWidth: '100%', height:'auto', display: 'flex', flexDirection: 'column', ':hover': { transform:'scale(1.1)', boxShadow: 20, borderColor: 'neutral.outlinedHoverBorder', cursor:'pointer'}} } onClick={() => navigate(`/recipes/${recipe.id}`)}>
                    <CardMedia
                        component="img"
                        sx={{height: largeCardHeight ? {xs:'184px', sm:'360px', md:'400px', xl: '600px'} : {xs: '184px', lg:'200px', xl:'250px'}}}
                        image={`https://drive.google.com/uc?export=view&id=${recipe.imageUrlId}`}
                        alt={`${recipe.name}`}

                    >
                    </CardMedia>

                    <Typography variant="h6" sx={{fontSize:'1.1em', fontWeight: 'bold', mt: 1, ml:2 }}>
                        {recipe.name}
                    </Typography>
                    
                    <Box sx={{display:'flex', ml:2, mb:1}}>
                        <RestoreIcon />
                        <Typography sx={{ml:1, fontSize: '0.9em'}}>{recipe.cookingTimeInMinutes}min</Typography>
                        <Typography sx={{ml:1, fontSize: '0.9em'}}>{recipe.meal}</Typography>
                    </Box>

                </Card>
            }
        </>

    )
}

export default RecipeCard