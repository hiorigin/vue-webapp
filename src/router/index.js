import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import Home from '@/pages/home/Home'
import Cart from '@/pages/cart/Cart'
import Portal from '@/pages/portal/Portal'
import Shopping from '@/pages/shopping/Shopping'
import User from '@/pages/user/User'
import Order from '@/pages/user/children/order/Order'

import Search from '@/components/search/Search'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import QuickNav from '@/components/quick/Quick'

Vue.use(Router);
Vue.use(Resource);
Vue.component('search', Search)
Vue.component('quick-nav', QuickNav)

export default new Router({
    // path: '/',
    // component: App,
    routes: [{
            path: '',
            redirect: '/home'
                // component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            components: {
                default: Home,
                search: Search,
                header: Header,
                footer: Footer
            }
        },
        {
            path: '/cart',
            name: 'Cart',
            components: {
                default: Cart
            }
        },
        {
            path: '/order',
            name: 'Order',
            components: {
                default: Order
            }
        },
        {
            path: '/portal',
            name: 'Portal',
            components: {
                default: Portal,
                search: Search,
                footer: Footer
            }
        },
        {
            path: '/shopping',
            name: 'Shopping',
            components: {
                default: Shopping,
                search: Search,
                header: Header,
                footer: Footer
            }
        },
        {
            path: '/user',
            name: 'User',
            components: {
                default: User,
                footer: Footer
            }
        }
    ]
});