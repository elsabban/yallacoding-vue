<template>
  <section class="services-page">
        <intro-sec pageTitle="OUR SERVICES"></intro-sec>
    <div v-if="servicePage != null" class="container py-5">
               <div class="row">
                   <div class="col-12">
                      <div class="sec-title mb-5 text-center">
                           <h2>WHAT WE’RE OFFERING
                               <span></span>
                           </h2>
                           <p>We are committed to providing our customers with exceptional service <br> while offering our employees the best training. </p>
                      </div>
                   </div>
                   <div v-for="(item,index) in servicePage" :key="index" class="col-lg-3 col-md-6 col-sm-6 col-12">
                       <div class="service-box">
                           <div class="icon">
                              <i :class="item.icon"></i>
                              <router-link :to="'/single-service/' + item.id" v-slot="{ navigate,href}" custom>
                               <a  :href="href" @click="navigate"><i class="fad fa-chevron-double-right"></i></a>
                               </router-link>
                           </div>
                           <h5>{{item.title | capitalize}}</h5>
                           <P> {{item.desc[0]}}</P>
                       </div>
                   </div>
                
               </div>
           </div>
  </section>
</template>
<script>
import introSec from './common/intro.vue'
export default {
  components:{
      introSec
  },
  mounted() {
     this.$store.dispatch('getServices') 
  },
  computed:{
      servicePage() {
         return this.$store.getters.servicesPage
      }
  }  
}
</script>
<style scoped>
.service-box p {
        overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}
</style>