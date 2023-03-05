import { useState } from 'react'
import NavbarStyles from '../styles/Styles.js'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

const Navbar = () => {
    const pages = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert']

    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position="static" sx={{
            backgroundColor: "white"
        }}>
            <Container maxWidth="xl" sx={NavbarStyles.container}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        components="a"
                        href="/"
                        sx={NavbarStyles.logoText}
                    >
                        LetsGetCooking
                    </Typography>

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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={NavbarStyles.boxForDesktopMenu}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={NavbarStyles.desktopMenuLinks}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href=""
                            sx={NavbarStyles.loginButton}
                        >
                            Login
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navbar