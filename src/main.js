//入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(VueRouter)

import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import './lib/mui/css/mui.min.css'    
import './lib/mui/css/icons-extra.css'

import app from './App.vue'

import router from './router.js'

Vue.config.devtools = true;//浏览器Vue工具

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})