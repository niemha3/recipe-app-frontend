import { useState } from 'react'
import NavbarStyles from '../styles/Styles.js'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'




const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position="sticky" sx={{
            backgroundColor: "white"
        
            
        }}>
            <Container maxWidth="xl" sx={NavbarStyles.container}>
                <Toolbar disableGutters>
                <Box
                    component="img"
                    sx={{maxWidth: '100%', height: 100, ml:1, display: {xs:'none', md:'block'}}}
                    alt="Logo"
                    src="/logo_transparent_ver2.png"
                    href="/"
                    /> 

                    <Box sx={NavbarStyles.boxForHamburgerMenu}>
                        <IconButton
                            size="large"
                            aria-label="hamburger-menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={NavbarStyles.hamburgerMenu}
                        >
                            <MenuItem > 
                                <Link sx={NavbarStyles.hamburgerMenuLinks} href="/">Recipes</Link>
                            </MenuItem>

                            <MenuItem>
                                <Link sx={NavbarStyles.hamburgerMenuLinks} href="/recipes/search"> Search</Link>
                            </MenuItem>

                            <MenuItem> 
                                <Link sx={NavbarStyles.hamburgerMenuLinks} href="/recipes/create">New Recipe</Link>
                             </MenuItem>

                            <MenuItem> 
                                <Link sx={NavbarStyles.hamburgerMenuLinks} href="/login">Login</Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box
                    component="img"
                    sx={{maxWidth: '100%', height: 100, display: {xs:'block', md:'none'}, mr:1}}
                    alt="Logo"
                    src="/logo_short_transparent_ver2.png"
                    href="/"
                    />
                    <Box sx={NavbarStyles.boxForDesktopMenu}>
                        <Link sx={NavbarStyles.desktopMenuLinks} href="/">Recipes</Link>
                        <Link sx={NavbarStyles.desktopMenuLinks} href="/recipes/search"> Search</Link>
                        <Link sx={NavbarStyles.desktopMenuLinks} href="/recipes/create">New Recipe</Link>
                        <Link sx={NavbarStyles.desktopMenuLinks} href="/login">Login</Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navbar