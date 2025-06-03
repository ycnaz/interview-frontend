<script setup>
import { useProductStore } from '@/stores/productStore';
import InfoPillsComp from '@/components/InfoPillsComp.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const productStore = useProductStore()
const route = useRoute()

const product = ref(null)
const isImgLoading = ref(true)

const info = ref([])

const imgLoaded = () => {
    isImgLoading.value = false
}

onMounted(async () => {
    await productStore.fetchProducts()
    product.value = productStore.getProductById(route.params.id)
    info.value = [
        { id: 1, title: 'قیمت', info: product.value.title },
        { id: 2, title: 'توضیحات', info: product.value.description },
        { id: 3, title: 'دسته بندی', info: product.value.category },
        { id: 4, title: 'رتبه', info: '-' },
        { id: 5, title: 'تعداد', info: '-' },
    ]
})
</script>

<template>
    <div v-if="product" class="flex flex-col w-full gap-y-6">
        <div class="flex gap-x-2 h-8 items-center overflow-x-auto overflow-y-hidden text-fourteen text-breadcrumb">
            <img loading="lazy" alt="Breadcrumb Home SVG" src="../assets/svg/home.svg">
            <img loading="lazy" alt="Breadcrumb Arrow SVG" src="../assets/svg/arrow-left-s-line.svg">
            <RouterLink class="min-w-max" :to="{ name: 'products' }">لیست محصولات</RouterLink>
            <img loading="lazy" alt="Breadcrumb Arrow SVG" src="../assets/svg/arrow-left-s-line.svg">
            <span class="min-w-max">{{ product.title }}</span>
        </div>

        <div
            class="flex flex-col justify-between h-[414px] w-full bg-white rounded-3xl shadow-sm p-6 max-xs:max-h-min max-xs:justify-start">
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

                    <InfoPillsComp v-for="i in info" :key="i.id" :title="i.title" :info="i.info" />

                </div>
            </div>
        </div>
    </div>
    <div v-else class="flex justify-center items-center">
        <span class="loading loading-infinity text-accent-og size-14"></span>
    </div>
</template>