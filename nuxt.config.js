const pkg = require('./package')
// require('dotenv')

module.exports = {
  mode: 'spa',
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
      // { rel: 'stylesheet', href: '/spectre.min.css' },
      // { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css' },
      // { rel: 'stylesheet', href: '/spectre-icons.min.css' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:300i|Source+Sans+Pro&display=swap' }
    ] 
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#262626' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/style.scss',
    // '@/assets/css/spectre.min.css',
    // '@/assets/css/spectre-icons.min.css'
  ],
  /**
   * Router configuration
   */
  router: {
    middleware: ['auth'],
    base: '/'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuescroll'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  
  auth: {
    // Options
    redirect: {
      login: '/login',
      logout: '/',
      home: '/dashboard'
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        secure: true
      }
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token.accessToken' },
          user: { url: '/auth/user', method: 'get', propertyName: 'user' },
          logout: { url: '/auth/logout', method: 'post' },
          // medlem: { url: '/auth/medlem', method: 'get', propertyName: 'medlem' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    },
    rewriteRedirects: true,
    fullPathRedirect: false
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    responseType: 'json'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
