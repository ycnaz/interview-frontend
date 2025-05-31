<script setup>
import { ref } from 'vue'

const searchInput = ref('')

const focusInput = () => {
    searchInput.value.focus()
}
</script>

<template>
    <div class="flex flex-col gap-4 w-full h-40 bg-white rounded-3xl text-text-gray p-4 shadow-sm">
        <span class="text-[13px] text-text-gray">فیلتر و جستجو</span>
        <div @click="focusInput"
            class="flex justify-evenly items-center w-full h-10 bg-inner-bg rounded-xl border border-accent p-1.5">
            <img loading="lazy" alt="Filter Input Magnifying Glass SVG" src="../assets/svg/magnifying-glass.svg"
                class="size-4">
            <div class="w-px h-full bg-input-divider"></div>
            <input ref="searchInput" class="focus:outline-0 bg-inner-bg h-full w-auto border-0 focus:ring-0">
            <img loading="lazy" alt="Filter Input Close Button SVG" src="../assets/svg/cross-gray.svg" class="size-2">
        </div>
        <button class="w-full h-10 bg-accent text-white text-xs rounded-xl">جستجو</button>
    </div>
</template>