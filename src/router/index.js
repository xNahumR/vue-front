 import { createRouter, createWebHistory } from 'vue-router'
 import ContentComponent from '../components/ContentComponent.vue'

 const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ContentComponent
        },
        {
            path: '/usuarios',
            name: 'usuarios',
            component: () => import ('../components/ContactoComp.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import ('../components/BlogPublicaciones.vue')
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import ('../components/ContactoComp.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import ('../components/AboutComp.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import ('../components/registerComp.vue')
        }
        ,
        {
            path: '/shop',
            name: 'shop',
            component: () => import ('../components/CartComp.vue')
        }
    ]
 })

 export default router;