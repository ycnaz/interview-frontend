<script setup>
import { useProductStore } from '@/stores/productStore';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const productStore = useProductStore()
const route = useRoute()

const product = ref(null)
const isImgLoading = ref(true)

const imgLoaded = () => {
    isImgLoading.value = false
}

onMounted(async () => {
    await productStore.fetchProducts()
    product.value = productStore.getProductById(route.params.id)
    console.log(product.value)
})
</script>

<template>
    <div v-if="product" class="flex flex-col w-full gap-y-6">
        <div class="breadcrumbs text-fourteen text-breadcrumb">
            <ul>
                <li><img loading="lazy" alt="Breadcrumb Home SVG" src="../assets/svg/home.svg"></li>
                <li>
                    <RouterLink :to="{ name: 'products' }">لیست محصولات</RouterLink>
                </li>
                <li><span>{{ product.title }}</span></li>
            </ul>
        </div>
        <div class="flex flex-col justify-between h-[414px] w-full bg-white rounded-3xl shadow-sm p-6 max-xs:h-[331px]">
            <h2 class="leading-6 text-lg text-text">{{ product.title }}</h2>
            <div class="flex justify-center items-center relative w-full h-[310px] rounded-2xl max-xs:h-[235px]">
                <img loading="lazy" alt="Product Image" :src="product.image"
                    :class="['object-contain w-full h-full', isImgLoading ? 'scale-0 absolute' : 'scale-100']"
                    @load="imgLoaded">
                <span v-if="isImgLoading" class="loading loading-spinner text-accent-og"></span>
                <div
                    class="absolute top-0 right-0 flex items-center justify-center rounded-[13px] bg-black opacity-50 size-10">
                    <img loading="lazy" alt="Zoom In Button" src="../assets/svg/search-zoom-in.svg" class="">
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-between h-[474px] w-full bg-white rounded-3xl shadow-sm p-6 max-xs:h-auto">
            <h2 class="text-text font-bold leading-6">مشخصات فنی</h2>
            <div class="flex gap-x-3 h-full max-h-[386px] w-full max-xs:max-h-min">
                <div class="flex flex-col w-full h-full gap-y-3 text-fourteen text-product-page-label">
                    <div class="flex xs:gap-x-3 max-xs:flex-col max-xs:gap-y-3">
                        <div
                            class="bg-inner-bg rounded-r-2xl rounded-l-sm h-12 w-full flex pr-4 items-center xs:max-w-[172px] max-xs:rounded-2xl">
                            <span>قیمت</span>
                        </div>

                        <div
                            class="bg-inner-bg rounded-l-2xl rounded-r-sm h-12 w-full flex px-4 items-center max-xs:rounded-2xl">
                            <span>{{ product.price }}$</span>
                        </div>
                    </div>

                    <div class="flex xs:gap-x-3 xs:min-h-[146px] max-xs:flex-col max-xs:gap-y-3">
                        <div
                            class="bg-inner-bg rounded-r-2xl rounded-l-sm flex grow min-h-12 w-full items-center xs:max-w-[172px] pr-4 max-xs:rounded-2xl">
                            <span>توضیحات</span>
                        </div>

                        <div
                            class="bg-inner-bg rounded-l-2xl rounded-r-sm flex grow min-h-12 w-full items-center p-4 max-xs:rounded-2xl">
                            <span>{{ product.description }}</span>
                        </div>
                    </div>

                    <div class="flex xs:gap-x-3 max-xs:flex-col max-xs:gap-y-3">
                        <div
                            class="bg-inner-bg rounded-r-2xl rounded-l-sm h-12 w-full flex pr-4 items-center xs:max-w-[172px] max-xs:rounded-2xl">
                            <span>دسته بندی</span>
                        </div>

                        <div
                            class="bg-inner-bg rounded-l-2xl rounded-r-sm h-12 w-full flex px-4 items-center max-xs:rounded-2xl">
                            <span>{{ product.category }}</span>
                        </div>
                    </div>

                    <div class="flex xs:gap-x-3 max-xs:flex-col max-xs:gap-y-3">
                        <div
                            class="bg-inner-bg rounded-r-2xl rounded-l-sm h-12 w-full flex pr-4 items-center xs:max-w-[172px] max-xs:rounded-2xl">
                            <span>رتبه</span>
                        </div>

                        <div
                            class="bg-inner-bg rounded-l-2xl rounded-r-sm h-12 w-full flex px-4 items-center max-xs:rounded-2xl">
                            <span>-</span>
                        </div>
                    </div>

                    <div class="flex xs:gap-x-3 max-xs:flex-col max-xs:gap-y-3">
                        <div
                            class="bg-inner-bg rounded-r-2xl rounded-l-sm h-12 w-full flex pr-4 items-center xs:max-w-[172px] max-xs:rounded-2xl">
                            <span>تعداد</span>
                        </div>

                        <div
                            class="bg-inner-bg rounded-l-2xl rounded-r-sm h-12 w-full flex px-4 items-center max-xs:rounded-2xl">
                            <span>-</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div v-else class="flex justify-center items-center">
        <span class="loading loading-infinity text-accent-og size-14"></span>
    </div>
</template>