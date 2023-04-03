import { Box, TextField, Typography, Button } from "@mui/material"

const Login = () => {


    return(
        <>
        <Box
        style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/Cooking.png')`,
            backgroundSize: 'cover',
            width:'100%',
            height:'100vh',
            position:'absolute'
           
        }}
        >
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', py:10, mx:{xs:'5%', sm:'10%', md:'30%'}, my:{xs:'30%', sm:'10%'}, backgroundColor:'white', opacity:0.8}}>
                <Typography variant="h3"> Login</Typography>
                <TextField variant="outlined" label="Username" margin="normal" />
                <TextField variant="outlined" label="Password" margin="normal" />
                <Button variant="outlined" size="large" sx={{mt:3}}>Login</Button>
            </Box>
        </Box>
        </>
    )
}

export default Login