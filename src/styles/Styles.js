const NavbarStyles = {
    container: {
        backgroundColor: 'white',
        color: 'black',
    },

    boxForHamburgerMenu: {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        justifyContent:'end'
    },

    hamburgerMenu: {
        display: { xs: 'block', md: 'none' }
    },

    logoText: {

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
        gap:3,
        display: { xs: 'none', md: 'flex' },
        justifyContent:'center',
       
        
    },

    desktopMenuLinks: {
        my: 2,
        color: 'black',
        display: 'block',
        textDecoration:'none',
        fontSize: '1.2em'
    },

    hamburgerMenuLinks: {
        color: 'black',
        display: 'block',
        textDecoration:'none',
        fontSize: '1.2em'
    },


    loginButton: {
        fontSize: { xs: 15, sm: 20, },
        flexGrow: 0,
        mr: 2,
        display: { xs: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    }

}

export const recipeInfoBoxStyles = {
    topics: {
        fontWeight: 'bold'
    }
}

export default NavbarStyles 