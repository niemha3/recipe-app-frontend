import { TextField, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Searchbar = () => (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 2 }}>
        <SearchIcon si sx={{ alignSelf: 'center' }} />
        <TextField label="search recipes..." id="searchbar" sx={{ ml: 1, width: '25em' }} />
    </Box>
)

export default Searchbar