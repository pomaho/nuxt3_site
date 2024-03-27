// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt 3 Site',
      meta: [
        { name: 'description', content: 'MY FIRST NUXT3 SITE' }
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  }
})
