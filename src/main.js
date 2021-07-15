import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/store'
import Scrollspy from 'vue2-scrollspy';

// use default options
Vue.use(Scrollspy);

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