import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/IndexV1.vue'),
        redirect: 'index',
        children: [{
                path: 'index',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../components/index.vue')
            },
            {
                path: 'aboutHX',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../components/aboutHX.vue')
            },
            {
                path: 'product',
                name: 'product',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../components/product.vue')
            },
            {
                path: 'addHX',
                name: 'addHX',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../components/addHX.vue')
            },
            {
                path: 'concatOus',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../components/concatOus.vue')
            },
            {
                path: 'news',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../components/news.vue')
            },
            {
                path: 'editor',
                name: 'editor',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../components/Editor/index.vue')
            },
            {
                path: 'showNewsList',
                name: 'showNewsList',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../components/showNewsList/ShowNewsList.vue')
            },
        ]
    },
    {
        path: '*',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/test.vue')
    }
]

const router = new VueRouter({
    linkActiveClass: 'active1',
    base: process.env.BASE_URL,
    routes
})

export default router