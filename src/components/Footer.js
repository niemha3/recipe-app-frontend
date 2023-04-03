import { Box, Typography, Link, Grid, IconButton, BottomNavigation } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'


const Footer = () => (

  

<Box style={{position:'relative', width:'100%', textAlign:'center'}}> 

        <Typography sx={{textAlign:'center', fontSize:'0.7em'}}>© Harri Nieminen 2023</Typography>
        <Box container sx={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
               <IconButton href="https://www.linkedin.com/in/harri-nieminen-ab1845228/">
                 <LinkedInIcon sx={{fontSize:'0.7em'}} target="_blank" />
               </IconButton>
           
               <IconButton href="https://github.com/niemha3" target="_blank">
                 <GitHubIcon sx={{fontSize:'0.7em'}}/>
               </IconButton>
          
               <IconButton>
                 <EmailIcon sx={{fontSize:'0.7em'}} target="_blank" />
               </IconButton>
     
       
    </Box>
    </Box>
)

export default Footer