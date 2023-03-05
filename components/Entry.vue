<template>
  <div>
    <div>
      <div class="text-center lg:text-left">
        <h1
          class="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj"
        >
          What would you like to cook today?
        </h1>

        <div class="py-12 relative mx-auto">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-6 pl-10 text-sm border border-transparent rounded-lg"
                placeholder="Search any recipes"
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Categories />
    <Recommendation />
  </div>
</template>

<script>
import Categories from "./Categories.vue";

export default {};
</script>

<style>
</style>