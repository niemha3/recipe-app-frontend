import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import RestoreIcon from '@mui/icons-material/Restore';



const RecipeCard = ({ recipe }) => {
    return (

        <Card sx={{ my: 2, maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="194"
                image="./chicken_pasta.png"
                alt="Chicken pasta dish"
                justifyContent="center"
            >
            </CardMedia>

            <Typography variant="h7" sx={{ mt: 1 }}>
                Lunch
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                Creamy Chicken Pasta
            </Typography>

            <Box sx={{ my: 1 }}>
                <RestoreIcon />
                <Typography variant="p"> 45min</Typography>
            </Box>

        </Card>

    )
}

export default RecipeCard