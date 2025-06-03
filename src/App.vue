<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from './stores/productStore';

const productStore = useProductStore()

const burgerOpen = ref(false)

const toggleHamburger = () => {
  burgerOpen.value = !burgerOpen.value
}

const closeBurger = () => {
  burgerOpen.value = false
}

onMounted(() => productStore.fetchProducts())
</script>

<template>
  <header class="w-full h-[120px] bg-white rounded-b-4xl max-xs:h-[72px]">
    <nav
      class="xs:grid xs:grid-cols-3 text-thirteen h-full max-xs:px-4 max-xs:flex max-xs:justify-between max-xs:items-center max-xs:relative">

      <div class="max-xs:hidden"></div>

      <div
        :class="['flex justify-self-center self-center gap-x-10 max-xs:absolute max-xs:top-5 max-xs:z-10 max-xs:bg-accent-og max-xs:h-dvh max-xs:w-full max-xs:pt-20 max-xs:text-2xl max-xs:gap-y-5 max-xs:flex-col max-xs:items-center transition-all', burgerOpen ? 'max-xs:right-0' : 'max-xs:-right-96']">

        <div @click="closeBurger" class="flex gap-x-2 min-w-max">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-category-2.svg">
          <RouterLink :to="{ name: 'products' }">لیست محصولات</RouterLink>
        </div>

        <div @click="closeBurger" class="flex gap-x-2 min-w-max">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-book.svg">
          <RouterLink to="#">دریافت مشاوره</RouterLink>
        </div>

        <div @click="closeBurger" class="flex gap-x-2 min-w-max">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-message-question.svg">
          <RouterLink to="#">سوالات متداول</RouterLink>
        </div>

        <div @click="closeBurger"
          class="relative flex gap-x-2 text-accent-og min-w-max max-xs:bg-white max-xs:px-4 max-xs:py-3 max-xs:rounded-xl">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-fi_phone-call.svg">
          <RouterLink to="#"
            class="after:absolute after:size-1 after:rounded-full after:bg-accent-og after:-bottom-3 after:left-1/2">
            تماس
            با ما</RouterLink>
        </div>

      </div>

      <div class="justify-self-center self-center max-xs:hidden">
        <button
          class="flex gap-x-3 justify-center text-fourteen rounded-2xl bg-accent-og py-3 px-4 w-[107px] text-white">
          <span>تماس</span>
          <img loading="lazy" alt="Navbar Phone SVG" src="./assets/svg/navbar-phone.svg">
        </button>
      </div>

      <div @click="toggleHamburger"
        :class="['flex justify-center items-center size-10 rounded-lg border border-accent-og cursor-pointer xs:hidden', { 'fixed top-4 -right-4 z-20 border-white': burgerOpen }]">
        <div class="flex flex-col items-center justify-center gap-y-[3px] size-4">
          <div
            :class="['w-full h-px rounded-lg bg-accent-og transition-all', burgerOpen ? 'rotate-45 translate-y-0.5 bg-white' : '']">
          </div>
          <div :class="['w-full h-px rounded-lg bg-accent-og transition-all', burgerOpen ? 'hidden bg-white' : '']">
          </div>
          <div
            :class="['w-full h-px rounded-lg bg-accent-og transition-all', burgerOpen ? '-rotate-45 -translate-y-0.5 bg-white' : '']">
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center size-10 rounded-lg border border-accent-og mr-auto xs:hidden">
        <img loading="lazy" alt="Navbar Phone SVG" src="./assets/svg/xs-navbar-phone.svg">
      </div>
    </nav>
  </header>

  <main class="mx-auto mt-6 max-w-[1112px] max-[1028px]:max-w-[868px] max-xs:w-11/12 min-h-dvh">
    <RouterView />
  </main>

  <footer
    class="relative bottom-0 left-0 flex flex-col rounded-t-2xl shadow-sm bg-white w-full h-[416px] mt-6 leading-6 max-xs:h-[846px]">
    <div class="grid grid-cols-3 w-full h-full max-xs:grid-cols-2 max-xs:px-6 max-xs:gap-x-4">
      <div class="self-end justify-self-center pb-14 max-xs:hidden">
        <span class="text-thirteen leading-6 text-text-gray">هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو
          هستیم</span>
      </div>

      <div
        class="col-span-2 grid grid-cols-3 mt-10 max-xs:flex max-xs:flex-wrap max-xs:mt-40 max-xs:mb-10 max-xs:justify-between">
        <div class="flex flex-col gap-y-6">
          <h3 class="text-footer-h-text text-xl">دسترسی سریع</h3>
          <div class="flex flex-col gap-y-3 text-footer-s-text text-thirteen">
            <span class="text-accent-og">درباره ما</span>
            <span>بلاگ</span>
            <span>تماس با ما</span>
            <span>خدمات پس از فروش</span>
          </div>
        </div>
        <div class="flex flex-col gap-y-6">
          <h3 class="text-footer-h-text text-xl">راهنمای سایت</h3>
          <div class="flex flex-col gap-y-3 text-footer-s-text text-thirteen">
            <span>قوانین و مقررات</span>
            <span>دریافت مشاوره</span>
            <span>انتقادات و پیشنهادات</span>
          </div>
        </div>
        <div class="flex flex-col gap-y-6">
          <h3 class="text-footer-h-text text-xl">شبکه‌های اجتماعی</h3>
          <div class="flex flex-col gap-y-4 text-footer-s-text text-thirteen">
            <div class="flex gap-x-3">
              <img loading="lazy" alt="Telegram SVG" src="./assets/svg/telegram.svg">
              <span>تلگرام</span>
            </div>
            <div class="flex gap-x-3">
              <img loading="lazy" alt="Instagram SVG" src="./assets/svg/instagram.svg">
              <span>اینستاگرام</span>
            </div>
            <div class="flex gap-x-3">
              <img loading="lazy" alt="Linkedin SVG" src="./assets/svg/linkedin.svg">
              <span>لینکدین</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-3 items-center h-[152px] w-full shrink-0 bg-footer mt-auto max-xs:flex max-xs:flex-col max-xs:h-[243px] max-xs:gap-y-4 max-xs:justify-center max-xs:px-3">
      <div class="max-xs:hidden"></div>

      <div class="flex flex-col items-center gap-y-4">
        <p class="text-thirteen text-text-gray text-center">تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر
          گونه کپی
          برداری
          پیگرد قانونی
          دارد.</p>
        <div class="flex gap-x-4">
          <img loading="lazy" alt="LinkedIn SVG" src="./assets/svg/linkedin-red.svg">
          <img loading="lazy" alt="YouTube SVG" src="./assets/svg/youtube-red.svg">
          <img loading="lazy" alt="Twitter SVG" src="./assets/svg/twitter-red.svg">
          <img loading="lazy" alt="Instagram SVG" src="./assets/svg/instagram-red.svg">
          <img loading="lazy" alt="Telegram SVG" src="./assets/svg/telegram-red.svg">
        </div>
      </div>

      <div class="flex justify-center items-center gap-x-4">
        <img loading="lazy" alt="Footer certificate 1" src="./assets/svg/footer-certificate-1.svg">
        <img loading="lazy" alt="Footer certificate 2" src="./assets/svg/footer-certificate-2.svg">
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
