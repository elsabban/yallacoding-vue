<template>
    <div>
          <!-- <intro-sec pageTitle="BLOG"></intro-sec> -->
          <section  class="blog">
                      <div v-if="blogData != null" class="container">
               <div class="row">
                   <div class="col-12">
                      <div class="sec-title mb-5 text-center">
                           <h2 class="pr-2">OUR BLOG
                               <span></span>
                           </h2>
                           <p>We are committed to providing our customers with exceptional service <br> while offering our employees the best training. </p>
                      </div>
                   </div>
                   <div v-for="(item,index) in blogData.homepage.blog" :key="index" class="col-lg-4 col-md-6 mx-auto col-sm-6 col-12">
                       <div class="blog-box">
                           <div class="blog-img" :style="{'background-image':'url(' + item.path + ')'}">
                           
                           </div>
                           <div class="blog-desc">
                               <div class="blog-detail">
                               <ul class="list-unstyled">
                                   <li><i class="fas fa-user"></i> BY {{item.writer | capitalize}}</li>
                                   <li><i class="fas fa-calendar-alt"></i> {{item.date | capitalize}}</li>
                               </ul>
                           </div>
                               <h2>{{item.title}}</h2> 
                               <h5 v-dompurify-html="item.desc"></h5>
                               <a class="" href="">READ MORE <i class="fad fa-chevron-double-right"></i></a>
                           </div>
                       </div>
                   </div>
                
               </div>
           </div>
        </section> 
    </div>
</template>
<script>
// import introSec from './intro.vue'
// import blogSec from './home/blog.vue'
export default {
    components:{
        // introSec,
        // blogSec
    },
    //  computed:{
    //     getData() {
       
    //         return this.$store.getters.getData
    //     }
    // },
    // mounted() {
    //     this.$store.dispatch('getData')
    //     // this.$store.dispatch('detectSection')
    // },
}
</script>
<style scoped>

</style>