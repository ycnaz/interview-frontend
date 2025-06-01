<script setup>
import SearchComp from '@/components/SearchComp.vue';
import StockSelectorComp from '@/components/StockSelectorComp.vue';
import OrderMenuComp from '@/components/OrderMenuComp.vue';
import CategoryMenuComp from '@/components/CategoryMenuComp.vue';
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '../stores/productStore'
import CardComp from '@/components/CardComp.vue';

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()

const removeFilter = (filter) => {
    productStore.removeFilter(filter)
}

const filterPillSvg = (type) => {
    switch (type) {
        case 'category':
            return new URL('@/assets/svg/navbar-category-2.svg', import.meta.url).href;
        case 'search':
            return new URL('@/assets/svg/gray-magnifying-glass.svg', import.meta.url).href;
        case 'order':
            return new URL('@/assets/svg/desc-filter.svg', import.meta.url).href;
        default:
            return '';
    }
}

watch(() => [
    productStore.selectedCategories,
    productStore.selectedOrder,
    productStore.searchQuery
], () => {
    router.replace({
        query: {
            categories: productStore.selectedCategories.join(',') || undefined,
            order: productStore.selectedOrder || undefined,
            search: productStore.searchQuery || undefined,
        },
    })
},
    { deep: true }
)

onMounted(() => {
    const { categories, order, search } = route.query

    if (categories) {
        productStore.selectedCategories = categories.split(',')
    }
    if (order) {
        productStore.selectedOrder = order
    }
    if (search) {
        productStore.searchQuery = search
    }
})
</script>

<template>
    <div class="flex gap-6">

        <div class="flex flex-col gap-y-4 shrink-0 w-[266px]">
            <SearchComp />

            <StockSelectorComp />

            <OrderMenuComp />

            <CategoryMenuComp />
        </div>

        <div class="flex flex-col gap-y-6 grow h-auto">
            <div class="flex items-center justify-between h-16 bg-white rounded-3xl w-full shadow-sm p-4">
                <span class="text-fourteen text-[#253343]">فیلتر های اعمال شده</span>
                <div class="flex gap-x-3">
                    <div v-for="filter in productStore.activeFilters" :key="filter.label"
                        class="flex items-center justify-between text-text bg-filteration-box rounded-2xl p-2 gap-x-2.5 min-w-[102px] h-full select-none">
                        <img loading="lazy" alt="Filteration magnifying glass" :src="filterPillSvg(filter.type)"
                            class="size-4">
                        <span class="text-twelve">{{ filter.label }}</span>
                        <div @click="removeFilter(filter)" class="flex justify-center items-center size-4">
                            <img loading="lazy" alt="Filteration delete SVG" src="../assets/svg/filteration-cross.svg"
                                class="size-2">
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="productStore.filteredProducts.length"
                class="grid grid-cols-[repeat(3,_minmax(182px,_1fr))] gap-y-6 gap-x-4 w-full h-auto">
                <CardComp v-for="product in productStore.filteredProducts" :key="product.id" :product />
            </div>
            <div v-else class="w-full flex justify-center">
                <span>محصولی به این اسم وجود ندارد!</span>
            </div>
            <span v-if="productStore.loading && !productStore.products.length"
                class="loading loading-infinity text-accent-og self-center size-28"></span>

        </div>
    </div>
</template>