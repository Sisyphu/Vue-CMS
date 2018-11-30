//入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://vue.studyit.io';

import moment from 'moment'
Vue.filter('dateFormat', function (datastr, pattern = 'YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern)
})

import { Header, Swipe, SwipeItem, Button} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

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