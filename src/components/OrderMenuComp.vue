<script setup>
import { watch } from 'vue'
import { ref } from 'vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()
const emit = defineEmits(['change-order'])

const orderMenuOpen = ref(true)
const sortOrder = ref(null)

const toggleOrderMenu = () => {
    orderMenuOpen.value = !orderMenuOpen.value
}

watch(() => sortOrder.value, (newOrder) => {
    productStore.fetchProducts(null, newOrder)
    emit('change-order', {
        sortOrder
    })
})
</script>

<template>
    <div @click="toggleOrderMenu"
        :class="['flex flex-col gap-y-5 w-full rounded-3xl p-4 shadow-sm bg-white transition-all', orderMenuOpen ? 'h-[200px]' : 'h-12']">
        <div class="flex justify-between items-center">
            <span class="text-[13px] text-text-gray">مرتب سازی</span>
            <img loading="lazy" alt="Arrow" src="../assets/svg/arrow-left-s-line.svg"
                :class="['select-none transition-all', orderMenuOpen ? '-rotate-90' : 'rotate-90']">
        </div>
        <form v-if="orderMenuOpen" @submit.prevent class="flex flex-col gap-y-5 text-[12px] text-unselected-radio-text"
            @click.stop>
            <div class="flex gap-x-2">
                <input id="num-ltm" type="radio" name="order" value="desc"
                    class="form-radio text-accent focus:ring-accent border-[1.5px] border-radio-checkbox-border"
                    v-model="sortOrder">
                <label for="num-ltm">تعداد: کم به زیاد</label>
            </div>
            <div class="flex gap-x-2">
                <input id="num-mtl" type="radio" name="order" value="asc"
                    class="form-radio text-accent focus:ring-accent border-[1.5px] border-radio-checkbox-border"
                    v-model="sortOrder">
                <label for="num-mtl">تعداد: زیاد به کم</label>
            </div>
            <div class="flex gap-x-2">
                <input disabled id="rank-mtl" type="radio" name="order" value="asc23"
                    class="form-radio text-accent focus:ring-accent border-[1.5px] border-radio-checkbox-border"
                    v-model="sortOrder">
                <label for="rank-mtl">رتبه: زیاد به کم</label>
            </div>
            <div class="flex gap-x-2">
                <input disabled id="rank-ltm" type="radio" name="order" value="desc23"
                    class="form-radio text-accent focus:ring-accent border-[1.5px] border-radio-checkbox-border"
                    v-model="sortOrder">
                <label for="rank-ltm">رتبه: کم به زیاد</label>
            </div>
        </form>
    </div>
</template>