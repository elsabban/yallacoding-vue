<template>
  <div id="app">
    <header-app ></header-app>

      <router-view></router-view>
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

</style>
