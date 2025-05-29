<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full h-[120px] bg-white rounded-b-4xl">
    <nav class="grid grid-cols-3 text-[13px] h-full">
      <div></div>
      <div class="flex justify-self-center self-center gap-x-10">
        <div class="flex gap-x-2">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-category-2.svg">
          <RouterLink to="#">لیست محصولات</RouterLink>
        </div>
        <div class="flex gap-x-2">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-book.svg">
          <RouterLink to="#">دریافت مشاوره</RouterLink>
        </div>
        <div class="flex gap-x-2">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-message-question.svg">
          <RouterLink to="#">سوالات متداول</RouterLink>
        </div>
        <div class="relative flex gap-x-2 text-accent">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-fi_phone-call.svg">
          <RouterLink to="#"
            class="after:absolute after:size-1 after:rounded-full after:bg-accent after:-bottom-3 after:left-1/2">
            تماس
            با ما</RouterLink>
        </div>
      </div>
      <div class="justify-self-center self-center">
        <button class="flex gap-x-3 justify-center text-[14px] rounded-2xl bg-accent py-3 px-4 w-[107px] text-white">
          <span>تماس</span>
          <img loading="lazy" alt="Navbar Phone SVG" src="./assets/svg/navbar-phone.svg">
        </button>
      </div>
    </nav>
  </header>

  <main class="mx-auto mt-6 max-w-[1112px] min-h-dvh">
    <RouterView />
  </main>

  <footer>

  </footer>
</template>

<style scoped></style>
