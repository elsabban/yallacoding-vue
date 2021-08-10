import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import home from './../components/home.vue'
import about from './../components/home/about.vue'
import contact from './../components/contact.vue'
import blog from './../components/blog-page.vue'
import packages from './../components/packages.vue'
import blogSingle from './../components/blog-single.vue'
import servicePage from './../components/services-page.vue'
import singleService from './../components/single-service.vue'
const routes = [
    // { path: "/about", component: about }
    { path: "/contact", component: contact, meta: { scrollToTop: true } },
    { path: "/blog-page", component: blog, meta: { scrollToTop: true } },
    { path: "/packages", component: packages, meta: { scrollToTop: true } },
    { path: "/blog-single/:id", component: blogSingle, meta: { scrollToTop: true } },
    { path: "/services-page", component: servicePage, meta: { scrollToTop: true } },
    { path: "/single-service/:id", component: singleService, meta: { scrollToTop: true } },
    { path: "*", component: home }
]

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                // behavior: 'smooth',
            }
        } else {
            return { x: 0, y: 0 }
        }

    }
})