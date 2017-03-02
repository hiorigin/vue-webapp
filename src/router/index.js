import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import Home from '@/components/home/Home'
import Cart from '@/components/cart/Cart'
import Portal from '@/components/portal/Portal'
import Shopping from '@/components/shopping/Shopping'
import User from '@/components/user/User'

import Search from '@/components/common/search/Search'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'

Vue.use(Router);
Vue.use(Resource);

export default new Router({
    // path: '/',
    // component: App,
    routes: [
        {
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
                default: Cart,
                footer: Footer
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
