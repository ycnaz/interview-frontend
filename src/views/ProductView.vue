<script setup>
import { useProductStore } from '@/stores/productStore';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const productStore = useProductStore()
const route = useRoute()

const product = ref(null)

onMounted(async () => {
    await productStore.fetchProducts()
    product.value = productStore.getProductById(route.params.id)
    console.log(product.value)
})
</script>

<template>
    <div v-if="product" class="flex flex-col gap-y-6">
        <div class="breadcrumbs text-fourteen text-breadcrumb">
            <ul>
                <li><img loading="lazy" alt="Breadcrumb Home SVG" src="../assets/svg/home.svg"></li>
                <li>
                    <RouterLink :to="{ name: 'products' }">لیست محصولات</RouterLink>
                </li>
                <li><span>{{ product.title }}</span></li>
            </ul>
        </div>
        <div class="flex flex-col justify-between h-[414px] w-full bg-white rounded-3xl shadow-sm p-6">
            <h2 class="leading-6 text-lg text-text">{{ product.title }}</h2>
            <div class="relative w-full h-[310px] rounded-2xl">
                <img loading="lazy" alt="Product Image" :src="product.image" class="object-contain w-full h-full">
                <div
                    class="absolute top-0 right-0 flex items-center justify-center rounded-[13px] bg-black opacity-50 size-10">
                    <img loading="lazy" alt="Zoom In Button" src="../assets/svg/search-zoom-in.svg" class="">
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-between h-[474px] w-full bg-white rounded-3xl shadow-sm p-6">
            <h2 class="text-text font-bold leading-6">مشخصات فنی</h2>
            <div class="flex gap-x-3 h-full max-h-[386px] w-full">
                <div class="flex flex-col w-[172px] h-full shrink-0 gap-y-3 text-fourteen text-product-page-label">
                    <div class="bg-inner-bg rounded-r-2xl rounded-l-sm h-12 w-full flex pr-4 items-center">
                        <span>قیمت</span>
                    </div>
                    <div class="bg-inner-bg rounded-r-2xl rounded-l-sm flex grow min-h-12 w-full items-center pr-4">
                        <span>توضیحات</span>
                    </div>
                    <div class="bg-inner-bg rounded-r-2xl rounded-l-sm h-12 w-full flex pr-4 items-center">
                        <span>دسته بندی</span>
                    </div>
                    <div class="bg-inner-bg rounded-r-2xl rounded-l-sm h-12 w-full flex pr-4 items-center">
                        <span>رتبه</span>
                    </div>
                    <div class="bg-inner-bg rounded-r-2xl rounded-l-sm h-12 w-full flex pr-4 items-center">
                        <span>تعداد</span>
                    </div>
                </div>

                <div class="flex flex-col gap-y-3 grow">
                    <div class="bg-inner-bg rounded-l-2xl rounded-r-sm h-12 w-full flex pr-4 items-center">
                        <span>{{ product.price }}$</span>
                    </div>
                    <div class="bg-inner-bg rounded-l-2xl rounded-r-sm flex grow min-h-12 w-full items-center pr-4">
                        <span>{{ product.description }}</span>
                    </div>
                    <div class="bg-inner-bg rounded-l-2xl rounded-r-sm h-12 w-full flex pr-4 items-center">
                        <span>{{ product.category }}</span>
                    </div>
                    <div class="bg-inner-bg rounded-l-2xl rounded-r-sm h-12 w-full flex pr-4 items-center">
                        <span>-</span>
                    </div>
                    <div class="bg-inner-bg rounded-l-2xl rounded-r-sm h-12 w-full flex pr-4 items-center">
                        <span>-</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="flex justify-center items-center">
        <span class="loading loading-infinity text-accent-og size-14"></span>
    </div>
</template>