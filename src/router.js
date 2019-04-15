import VueRouter from 'vue-router'

import Home from './views/home/home'
import Find from './views/find/find'
import Add from './views/add/add'
import Mine from './views/mine/mine'
import ShopCart from './views/shop-cart/shopCart'

let router = new VueRouter({
  routes: [
    { path: '/', redirect: './home' },
    { path: '/home', component: Home },
    { path: '/find', component: Find },
    { path: '/add', component: Add },
    { path: '/mine', component: Mine },
    { path: '/shop-cart', component: ShopCart },
  ]
})

export default router