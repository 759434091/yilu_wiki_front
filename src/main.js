import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './request'
<<<<<<< HEAD
import custom from './custom'
=======
import hljs from 'hljs'
>>>>>>> 062794ffead6c8f539160a2736ab834fdc68e3e7

Vue.prototype.$request = request
Vue.use(custom);

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
