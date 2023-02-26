import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/recipes'

const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}

export default { getAll }