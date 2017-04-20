import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource';

import Home from '@/views/home/Home'
import Portal from '@/views/portal/Portal'
import Cart from '@/views/cart/Cart'
import Shopping from '@/views/shopping/Shopping'
import User from '@/views/user/User'

import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import Quick from '@/components/Quick'

Vue.use(Router)
Vue.use(Resource)

Vue.component('banner', Banner)
Vue.component('navbar', Navbar)
Vue.component('quick', Quick)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/portal',
            name: 'Portal',
            component: Portal
        },
        {
            path: '/shopping',
            name: 'Shopping',
            component: Shopping
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
