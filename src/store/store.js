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
    },
    getters: {
        getData(state) {
            return state.dataFetched
        },
        scrolled(state) {
            return state.scrolled
        }
    },
    actions: {
        getData({ commit, dispatch, state }, payload) {
            axios.get('https://my-json-server.typicode.com/elsabban/fakeApi/db', payload)
                .then(res => {
                    console.log(res.data)
                    state.dataFetched = res.data

                })
                .catch(err => {
                    console.log(err)
                })
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
            console.log('scroll')
        }
    }
})