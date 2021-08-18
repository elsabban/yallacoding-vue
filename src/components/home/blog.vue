<template>
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
                   <div v-for="(item,index) in blogData" :key="index" class="col-lg-4 col-md-6 mx-auto col-sm-6 col-12">
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
                               <h2>{{item.title }}</h2> 
                               <h5 v-dompurify-html="item.body"></h5>
                               
                               <router-link :to="'/blog-single/' + item.id" v-slot="{ navigate,href}" custom>
                               <a  :href="href" @click="navigate">READ MORE <i class="fad fa-chevron-double-right"></i></a>
                               </router-link>
                           </div>
                       </div>
                   </div>
                
               </div>
           </div>
</template>
<script>
export default {
    props:['blogData'],
    data() {
        return {
           
        }
    }
}
</script>
<style scoped>

</style>