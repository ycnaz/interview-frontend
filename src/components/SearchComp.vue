<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

const searchInput = ref('')
const query = ref('')

const focusInput = () => {
    searchInput.value.focus()
}

const addQuery = () => {
    if (query.value.trim()) {
        productStore.setQuery(query.value)
        query.value = ''
    }
}
</script>

<template>
    <form @submit.prevent="addQuery"
        class="flex flex-col gap-4 w-full h-40 bg-white rounded-3xl text-text-gray p-4 shadow-sm">
        <span class="text-thirteen text-text-gray">فیلتر و جستجو</span>
        <div @click.stop="focusInput"
            class="flex justify-evenly items-center w-full h-10 bg-inner-bg rounded-xl border border-accent-og p-1.5">
            <img loading="lazy" alt="Filter Input Magnifying Glass SVG" src="../assets/svg/magnifying-glass.svg"
                class="size-4">
            <div class="w-px h-full bg-input-divider"></div>
            <label for="query" class="sr-only">search</label>
            <input ref="searchInput" v-model="query" id="query" type="search" placeholder="جستجو..."
                class="focus:outline-0 bg-inner-bg h-full w-auto border-0 focus:ring-0">
            <img @click.stop="query = ''" loading="lazy" alt="Filter Input Close Button SVG"
                src="../assets/svg/cross-gray.svg" class="size-2">
        </div>
        <button type="submit" class="w-full h-10 bg-accent-og text-white text-xs rounded-xl">جستجو</button>
    </form>
</template>