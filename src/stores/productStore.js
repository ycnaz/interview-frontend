import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getAllProducts } from '@/services/api'

export const useProductStore = defineStore('productStore', () => {
  const products = ref([])
  const product = ref(null)
  const categories = ref([])

  const searchQuery = ref('')
  const selectedOrder = ref('')
  const selectedCategories = ref([])

  let fetchPromise = null

  const loading = ref(false)

  const error = ref(null)

  const allCategories = computed(() => {
    const categoryMap = {}

    for (const product of products.value) {
      const category = product.category
      categoryMap[category] = (categoryMap[category] || 0) + 1
    }

    return Object.entries(categoryMap).map(([category, count]) => ({
      category,
      count,
    }))
  })

  const activeFilters = computed(() => {
    const filters = []
    selectedCategories.value.forEach((category) => {
      filters.push({ type: 'category', label: category })
    })

    if (selectedOrder.value) {
      filters.push({ type: 'order', label: selectedOrder.value })
    }

    if (searchQuery.value) {
      filters.push({ type: 'search', label: searchQuery.value })
    }
    return filters
  })

  const filteredProducts = computed(() => {
    let result = [...products.value]

    if (selectedCategories.value.length > 0) {
      result = result.filter((product) => selectedCategories.value.includes(product.category))
    }

    if (searchQuery.value.trim()) {
      const query = searchQuery.value.trim().toLowerCase()
      result = result.filter((product) => product.title.toLowerCase().includes(query))
    }

    return result
  })

  const getProductById = (id) => {
    return products.value.find((p) => p.id == id)
  }

  const addCategories = (category) => {
    selectedCategories.value.push(category)
  }

  const removeCategories = (category) => {
    selectedCategories.value = selectedCategories.value.filter((c) => c !== category)
  }

  const setQuery = (query) => {
    searchQuery.value = query
  }

  const clearQuery = () => {
    searchQuery.value = ''
  }

  const clearOrder = () => {
    selectedOrder.value = ''
  }

  function removeFilter(filter) {
    switch (filter.type) {
      case 'category':
        removeCategories(filter.label)
        break
      case 'order':
        clearOrder()
        break
      case 'search':
        clearQuery()
        break
    }
  }

  const fetchProducts = async (limit = null, sort = 'asc') => {
    if (fetchPromise) return fetchPromise

    loading.value = true
    error.value = null

    fetchPromise = (async () => {
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
        fetchPromise = null
      }
    })()

    return fetchPromise
  }

  return {
    products,
    product,
    categories,
    loading,
    error,
    filteredProducts,
    getProductById,
    allCategories,
    selectedCategories,
    selectedOrder,
    searchQuery,
    activeFilters,
    setQuery,
    removeFilter,
    clearOrder,
    clearQuery,
    removeCategories,
    addCategories,
    fetchProducts,
  }
})
