import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Box, TextField, Typography, Button } from "@mui/material"
import loginService from '../services/login_'

const Login = ({ handleSetUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
   

    const navigate = useNavigate()

    const handleLogin = async (event) => {

        event.preventDefault()
     
        try {
            const user = await loginService.login({
                username, password
            })
            handleSetUser(user)
            setUsername('')
            setPassword('')
            navigate('/')
        } catch (exception) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }
    

    

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    

    
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
            <Box component="form" sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', py:10, mx:{xs:'5%', sm:'10%', md:'30%'}, my:{xs:'30%', sm:'10%'}, backgroundColor:'white', opacity:0.8}}>
                <Typography variant="h3"> Login</Typography>
                <TextField variant="outlined" label="Username" autoComplete="username" margin="normal" onChange={handleUsername} />
                <TextField variant="outlined" type="password" autoComplete="current-password" label="Password" margin="normal" onChange={handlePassword} />
                <Button variant="outlined" size="large" sx={{mt:3}} onClick={handleLogin}>Login</Button>
            </Box>
        </Box>
        </>
    )
}

export default Login