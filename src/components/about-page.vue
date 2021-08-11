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
section.about-page .ab-img-holder > * {
     background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    height: 365px;
    width: 400px;
    border-radius: 15px;
    margin-left: 0;
    position: relative;
}
section.about-page .ab-img-holder .img2 {
height: 300px;
    width: 400px;
    margin-left: 70px;
    margin-top: -83px;
}
/* .ab-img-holder .img1::after {
content: "";
    height: 72%;
    left: -66px;
    width: 6px;
    background-color: #f49522;
    position: absolute;
    border-radius: 18px;
} */

section.about-page h5 {
   
    color: #cccbcb;
}
section.about-page h5 span {
    color:#19a89e;
    font-weight: 700;
    font-size: 30px;
    margin: 5px;
}
section.about-page .about-items li {
color: white;
}
section.about-page .about-items li span {
    color:#f49522;
    font-size: 18px;
    font-weight: 600;
    position: relative;
    padding-left: 20px;
}
section.about-page .about-items li span::after  {
    content: "\f101";
     font-family: "Font Awesome 5 Pro";
     font-weight: 900;
    position: absolute;
    left: 0;
    /* width: 15px; */
    top:50%;
    transform: translateY(-50%);
    /* height: 5px; */
    color: #19a89e;
}


section.about-page img {
    position: absolute;
    top:20px;
    right: 0;
    width: 100px;
    
}
section.about-page img:nth-child(2) {
      position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    width: 200px;
    transform: rotatey(
180deg
);
filter: invert(50%) sepia(93%) saturate(363%) hue-rotate(126deg) brightness(89%) contrast(91%);
}
@media (max-width:991px) {
    section.about-page .ab-img-holder > *  {
    display: none;
    }
    section.about-page img,img:nth-child(2) {
        width: 50px;
    }
    section.about-page .about-items,.about-text {
        padding:0 15px 
    }
}
</style>