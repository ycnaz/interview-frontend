<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    info: {
        type: String || Number,
        required: true,
    }
})
</script>

<template>
    <div
        :class="['flex xs:gap-x-3 max-xs:flex-col max-xs:gap-y-3', props.title == 'توضیحات' ? 'xs:min-h-[146px]' : '']">
        <div
            :class="['bg-inner-bg rounded-r-2xl rounded-l-sm w-full flex pr-4 items-center xs:max-w-[172px] max-xs:rounded-2xl', props.title == 'توضیحات' ? 'grow min-h-12' : 'h-12']">
            <span>{{ props.title }}</span>
        </div>

        <div
            :class="['bg-inner-bg rounded-l-2xl rounded-r-sm w-full flex px-4 items-center max-xs:rounded-2xl', props.title == 'توضیحات' ? 'grow min-h-12 p-4' : 'h-12']">
            <span>{{ props.info }}</span>
        </div>
    </div>
</template>