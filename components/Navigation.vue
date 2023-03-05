<template>
  <div>
    <div class="bg-gray-100">
      <div class="py-4 md:py-6">
        <div class="container px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <div class="flex-shrink-0">
              <nuxt-link
                to="/"
                title=""
                class="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <nuxt-img src="/img/veganFood48.png" />
              </nuxt-link>
            </div>

            <div class="flex lg:hidden">
              <button type="button" class="text-gray-900">
                <svg
                  class="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              class="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16"
            >
              <nuxt-link
                to="/vegan"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Why vegan?
              </nuxt-link>

              <nuxt-link
                to="/recipes"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Recipes!
              </nuxt-link>

              <nuxt-link
                to="/meals"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Meal planning
              </nuxt-link>

              <nuxt-link
                to="/about"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                About
              </nuxt-link>
            </div>

            <div
              class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10"
            >
              <nuxt-link
                to="/signin"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Sign in
              </nuxt-link>

              <nuxt-link
                to="/signup"
                title=""
                class="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Create free account
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>