
<template>
  <div class="bg-gray-100">
    <Navigation />
    <section class="pt-12 pb-12 sm:pb-16 lg:pt-8 bg-gray-100">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mx-auto lg:max-w-full lg:items-center">
          <slot />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>


<style >
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup>
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});
</script>