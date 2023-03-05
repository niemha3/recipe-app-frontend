const NavbarStyles = {
    container: {
        backgroundColor: 'white',
        color: 'black',
    },

    boxForHamburgerMenu: {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' }
    },

    hamburgerMenu: {
        display: { xs: 'block', md: 'none' }
    },

    logoText: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    },

    boxForDesktopMenu: {
        ml: { md: 9, lg: 30 },
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' }
    },

    desktopMenuLinks: {
        my: 2,
        color: 'black',
        display: 'block'
    },

    loginButton: {
        flexGrow: 0,
        mr: 2,
        display: { xs: 'flex' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    }

}

export default NavbarStyles 