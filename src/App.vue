<template>
  <div id="app">
    <header-app ></header-app>

      <transition mode="out-in" name="fade">
        <router-view></router-view>
      </transition>
    <footer-app></footer-app>
  </div>
</template>

<script>
import homeApp from './components/home.vue'
import headerApp from './components/common/header.vue'
import footerApp from './components/common/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    homeApp,
    headerApp,
    footerApp
  },
    
 
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
