import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getAllProducts } from '@/services/api'

export const useProductStore = defineStore('productStore', () => {
  const products = ref([])
  const product = ref(null)
  const categories = ref([])

  const selectedCategories = ref([])

  const loading = ref(false)

  const error = ref(null)

  const productsByCategory = computed(() => {
    if (selectedCategories.value.length === 0) return products.value
    return products.value.filter((product) => selectedCategories.value.includes(product.category))
  })

  const getProductById = computed(() => {
    return (id) => products.value.find((p) => p.id === id)
  })

  const allCategories = computed(() => {
    return [...new Set(products.value.map((p) => p.category))]
  })

  const addCategories = (category) => {
    selectedCategories.value.push(category)
  }

  const removeCategories = (category) => {
    selectedCategories.value = selectedCategories.value.filter((c) => c !== category)
  }

  const fetchProducts = async (limit = null, sort = 'asc') => {
    loading.value = true
    error.value = null

    try {
      const data = await getAllProducts(limit, sort)
      products.value = data
      return data
    } catch (err) {
      error.value = err.message
      console.error('Error fetching products:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    product,
    categories,
    loading,
    error,
    productsByCategory,
    getProductById,
    allCategories,
    selectedCategories,
    removeCategories,
    addCategories,
    fetchProducts,
  }
})
