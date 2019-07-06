import Vue from 'vue'
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')