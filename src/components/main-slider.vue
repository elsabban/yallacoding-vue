<template>
    <div v-if="getData != null" class="main-slider">
        <carousel   v-if="getData.slider.length > 0" 
        animateOut="animate__animated animate__fadeOut"
        :autoplay="true" 
        :loop="true"
        :nav="false" 
        :autoplayTimeout="9000"
        :items="1" >
           <div class="slide-item"  v-for="(item,index) in getData.slider" :key="index" :style="{ 'background-image': 'url(' + item.path + ')' }">
               <div class="caption " >
                  <h2>{{item.title | capitalize}}</h2>
                  <h3 >{{item.description }}</h3>
                  <a class="btn">{{btnText}} <i class="fas fa-long-arrow-right"></i></a>
               </div>
           </div>
        </carousel>
        
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel'

export default {
    data() {
        return {
           loaded:false,
           shows:true,
           btnText:"read more",
           section:0,
        }
    },
    props:['getData'],
    components: { carousel },
    methods:{
     
    //    noShowCap() {
    //        this.shows = false;
           
    //    },
    //    showCap() {
    //        this.shows = true;
           
    //    }
    },
   
  
}
</script>
<style scoped>

</style>