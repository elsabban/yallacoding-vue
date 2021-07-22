<template>
    <div >
      
   
       <!-- header -->
    
           
  
<div>
           <!-- ------- -->
       <!-- main-slider -->
      <section id="home"   class="home">
          <main-slider :getData="getData"></main-slider>
      </section>
        <!-- ------- -->

        <!-- about section -->
             <section id="about"  class="about">
                 <about-sec :aboutData="getData"></about-sec>
             </section>


        <!-- services section  -->
        <section id="service"  class="services">
           <services-sec :serviceData="getData"></services-sec>
        </section>

        <!-- clients  -->

        <section  class="clients">
               <client-sec :clientData="getData"></client-sec>
        </section>

        <!-- blog -->

        <section  class="blog">
               <blog-sec :blogData="getData"></blog-sec>
        </section> 

        <!-- contact box -->
        <section class="contact-ox">
            <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="contact-box">
                        <img src="src/assets/img/up-curve.png" alt="">
                        <img src="src/assets/img/grey-curve.png" alt="">
                        <h2>LET'S GET YOUR <br> PROJECT STARTED!</h2>
                        <a href="" class="btn">CONTACT US</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <!-- footer -->
</div>
       
    </div>
</template>
<script>
import mainSlider from './main-slider.vue'
import headerApp from './common/header.vue'
import footerApp from './common/footer.vue'
import clientSec from './home/cllients.vue'
import aboutSec from './home/about.vue'
import servicesSec from './home/services.vue'
import blogSec from './home/blog.vue'
export default {
    components:{
       mainSlider,
       headerApp,
       clientSec,
       aboutSec,
       servicesSec,
       footerApp,
       blogSec
    },
    data(){
        return {
                 }
    },
     mounted() {
        this.$store.dispatch('getData')
        // this.$store.dispatch('detectSection')
    },
    
    computed:{
        getData() {
       
            return this.$store.getters.getData
        }
    },
     
}
</script>
<style scoped>


.clients{
    position: relative;
}


section.about {
    position: relative;
    overflow: hidden;
}
.contact-box {
    padding: 95px 95px 68px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    align-self: center;
    background-color: #f49522;
    position: absolute;
        bottom: -75px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
}
.contact-bo {
    position: relative;
}
.contact-box h2 {
    font-weight: 700;
        font-size: 36px;
}
.contact-box > img {
    position: absolute;
    top: 0;
    right: 50px;
    z-index: 2;
}
.contact-box img:nth-child(2) {
    right: 0px;
    z-index: 1;
}
.contact-box a.btn {
    position: relative;
    z-index: 3;
    background-color: black;
    padding: 10px 20px;
    color: white;
    transition: 0.3s;

}
.contact-box a.btn:hover {
    background-color: white;
    color:black
}
.blog {
    padding-bottom: 220px;
}
@media (max-width:767px) {
    .contact-box {
    padding: 40px; 
    flex-direction: column;
    width: 90%;
    }
    .contact-box > img {
        width: 100px;
    }
    .contact-box h2 {
        font-size: 25px;
        margin-bottom: 10px;
    }
}
</style>