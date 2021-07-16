import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import home from './../components/home.vue'
import about from './../components/home/about.vue'
import contact from './../components/contact.vue'
const routes = [
    // { path: "/about", component: about }
    { path: "/contact", component: contact },
    { path: "/*", component: home }
]

export default new VueRouter({ mode: 'history', routes })