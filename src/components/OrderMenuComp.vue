<script setup>
import { watch } from 'vue'
import { ref } from 'vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

const sortingOrders = ref([
    { text: 'تعداد: کم به زیاد', id: 'num-ltm', value: 'desc', disabled: false },
    { text: 'تعداد: زیاد به کم', id: 'num-mtl', value: 'asc', disabled: false },
    { text: 'رتبه: زیاد به کم', id: 'rank-mtl', value: '2', disabled: true },
    { text: 'رتبه: کم به زیاد', id: 'rank-ltm', value: '1', disabled: true },
])

const orderMenuOpen = ref(true)

const toggleOrderMenu = () => {
    orderMenuOpen.value = !orderMenuOpen.value
}

watch(() => productStore.selectedOrder, (newOrder) => {
    productStore.fetchProducts(null, newOrder)
})
</script>

<template>
    <div @click="toggleOrderMenu"
        :class="['flex flex-col gap-y-5 w-full rounded-3xl p-4 shadow-sm bg-white transition-all', orderMenuOpen ? 'h-[200px]' : 'h-12']">
        <div class="flex justify-between items-center">
            <span class="text-thirteen text-text-gray">مرتب سازی</span>
            <img loading="lazy" alt="Arrow" src="../assets/svg/arrow-left-s-line.svg"
                :class="['select-none transition-all', orderMenuOpen ? '-rotate-90' : 'rotate-90']">
        </div>
        <form v-if="orderMenuOpen" @submit.prevent class="flex flex-col gap-y-5 text-twelve text-unselected-radio-text"
            @click.stop>
            <div v-for="order in sortingOrders" :key="order" class="flex gap-x-2">
                <input :id="order.id" type="radio" name="order" :value="order.value" :disabled="order.disabled"
                    class="form-radio text-accent-og focus:ring-accent-og border-[1.5px] border-radio-checkbox-border"
                    v-model="productStore.selectedOrder">
                <label :for="order.id">{{ order.text }}</label>
            </div>
        </form>
    </div>
</template>