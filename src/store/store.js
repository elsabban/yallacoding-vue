import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
axios.defaults.headers.common['app-id'] = "60e712cf65fda14f04d6b8a6";

export default new Vuex.Store({
    state: {
        cont: "elsaban",
        dataFetched: null,
        scrolled: false,
        blogData: null,
        post: null,
        servicesPage: null,
        singleServ: null,
        postCheck: null
    },
    getters: {
        getData(state) {
            return state.dataFetched
        },
        scrolled(state) {
            return state.scrolled
        },
        blogData(state) {

            return state.blogData

        },
        post(state) {
            return state.post
        },
        servicesPage(state) {
            return state.servicesPage
        },
        singleServ(state) {
            return state.singleServ
        },
        postCheck(state) {
            return state.postCheck
        }
    },
    actions: {
        getData({ commit, dispatch, state }, payload) {
            axios.get('https://my-json-server.typicode.com/elsabban/fakeApi/' + payload)
                .then(res => {
                    state.dataFetched = res.data
                        // console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getBlogData({ commit, dispatch, state }, payload) {
            axios.get('https://my-json-server.typicode.com/elsabban/fakeApi2/' + payload)
                .then(res => {
                    state.blogData = res.data

                    // console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getServices({ commit, dispatch, state }, payload) {
            axios.get('https://my-json-server.typicode.com/elsabban/fakeApi3/services')
                .then(res => {
                    state.servicesPage = res.data
                    console.log(state.servicesPage)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getSingleBlog({ commit, dispatch, state }, payload) {

            if (state.blogData != null) {
                state.postCheck = state.blogData.posts.find(item => item.id === payload)
                state.post = {
                    posts: state.blogData.posts,
                    post: state.blogData.posts.find(item => item.id === payload),
                    tags: state.blogData.tags,
                    latest: state.blogData.latest
                }
            } else {
                axios.get('https://my-json-server.typicode.com/elsabban/fakeApi2/blog')
                    .then(res => {
                        // console.log('axios')
                        state.blogData = res.data
                        state.postCheck = state.blogData.posts.find(item => item.id === payload)
                        state.post = {
                            posts: state.blogData.posts,
                            post: state.blogData.posts.find(item => item.id === payload),
                            tags: state.blogData.tags,
                            latest: state.blogData.latest
                        }

                    })
                    .catch(err => {
                        console.log(err)
                    })
            }



        },
        getSingleServ({ commit, dispatch, state }, payload) {

            if (state.servicesPage != null) {

                state.singleServ = state.servicesPage.find(item => item.id == payload)

            } else {
                axios.get('https://my-json-server.typicode.com/elsabban/fakeApi3/services')
                    .then(res => {
                        state.servicesPage = res.data
                        state.singleServ = state.servicesPage.find(item => item.id == payload)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }



        },
        scrollEvent({ commit, dispatch, state }, payload) {
            if (window.scrollY > payload) {
                state.scrolled = true
            } else {
                state.scrolled = false
            }
        },
        scroll({ commit, dispatch, state }, id) {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth"
            });
            console.log(id)
        },
        detectSection({ commit, dispatch, state }, payload) {
            var topSec = document.getElementById(payload).offsetTop - 10;
            var bottomSec = document.getElementById(payload).offsetTop + document.getElementById(payload).offsetHeight;
            var topArea = document.getElementById('about').offsetTop - 10;
            var bottomArea = document.getElementById('service').offsetHeight + document.getElementById('about').offsetHeight;

            if (window.scrollY > topSec && window.scrollY < bottomSec) {
                //  console.log(topAbout,window.scrollY,document.getElementById('about').offsetTop)
                // console.log(document.querySelectorAll('[data-scroll =  ' + payload + ']'))
                document.querySelectorAll('[data-scroll =  ' + payload + ']')[0].classList.add('active')
                document.querySelectorAll('[data-scroll =  home]')[0].classList.remove('active')

            } else if (window.scrollY < topArea || window.scrollY > (bottomArea + topArea)) {
                document.querySelectorAll('[data-scroll =  home]')[0].classList.add('active')
                document.querySelectorAll('[data-scroll =  ' + payload + ']')[0].classList.remove('active')
            } else {
                document.querySelectorAll('[data-scroll =  ' + payload + ']')[0].classList.remove('active')
            }

        }
    }
})