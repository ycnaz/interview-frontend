<script setup>
import { ref } from 'vue'

const inStockSelector = ref(true)

const toggleInStockSelector = () => {
    inStockSelector.value = !inStockSelector.value
}
</script>

<template>
    <div class="flex items-center justify-between w-full h-12 bg-white rounded-3xl p-4 shadow-sm">
        <span class="text-fourteen text-text-gray ">درب‌های موجود</span>
        <div @click="toggleInStockSelector"
            :class="['relative my-auto h-4 w-8 rounded-md p-0.5 transition-all', inStockSelector ? 'bg-accent-og' : 'bg-text-gray']">
            <div
                :class="['absolute flex justify-center items-center top-1/2 transform -translate-y-1/2 bg-white select-none rounded-[5px] size-3 border border-selector-border transition-all', inStockSelector ? 'translate-x-0' : '-translate-x-4']">
                <img loading="lazy" alt="Dots in the Selector" src="../assets/svg/dots-in-selector.svg"
                    class="size-1.5">
            </div>
        </div>
    </div>
</template>