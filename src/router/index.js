import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'MainLayout',
        component: () => import('../views/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'About',
                component: () => import('../views/About.vue')
            },
            {
                path: 'address-search',
                name: 'AddressSearch',
                component: () => import('../views/AddressSearch.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
