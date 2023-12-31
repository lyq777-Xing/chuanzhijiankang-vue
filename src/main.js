import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
import axios from 'axios'

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://localhost:8889/lyq/'

axios.interceptors.request.use(config => {
    console.log(config)
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')