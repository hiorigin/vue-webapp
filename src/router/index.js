import App from '../App'

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import Home from '@/components/home/Home'
import Cart from '@/components/cart/Cart'
import Portal from '@/components/portal/Portal'
import Shopping from '@/components/shopping/Shopping'
import User from '@/components/user/User'

import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  path: '/',
  component: App,
  routes: [
    {
      path: '',
      name: 'Home',
      components: {
        default: Home,
        header: Header,
        footer: Footer
      }
      // redirect: '/home'
    },
    {
      path: '/',
      name: 'Home',
      components: {
      	default: Home,
        header: Header,
      	footer: Footer
      }
    },
    {
      path: '/home',
      name: 'Home',
      components: {
      	default: Home,
        header: Header,
      	footer: Footer
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      components: {
        default: Cart,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/portal',
      name: 'Portal',
      components: {
        default: Portal,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/shopping',
      name: 'Shopping',
      components: {
        default: Shopping,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'User',
      components: {
        default: User,
        header: Header,
        footer: Footer
      }
    }
  ]
});
