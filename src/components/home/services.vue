<template>
       <div v-if="serviceData != null" class="container">
               <div class="row">
                   <div class="col-12">
                      <div class="sec-title mb-5 text-center">
                           <h2>WHAT WE’RE OFFERING
                               <span></span>
                           </h2>
                           <p>We are committed to providing our customers with exceptional service <br> while offering our employees the best training. </p>
                      </div>
                   </div>
                   <div v-for="(item,index) in serviceData.services" :key="index" class="col-lg-3 col-md-6 col-sm-6 col-12">
                       <div class="service-box">
                           <div class="icon">
                              <i :class="item.icon"></i>
                               <a href=""><i class="fad fa-chevron-double-right"></i></a>
                           </div>
                           <h5>{{item.title | capitalize}}</h5>
                           <P> {{item.desc}}</P>
                       </div>
                   </div>
                
               </div>
           </div>
</template>
<script>
export default {
    props:['serviceData'],
}
</script>
<style scoped>

</style>