import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getAllProducts = async (limit = null, sort = 'asc') => {
  try {
    const params = {}
    if (limit) params.limit = limit
    if (sort) params.sort = sort

    const response = await api.get('/products', { params })
    return response.data
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`)
  }
}
