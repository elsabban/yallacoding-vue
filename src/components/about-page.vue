<template>
<div>
    <intro-sec pageTitle="ABOUT US"></intro-sec>

    <section v-if="getData != null" class="about-page">
      
        <img src="src/assets/img/right-curve.png" alt="">
                 <img src="src/assets/img/yellow-curve.png" alt="">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="sec-title mb-5 text-center">
                                <h2>ABOUT YALLA CODING
                                    <span></span>
                                </h2>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="ab-img-holder">
                                <div class="img1" style="background-image:url(src/assets/img/ab1.jpg)"></div>
                                <div class="img2" style="background-image:url(src/assets/img/ab2.jpg)"></div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-12">
                            <div class="about-text">
                                <h5><span>{{getData.about[0].title | capitalize}} </span> {{getData.about[0].desc }}</h5>
                            </div>
                            <div class="about-items mt-3">
                                <ul class="list-unstyled">
                                    <li v-for="(item,index) in getData.about[0].targets" :key="index"><span>{{item.title | capitalize}} : </span>
                                   <P> {{item.desc}} </P>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
              
    </div>
    </section>
    </div>
</template>
<script>
import introSec from './common/intro.vue'
export default {

    components:{
        introSec,
    },
    computed:{
         getData() {
            return this.$store.getters.getData
         }
    },
    data() {
        return {
         
        }
    },
    created() {
        
        this.$store.dispatch('getData','homepage')
    }
}
</script>
<style scoped>

</style>