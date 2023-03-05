// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  app: {
    head: {
      title: 'Vegan is for everyone',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: "Welcome to our vegan recipe blog, where we share easy-to-make, healthy, and delicious plant-based meals for everyone to enjoy. From appetizers to desserts, we've got you covered with creative vegan recipes that are perfect for any occasion.",
          name: 'Vegan is for everyone',
          content: "Welcome to our vegan recipe blog, where we share easy-to-make, healthy, and delicious plant-based meals for everyone to enjoy. From appetizers to desserts, we've got you covered with creative vegan recipes that are perfect for any occasion."
        }
      ],
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
    }
},
    modules: [    '@nuxtjs/tailwindcss',   '@nuxtjs/robots',  '@nuxtjs/web-vitals', '@nuxtjs/supabase', '@nuxt/image-edge'],
    image: {  screens: {      xs: 320,      sm: 640,      md: 768,      lg: 1024,      xl: 1280,      xxl: 1536,      '2xl': 1536    },
    },

    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
      ],
      pages: true,
      compilerOptions: {    "types": ["@nuxt/types", "@nuxt/image"]  }
})
