import VueRouter from 'vue-router'

// home
import Home from './views/home/home'

// find
import DetailGoods from './views/home/detailGoods'
import Find from './views/find/find'

// add
import Add from './views/add/add'

// shop-cart
import ShopCart from './views/shop-cart/shopCart'

// mine
import Mine from './views/mine/mine'
import Wallet from './views/mine/wallet'
import Order from './views/mine/order'
import Callback from './views/mine/callback'
import Address from './views/mine/address'

// components
import GoodsShow from './components/main/GoodsShow'
import Article from './components/main/Article'

let router = new VueRouter({
  routes: [
    // home
    { path: '/', redirect: './home' },
    { path: '/home', component: Home },
    { path: '/home/detailGoods/:select', component: DetailGoods },

    // find
    { path: '/find', component: Find },

    // add
    { path: '/add', component: Add },

    // shop-cart
    { path: '/shop-cart', component: ShopCart },

    // mine
    { path: '/mine', component: Mine },
    { path: '/mine/wallet', component: Wallet },
    { path: '/mine/order', component: Order },
    { path: '/mine/callback', component: Callback },
    { path: '/mine/address', component: Address },

    // components
    { path: '/home/goodsShow/:id', component: GoodsShow },
    { path: '/find/article', component: Article }
  ]
})

export default router