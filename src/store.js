import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: {
            display: false,
            progress: 0
        }
    },
    mutations: {
        startLoading(state) {
            state.loading = {
                display: true,
                progress: 0
            }
        },
        setLoadingProgress(state, progress) {
            state.loading.progress = progress
        },
        stopLoading(state) {
            state.loading = {
                display: false,
                progress: 0
            }
        }
    },
    actions: {}
})
