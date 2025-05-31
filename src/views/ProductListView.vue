<script setup>
import SearchComp from '@/components/SearchComp.vue';
import StockSelectorComp from '@/components/StockSelectorComp.vue';
import OrderMenuComp from '@/components/OrderMenuComp.vue';
import CategoryMenuComp from '@/components/CategoryMenuComp.vue';
import { onMounted } from 'vue';
import { useProductStore } from '../stores/productStore'

const productStore = useProductStore()

const handleCategoryChange = ({ category, checked }) => {
    if (checked) {
        if (!productStore.selectedCategories.includes(category)) {
            productStore.addCategories(category)
        }
    } else {
        productStore.removeCategories(category)
    }
}

onMounted(() => {
    productStore.fetchProducts()
})
</script>

<template>
    <div class="flex gap-6">

        <div class="flex flex-col gap-y-4 shrink-0 w-[266px]">
            <SearchComp />

            <StockSelectorComp />

            <OrderMenuComp />

            <CategoryMenuComp @category-change="handleCategoryChange" />
        </div>

        <div class="flex flex-col gap-y-6 grow h-auto">
            <div class="flex items-center justify-between h-16 bg-white rounded-3xl w-full shadow-sm p-4">
                <span class="text-[14px] text-[#253343]">فیلتر های اعمال شده</span>
                <div class="flex gap-x-3">
                    <div v-for="item in productStore.selectedCategories" :key="item"
                        class="flex items-center text-text bg-filteration-box rounded-2xl p-2 gap-x-2.5 min-w-[102px] h-full select-none">
                        <img loading="lazy" alt="Filteration magnifying glass" src="../assets/svg/navbar-category-2.svg"
                            class="size-4">
                        <span class="text-[12px]">{{ item }}</span>
                        <img loading="lazy" alt="Filteration delete SVG" src="../assets/svg/filteration-cross.svg"
                            class="size-2">
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-[repeat(3,_minmax(182px,_1fr))] gap-y-6 gap-x-4 w-full h-auto">
                <div v-for="product in productStore.productsByCategory" :key="product.id"
                    class="flex flex-col justify-between shadow-sm bg-white h-[286px] rounded-3xl p-2">
                    <div class="h-[170px] w-full rounded-2xl">
                        <KeepAlive>
                            <img loading="lazy" alt="Product Image" :src="product.image"
                                class="object-contain w-full h-full">
                        </KeepAlive>
                    </div>
                    <p dir="ltr" class="line-clamp-1 text-text text-[14px] mx-[4.33px]">{{ product.title }}</p>
                    <button
                        class="flex gap-x-2 justify-center text-accent border-[1.5px] border-main rounded-2xl py-3 px-4 mx-[4.33px]">
                        <span>مشاهده جزیات</span>
                        <img loading="lazy" alt="Arrow in card buttons" src="../assets/svg/arrow-left-s-line.svg">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>