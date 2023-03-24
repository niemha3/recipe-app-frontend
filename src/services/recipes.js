import axios from 'axios'

const baseUrl = '/api/recipes'

const getRecipes = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}

const getRecipe = async (recipeId) => {
    const request = axios.get(`${baseUrl}/${recipeId}`)
    const response = await request
    return response.data
}

const createNewRecipe = async (newRecipe) => {
    const request = axios.post(baseUrl, newRecipe)
    const response = await request
    return response

}



export default { getRecipes, getRecipe, createNewRecipe }