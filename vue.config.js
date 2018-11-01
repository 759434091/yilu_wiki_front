module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        externals: {
            'axios': 'axios',
            'hljs': 'hljs',
            'vue': 'Vue',
            'vuex': 'Vuex',
            'vue-router': 'VueRouter'
        }
    }
};