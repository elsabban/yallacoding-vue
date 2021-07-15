<template>
  <div id="app">
      <home-app></home-app>
  </div>
</template>

<script>
import homeApp from './components/home.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    homeApp,
  },
 
}
</script>

<style>

</style>
