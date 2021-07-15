<template>
    <div v-if="getData != null" class="main-slider">
        <carousel   v-if="getData.homepage.slider.length > 0" 
        animateOut="animate__animated animate__fadeOut"
        :autoplay="true" 
        :loop="true"
        :nav="false" 
        :autoplayTimeout="9000"
        :items="1" >
           <div class="slide-item"  v-for="(item,index) in getData.homepage.slider" :key="index" :style="{ 'background-image': 'url(' + item.path + ')' }">
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
img {
    max-height: 600px;
}
/* .caption {
    display: none;
} */
.btn {
    transition: unset;
}
.slide-item .caption >*{
    opacity: 0;
    transition-duration:0s;
    transform: translateY(30px);
    text-align: center;
}
.active .slide-item .caption h2 {
    opacity: 1;
    transition-duration:1s;
    transition-delay: 1s;
    transform: translateY(0);
}
.active .slide-item .caption h3 {
       opacity: 1;
    transition-duration:1s;
    transition-delay: 1.3s;
    transform: translateY(0);
}
.active .slide-item .caption a {
       opacity: 1;
    transition-duration:1s;
    transition-delay: 1.5s;
    transform: translateY(0);
}
.slide-item .caption .btn {
    background-color: #f49522;
    color: white;
    border-radius: 30px;
    font-size: 17px;
    font-weight: 700;
   
    padding: 10px 45px;
        display: flex;
    align-items: center;
    justify-content: flex-end;
}
    
.slide-item .caption .btn i {
opacity: 0;
transition: 0.5s;
position:absolute;
transform: translateX(0);
}
.slide-item .caption .btn:hover i {
opacity: 1;
transition: 0.5s;
transform: translateX(30px);
}
</style>