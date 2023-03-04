import axios from 'axios'

const baseUrl = '/api/recipes'

const getRecipes = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}




export default { getRecipes }