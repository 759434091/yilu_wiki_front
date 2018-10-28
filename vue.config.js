module.exports = {
    configureWebpack: {
        externals: {
            'axios': 'axios',
            'vue': 'Vue',
            'vuex': 'Vuex',
            'vue-router': 'VueRouter'
        }
    }
}