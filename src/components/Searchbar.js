import { TextField, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Searchbar = ({ handleSearchbarChange }) => (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 2 }}>
         <SearchIcon sx={{mt:2}} />
        <TextField variant="outlined" label="search recipes by name, meal or main ingredient" sx={{ml: 1, width: '30em', borderBottom:'none' }} onChange={handleSearchbarChange}/>
    </Box>
)

export default Searchbar