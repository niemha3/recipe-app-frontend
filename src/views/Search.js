import { useEffect, useState } from "react"
import recipesService from '../services/recipes'

import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'


const Search = () => {
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
       const doActions = async () => {
            const response = await recipesService.getRecipes()
            setRecipes(response)
        }

        doActions()
    })


    return (
        <>
       <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 2 }}>
             <SearchIcon si sx={{ alignSelf: 'center' }} />
             <TextField label="search recipes..." id="searchbar" sx={{ ml: 1, width: '25em' }} />
        </Box>
        </>
    )
}

export default Search