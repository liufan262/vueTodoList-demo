import Vue from 'vue'
import App from './APP.vue'

import './assets/style/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render : (h) => h(App)
}).$mount(root)