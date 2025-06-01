<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from './stores/productStore';

const productStore = useProductStore()

onMounted(() => productStore.fetchProducts())
</script>

<template>
  <header class="w-full h-[120px] bg-white rounded-b-4xl">
    <nav class="grid grid-cols-3 text-thirteen h-full">
      <div></div>
      <div class="flex justify-self-center self-center gap-x-10">
        <div class="flex gap-x-2 min-w-max">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-category-2.svg">
          <RouterLink to="#">لیست محصولات</RouterLink>
        </div>
        <div class="flex gap-x-2 min-w-max">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-book.svg">
          <RouterLink to="#">دریافت مشاوره</RouterLink>
        </div>
        <div class="flex gap-x-2 min-w-max">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-message-question.svg">
          <RouterLink to="#">سوالات متداول</RouterLink>
        </div>
        <div class="relative flex gap-x-2 text-accent-og min-w-max">
          <img loading="lazy" alt="Nav link SVGs" src="./assets/svg/navbar-fi_phone-call.svg">
          <RouterLink to="#"
            class="after:absolute after:size-1 after:rounded-full after:bg-accent-og after:-bottom-3 after:left-1/2">
            تماس
            با ما</RouterLink>
        </div>
      </div>
      <div class="justify-self-center self-center">
        <button
          class="flex gap-x-3 justify-center text-fourteen rounded-2xl bg-accent-og py-3 px-4 w-[107px] text-white">
          <span>تماس</span>
          <img loading="lazy" alt="Navbar Phone SVG" src="./assets/svg/navbar-phone.svg">
        </button>
      </div>
    </nav>
  </header>

  <main class="mx-auto mt-6 max-w-[1112px] max-[1028px]:max-w-[868px] min-h-dvh">
    <RouterView />
  </main>

  <footer
    class="relative bottom-0 left-0 flex flex-col rounded-t-2xl shadow-sm bg-white w-full h-[416px] mt-6 leading-6">
    <div class="grid grid-cols-3 w-full h-full">
      <div class="self-end justify-self-center pb-14">
        <span class="text-thirteen leading-6 text-text-gray">هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو
          هستیم</span>
      </div>

      <div class="col-span-2 grid grid-cols-3 mt-10">
        <div class="flex flex-col gap-y-6">
          <h6 class="text-footer-h-text text-xl">دسترسی سریع</h6>
          <div class="flex flex-col gap-y-3 text-footer-s-text text-thirteen">
            <span class="text-accent-og">درباره ما</span>
            <span>بلاگ</span>
            <span>تماس با ما</span>
            <span>خدمات پس از فروش</span>
          </div>
        </div>
        <div class="flex flex-col gap-y-6">
          <h6 class="text-footer-h-text text-xl">راهنمای سایت</h6>
          <div class="flex flex-col gap-y-3 text-footer-s-text text-thirteen">
            <span>قوانین و مقررات</span>
            <span>دریافت مشاوره</span>
            <span>انتقادات و پیشنهادات</span>
          </div>
        </div>
        <div class="flex flex-col gap-y-6">
          <h6 class="text-footer-h-text text-xl">شبکه‌های اجتماعی</h6>
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

    <div class="grid grid-cols-3 items-center h-[152px] w-full shrink-0 bg-footer mt-auto">
      <div></div>

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
