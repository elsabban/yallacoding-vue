import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/store'
import VueDOMPurifyHTML from 'vue-dompurify-html'

Vue.use(VueDOMPurifyHTML)

Vue.use(Vuex)
Vue.filter('capitalize', function(value) {
    return value.toString().toUpperCase()
})
import router from './router/router'

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
    methods: {

    }

})