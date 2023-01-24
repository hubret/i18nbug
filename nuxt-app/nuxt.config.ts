// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  app:{
    baseURL: '/2023/'
  },
  i18n: {
    strategy: 'prefix',
    baseUrl: '/2023/',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
      },
      {
        code: 'fr',
      }, 
    ],
    vueI18n: {
      legacy: false,
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        }
      }
    }
  }
})
