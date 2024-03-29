import path from 'path';
import fs from 'fs';
import {plugins} from './config/plugins';
import {proxy} from './config/proxy';
// import {i18n} from './locales/i18n-nuxt-config';

module.exports = {
    target: 'static',
    telemetry: false,

    publicRuntimeConfig: {
        proxyUrl: process.env.PROXY_URL,
        backendUrl: process.env.BACKEND_URL,
    },

    render: {
        http2: {
            push: true,
        },
    },

    ssr: false,

    generate: {
        routes: [
            '/shop/premium',
            '/shop/utility',
            '/shop/services',
            '/shop/kits',
            '/shop/free',
            '/shop/appearance',
            '/shop/movement',
            '/shop/pets',
            '/shop/ammunition',
            '/shop/home',
            '/en/shop/premium',
            '/en/shop/utility',
            '/en/shop/services',
            '/en/shop/kits',
            '/en/shop/free',
            '/en/shop/appearance',
            '/en/shop/movement',
            '/en/shop/pets',
            '/en/shop/ammunition',
            '/en/shop/home',
        ]
    },

    // fallback: 'index.html',

    // serverMiddleware: [
    //     '~/middleware/redirects.js'
    // ],

    /**
     * В env добавить 2 переменные HTTPS_KEY и HTTPS_CERT, которые являются путями до сертификатов
     */
    server: process.env.HTTPS_KEY && process.env.HTTPS_CERT ? {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, process.env.HTTPS_KEY)),
            cert: fs.readFileSync(path.resolve(__dirname, process.env.HTTPS_CERT)),
        },
    } : {},

    /**
     * Метатеги, фавиконки и т.п
     * Для генерации фавиконок - https://realfavicongenerator.net/
     */
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: 'Aion Effect',
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Aion Effect',
            },
            /* Favicons */
            {name: 'msapplication-TileColor', content: '#ffffff'},
            {name: 'theme-color', content: '#ffffff'},
            /* Платежная система */
            {
                name: 'enot',
                content: '3231625840560ihRD772kYqAIArfAB3VUaZ-H9GUSh-uH',
            },
        ],
        link: [
            /* Favicons */
            {rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png'},
            {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png'},
            {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png'},
            {rel: 'manifest', href: '/favicons/site.webmanifest'},
            {rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#000000'},
        ],
    },

    /**
     * Кастомизация прогрес бара. Можно передать свой кастомный компонент
     * Подробнее смотри тут https://nuxtjs.org/api/configuration-loading#using-a-custom-loading-component
     * и тут https://nuxtjs.org/examples/custom-loading
     */
    // loading: {color: '#ff2e00'},
    loading: '~/components/layout/ThePreloader',

    /**
     * Подключаем файл с вендорными стилями и файл с общими стилями
     */
    css: ['~/assets/scss/vendors.scss', '~/assets/scss/common.scss'],

    /**
     * Миксины и переменные доступны во всех компонентам и во всех scss файлах
     */
    styleResources: {
        scss: '~/assets/scss/shared/*.scss',
    },

    /**
     * Sentry config
     */
    sentry: {
        dsn: process.env.SENTRY_DSN || false,
    },

    /**
     * Плагины. Вынесены в отдельеный файл
     */
    plugins,

    /**
     * Модули
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/auth-next',
        '@nuxtjs/style-resources',
        'nuxt-polyfill',
        '@nuxtjs/recaptcha',
        '@nuxtjs/i18n',
        ['vue-toastification/nuxt', {
            timeout: 4000,
            draggable: false,
            icon: false,
            hideProgressBar: true,
            transition: 'Vue-Toastification__fade',
        }],
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'EN',
                file: 'en.js',
            },
            {
                code: 'ru',
                iso: 'ru-RU',
                name: 'RU',
                file: 'ru.js',
            },
        ],
        lazy: true,
        langDir: './locales/',
        defaultLocale: 'ru',
        detectBrowserLanguage: {
            alwaysRedirect: true,
            fallbackLocale: 'ru',
            onlyOnRoot: true,
        },
    },


    buildModules: [
        [
            '@nuxtjs/stylelint-module',
            {
                files: ['**/*.scss', '**/*.vue'],
                failOnError: false,
                quiet: false,
            },
        ],
        [
            '@nuxtjs/eslint-module',
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
            },
        ],
    ],

    // Google Recaptcha
    recaptcha: {
        hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
        siteKey: '6Ldp-I4dAAAAAIwrPogeZYxRPFLFjcR9t6GzwIe3', // Site key for requests
        version: 3,
    },

    /**
     * Nuxt Polyfills
     */
    polyfill: {
        features: [
            {
                require: 'intersection-observer',
                detect: () => 'IntersectionObserver' in window,
            },
            {
                require: 'smoothscroll-polyfill',
                detect: () => 'scrollBehavior' in document.documentElement.style &&
                    window.__forceSmoothScrollPolyfill__ !== true,
                install: smoothscroll => smoothscroll.polyfill(),
            },
        ],
    },

    /**
     * В настройках роутера меняет классы для активных ссылок
     */
    router: {
        linkActiveClass: 'is-active',
        linkExactActiveClass: 'is-exact',
        middleware: ['redirects'],
        base: process.env.NODE_ENV !== 'production' ? '/' : '/profile',
        headers: {
            common: {
                Authorization: '',
            },
        },
    },

    auth: {
        redirect: {
            login: false,
            logout: '/login',
            callback: false,
            home: false,
        },
        plugins: ['@/config/plugins/auth-lang-redirect.js'],
        strategies: {
            local: {
                token: {
                    property: 'token',
                    global: true,
                    // required: true,
                    type: '',
                    maxAge: 60 * 60 * 24,
                },
                refreshToken: {
                    property: 'refresh_token',
                    data: 'refresh_token',
                    maxAge: 60 * 60 * 24,
                },
                // user: {
                //     property: 'user',
                //     // autoFetch: true
                // },
                endpoints: {
                    login: {url: process.env.NODE_ENV !== 'production' ? '/user/login' : 'https://apisite.aioneffect.com/user/login', method: 'post'},
                    // login: {url: 'https://apisite.aioneffect.com/user/login', method: 'post'},
                    logout: {url: '/api/auth/logout', method: 'post'},
                    // user: {url: '/api/user/1', method: 'get'}
                    user: false
                }
            }
        }
    },

    /**
     * Модуль прокси решает проблемы с CORS, используется только на локалке
     */
    proxy: proxy(),

    /**
     * Тут можно внести изменения в настройки сборки и webpack
     */
    build: {
        publicPath: '/n/',
        // publicPath: '/',

        // analyze: true,

        /**
         * You can extend webpack config here
         */
        postcss: {
            // Add plugin names as key and arguments as value
            // Install them before as dependencies with npm or yarn
            preset: {
                // Change the postcss-preset-env settings
                autoprefixer: {
                    grid: true,
                },
            },
        },

        // extend(config, ctx) {
        //     // Fixes npm packages that depend on `fs` module
        //     config.node = {
        //         fs: 'empty',
        //     };
        // config.module.rules.push({
        //     test: /\.(graphql|gql)$/,
        //     exclude: /node_modules/,
        //     loader: 'graphql-tag/loader',
        // });
        // },
    },
};
