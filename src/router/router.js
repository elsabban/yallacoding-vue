import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import home from './../components/home.vue'
import contact from './../components/contact.vue'
import blog from './../components/blog-page.vue'
import packages from './../components/packages.vue'
import blogSingle from './../components/blog-single.vue'
import servicePage from './../components/services-page.vue'
import singleService from './../components/single-service.vue'
import aboutPage from './../components/about-page.vue'
import singleServiceView from './../components/single-serv-view.vue'
import singleClient from './../components/single-client.vue'

const routes = [
    // { path: "/about", component: about }
    { path: "/contact", component: contact, meta: { scrollToTop: true } },
    { path: "/blog-page", component: blog, meta: { scrollToTop: true } },
    { path: "/about-page", component: aboutPage, meta: { scrollToTop: true } },
    { path: "/packages", component: packages, meta: { scrollToTop: true } },
    { path: "/blog-single/:id", component: blogSingle, meta: { scrollToTop: true } },
    { path: "/services-page", component: servicePage, meta: { scrollToTop: true } },
    { path: "/single-client/:id", component: singleClient, meta: { scrollToTop: true } },
    {
        path: "/single-service",
        component: singleService,
        meta: { scrollToTop: false },
        children: [{
            path: "/single-service/:id",
            components: {

                insideView: singleServiceView
            }
        }]
    },
    { path: "*", component: home, meta: { scrollToTop: true } }
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
            if (to.matched.some(record => record.meta.scrollToTop)) {
                return { x: 0, y: 0 }
            }
        }

    }
})