<script setup>
import { ref } from 'vue';

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const isImgLoading = ref(true)

const imgLoaded = () => {
    isImgLoading.value = false
}
</script>

<template>
    <div class="flex flex-col justify-between shadow-sm bg-white h-[286px] rounded-3xl p-2">
        <div class="flex justify-center items-center h-[170px] w-full rounded-2xl">
            <img loading="lazy" alt="Product Image" :src="props.product.image" @load="imgLoaded"
                :class="['object-contain w-full h-full', isImgLoading ? 'scale-0 absolute' : 'scale-100']">
            <span v-if="isImgLoading" class="loading loading-spinner text-accent-og"></span>
        </div>
        <p dir="ltr" class="line-clamp-1 text-text text-fourteen mx-[4.33px]">{{ props.product.title }}</p>
        <RouterLink :to="{ name: 'product', params: { id: props.product.id } }"
            class="flex gap-x-2 justify-center text-accent-og border-[1.5px] border-main rounded-2xl py-3 px-4 mx-[4.33px]">
            <span class="min-w-max">مشاهده جزیات</span>
            <img loading="lazy" alt="Arrow in card buttons" src="../assets/svg/arrow-accent.svg">
        </RouterLink>
    </div>
</template>