<template>
<div>
    <intro-sec pageTitle="OUR CLIENTS"></intro-sec>

    <section v-if="singleClient != null" class="single-client">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div  class="gallery">
                        <carousel v-if="singleClient.imgArr.length > 0 && $route.params.id == singleClient.id" :margin="30" animateOut="animate__animated animate__fadeOut" :autoplay="true" :nav="true" :dots="false" :autoplayTimeout="9000" :items="3" :responsive="{0:{items:1},600:{items:2},991:{items:3}}" :navText="[`<i class='far fa-chevron-double-left'></i>`,`<i class='far fa-chevron-double-right'></i>`]">

                            <div class="image" v-for="(image, imageIndex) in singleClient.imgArr" :key="imageIndex" @click="index = imageIndex" :style="{ backgroundImage: 'url(' + image + ')' }"></div>

                        </carousel>
                        <CoolLightBox :items="singleClient.imgArr" :index="index" :effect="'fade'" @close="index = null">
                        </CoolLightBox>

                        <!-- <div class="images-wrapper">
                            <div class="row">
                                <div class=" col-lg-3 col-md-4 col-sm-6 col-6" v-for="(image, imageIndex) in items" :key="imageIndex">
                                    <div class="image"  @click="index = imageIndex" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
                                </div>
                            </div>
                        </div> -->
                    </div>

                </div>
                <div class="col-lg-8 col-md-7 col-12">
                    <div class="pro-desc">
                        <h3>{{singleClient.name | capitalize}}</h3>
                        <p> {{singleClient.desc}}</p>

                    </div>
                </div>
                <div class="col-lg-4 col-md-5 col-12">
                    <div class="project-detail">
                        <ul class="list-unstyled">
                            <li>
                                <h4>CLIENT</h4>
                                <P>{{singleClient.name | capitalize}}</P>
                            </li>
                            <li>
                                <h4>CATEGORY</h4>
                                <P>{{singleClient.category}}</P>
                            </li>
                            <li>
                                <h4>DATE</h4>
                                <P>{{singleClient.date}}</P>
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
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import carousel from 'vue-owl-carousel'

import introSec from './common/intro.vue'
export default {
    components: {
        introSec,
        CoolLightBox,
        carousel
    },
    data: function () {
        return {
            // items: [
            //     'src/assets/img/10.jpg',
            //     'src/assets/img/9.jpg',
            //     'src/assets/img/11.jpg',
            //     'src/assets/img/12.jpg',
            //     'src/assets/img/10.jpg',
            //     'src/assets/img/9.jpg',
            //     'src/assets/img/11.jpg',
            //     'src/assets/img/12.jpg',
            //     'src/assets/img/10.jpg',
            //     'src/assets/img/9.jpg',
            //     'src/assets/img/11.jpg',
            //     'src/assets/img/12.jpg',
            //     'src/assets/img/10.jpg',
            //     'src/assets/img/9.jpg',
            //     'src/assets/img/11.jpg',
            //     'src/assets/img/12.jpg'
            // ],
            index: null
        };
    },
    mounted() {
        this.$store.dispatch('getSingleClient', this.$route.params.id)
    },
    computed: {
        singleClient() {
            console.log(this.$store.getters.singleClient)
            return this.$store.getters.singleClient
        }
    }

}
</script>

<style scoped>

</style>
