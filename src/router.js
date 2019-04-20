import VueRouter from 'vue-router'

import Home from './views/home/home'
import DetailGoods from './views/home/detailGoods'
import Find from './views/find/find'
import Add from './views/add/add'
import Mine from './views/mine/mine'
import ShopCart from './views/shop-cart/shopCart'

// components
import GoodsShow from './components/main/GoodsShow'
import Article from './components/main/Article'

let router = new VueRouter({
  routes: [
    { path: '/', redirect: './home' },
    { path: '/home', component: Home },
    { path: '/home/detailGoods/:select', component: DetailGoods },
    { path: '/find', component: Find },
    { path: '/add', component: Add },
    { path: '/mine', component: Mine },
    { path: '/shop-cart', component: ShopCart },

    // components
    { path: '/home/goodsShow/:id', component: GoodsShow },
    { path: '/find/article', component: Article }
  ]
})

export default router