import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import home from './../components/home.vue'
import about from './../components/home/about.vue'
const routes = [
    // { path: "/about", component: about }
]

export default new VueRouter({ mode: 'history', routes })