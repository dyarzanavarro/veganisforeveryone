<template>
  <div class="py-12">
    <div class="grid grid-cols-3 gap-4">
      <div class="text-center lg:text-left col-span-2">
        <h1
          class="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-4xl font-pj"
        >
          Recommendations
        </h1>
      </div>
      <nuxt-link to="/recipes">
        <div class="text-right col-span-1">
          <h1
            class="text-1xl font-bold leading-tight text-green-500 sm:text-3xl sm:leading-tight lg:leading-tight lg:text-2xl font-pj"
          >
            See all
          </h1>
        </div>
      </nuxt-link>
    </div>
    <ul class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-lg">
      <li>
        <nuxt-link to="/recipes" class="block">
          <nuxt-img
            alt="food1"
            src="/img/food1.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-lg"
          />

          <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Awesome Bowl
          </h3>

          <p class="mt-2 max-w-sm text-gray-400 font-semibold">
            30 min <br />
            by Vanessa
          </p>
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/recipes" class="block">
          <nuxt-img
            alt="food1"
            src="/img/food2.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-lg"
          />

          <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Meditteranean Lunch
          </h3>

          <p class="mt-2 max-w-sm text-gray-400 font-semibold">
            15 min <br />
            by Daniel
          </p>
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/recipes" class="block">
          <nuxt-img
            alt="food3"
            src="/img/food3.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-lg"
          />

          <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Creamy Pasta
          </h3>

          <p class="mt-2 max-w-sm text-gray-400 font-semibold">
            30 min <br />
            by Vanessa S.
          </p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/recipes" class="block">
          <nuxt-img
            alt="food4"
            src="/img/food4.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-lg"
          />

          <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Noodles
          </h3>

          <p class="mt-2 max-w-sm text-gray-400 font-semibold">
            20 min <br />
            by Vanessa S.
          </p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>