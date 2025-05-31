<script setup>
import { useProductStore } from '@/stores/productStore'
import { defineEmits } from 'vue'
import { ref } from 'vue'

const categoryMenuOpen = ref(true)
const productStore = useProductStore()

const emit = defineEmits(['category-change']);

const toggleCategoryMenu = () => {
    categoryMenuOpen.value = !categoryMenuOpen.value
}

const handleCheckboxChange = (event, category) => {
    emit('category-change', {
        category,
        checked: event.target.checked,
    });
}
</script>

<template>
    <div @click="toggleCategoryMenu"
        :class="['flex flex-col gap-y-5 w-full rounded-3xl p-4 shadow-sm bg-white overflow-hidden transition-all', categoryMenuOpen ? 'h-48' : 'h-12']">
        <div class="flex items-center justify-between">
            <span class="text-[13px] text-text-gray">دسته بندی</span>
            <img loading="lazy" alt="Arrow" src="../assets/svg/arrow-left-s-line.svg"
                :class="['select-none transition-all', categoryMenuOpen ? '-rotate-90' : 'rotate-90']">
        </div>
        <form v-if="categoryMenuOpen" @submit.prevent
            class="flex flex-col gap-y-4 text-[12px] text-unselected-radio-text" @click.stop>
            <div v-for="category in productStore.allCategories" :key="category" class="flex gap-x-2">
                <input :id="category" type="checkbox" name="category" :value="category"
                    class="form-checkbox rounded-sm text-accent focus:ring-accent border-[1.5px] border-radio-checkbox-border"
                    @change="handleCheckboxChange($event, category)">
                <label :for="category">{{ category }}</label>
            </div>
        </form>
    </div>
</template>