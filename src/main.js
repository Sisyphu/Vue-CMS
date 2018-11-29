//入口文件
import Vue from 'vue'

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

import './lib/mui/css/mui.min.css'


import app from './App.vue'

Vue.config.devtools = true;//浏览器Vue工具

var vm = new Vue({
    el: "#app",
    render: c => c(app)
})