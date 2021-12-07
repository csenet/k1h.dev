export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    ssr: false,
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
            charset: 'utf-8'
        },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || 'K1h\'s Portfolio'
            },
            {hid: 'og-site-name', property: 'og:site_name', content: 'Kouichi Hirachi'},
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        },],
        script: [{
            src: 'https://kit.fontawesome.com/b486939b4d.js'
        }]
    },
    /*
     ** Global CSS
     */
    css: ['github-markdown-css', '~/assets/css/main.css'],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [{
        src: '~/plugins/vue-lazyload.js',
        ssr: false
    },
        {src: '~/plugins/gtag.js'},
        { src: '~/plugins/main.js'}
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        '@nuxtjs/markdownit',
        'nuxt-webfontloader',
        '@nuxtjs/pwa',
        '@nuxtjs/sitemap'
    ],
    /*
     ** Web Font Loader
     */
    webfontloader: {
        google: {
            families: ['Ubuntu']
        }
    },
    markdownit: {
        injected: true
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        extend(config, ctx) {
            config.node = {
                fs: "empty"
            }
        },
        // analyze: true,
        babel: {
            compact: true
        },
        hardSource: true
    },
    sitemap: {
        path: '/sitemap.xml',
        hostname: 'http://k1h.works',
        cacheTime: 1000 * 60 * 15,
        gzip: true
    }
}
