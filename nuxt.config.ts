// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/vendors/font-awesome.css',
    '~/assets/css/vendors/slick.css',
    '~/assets/css/vendors/slick-theme.css',    
    '~/assets/css/vendors/animate.css',
    '~/assets/css/vendors/themify-icons.css',
    '~/assets/css/vendors/bootstrap.css',
    '~/assets/css/style.css',
  ],
  app: {
    head: {
      title: 'Nuxt 3 Site',
      meta: [
        { name: 'description', content: 'MY FIRST NUXT3 SITE' }
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Yellowtail&display=swap'},
      ],
      script: [
        { src: 'js/jquery-3.3.1.min.js', tagPosition: 'bodyClose'},
        { src: 'js/menu.js', tagPosition: 'bodyClose'},
        { src: 'js/lazysizes.min.js', tagPosition: 'bodyClose'},
        { src: 'js/slick.js', tagPosition: 'bodyClose'},
        { src: 'js/bootstrap.bundle.min.js', tagPosition: 'bodyClose'},
        { src: 'js/bootstrap-notify.min.js', tagPosition: 'bodyClose'},
        { src: 'js/theme-setting.js', tagPosition: 'bodyClose'},
        { src: 'js/script.js', tagPosition: 'bodyClose'},
      ],
  
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  }
})
