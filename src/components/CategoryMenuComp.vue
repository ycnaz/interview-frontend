<script setup>
import { useProductStore } from '@/stores/productStore'
import { ref } from 'vue'

const categoryMenuOpen = ref(true)
const productStore = useProductStore()

const toggleCategoryMenu = () => {
    categoryMenuOpen.value = !categoryMenuOpen.value
}
</script>

<template>
    <div @click="toggleCategoryMenu"
        :class="['flex flex-col gap-y-5 w-full rounded-3xl p-4 shadow-sm bg-white overflow-hidden select-none transition-all', categoryMenuOpen ? 'h-54' : 'h-12']">
        <div class="flex items-center justify-between">
            <span class="text-thirteen text-text-gray">دسته بندی</span>
            <img loading="lazy" alt="Arrow" src="../assets/svg/arrow-left-s-line.svg"
                :class="['select-none transition-all', categoryMenuOpen ? '-rotate-90' : 'rotate-90']">
        </div>
        <form v-if="categoryMenuOpen" @submit.prevent
            class="flex flex-col gap-y-4 text-twelve text-unselected-radio-text" @click.stop>
            <div v-for="category in productStore.allCategories" :key="category.category" class="flex gap-x-2">
                <input :id="category.category" type="checkbox" name="category" :value="category.category"
                    v-model="productStore.selectedCategories"
                    class="form-checkbox rounded-sm text-accent-og focus:ring-accent-og border-[1.5px] border-radio-checkbox-border">
                <label :for="category.category">{{ category.category }}</label>
                <div
                    :class="['flex justify-center items-center mr-auto rounded-md size-6 transition-all', productStore.selectedCategories.includes(category.category) ? 'bg-accent-og' : 'bg-unselected-category-num']">
                    <span class="text-white">{{ category.count }}</span>
                </div>
            </div>
        </form>
    </div>
</template>