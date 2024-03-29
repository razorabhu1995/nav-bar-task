import pkg from './package'

export default {
   mode: 'universal',

   /*
   ** Headers of the page
   */
   head: {
      title: pkg.name,
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { hid: 'description', name: 'description', content: pkg.description }
      ],
      link: [
         { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
         { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
      ]
   },

   /*
   ** Customize the progress-bar color
   */
   loading: { color: '#fff' },

   /*
   ** Global CSS
   */
   css: [
      { src: '~/assets/main.css' },
   ],

   /*
   ** Plugins to load before mounting the App
   */
   plugins: [
   ],

   /*
   ** Nuxt.js modules
   */
   modules: [
      'bootstrap-vue/nuxt'
   ],

   /*
   ** Build configuration
   */
   build: {
      /*
      ** You can extend webpack config here
      */
      extend(config, ctx) {
      }
   }
}
