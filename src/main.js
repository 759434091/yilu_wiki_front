import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './request'
import hljs from 'hljs'

Vue.prototype.$request = request

Vue.config.productionTip = false

Vue.directive('highlight', (el) => {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
