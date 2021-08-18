<template>
<div>
    <intro-sec pageTitle="OUR SERVICES"></intro-sec>

    <section class="single-service">
        <div class="container">
            <div class="row">

                <transition mode="out-in" name="fade">
                    <router-view :key="$route.params.id" name="insideView"></router-view>
                </transition>
                <div class="col-lg-4 ml-auto col-12">
                    <div class="all-serv">
                        <h4>ALL SERVICES</h4>
                        <ul class="list-unstyled">

                            <router-link to="/single-service/0" v-slot="{ navigate,isActive,isExactActive ,href}" custom>
                                <li @click="navigate">
                                    <a :href="href" :class="[isActive && 'active', isExactActive && 'router-link-exact-active']">WEP DEVELOPMENT<i class="fad fa-chevron-double-right"></i></a>
                                </li>
                            </router-link>
                            <router-link to="/single-service/1" v-slot="{ navigate,isActive,isExactActive ,href}" custom>
                                <li @click="navigate">
                                    <a :href="href" :class="[isActive && 'active', isExactActive && 'router-link-exact-active']">MOBILE APP DEVELOPMENT<i class="fad fa-chevron-double-right"></i></a>
                                </li>
                            </router-link>
                            <router-link to="/single-service/2" v-slot="{ navigate,isActive,isExactActive ,href}" custom>
                                <li @click="navigate">
                                    <a :href="href" :class="[isActive && 'active', isExactActive && 'router-link-exact-active']">DIGITAL MARKETING<i class="fad fa-chevron-double-right"></i></a>
                                </li>
                            </router-link>
                            <router-link to="/single-service/3" v-slot="{ navigate,isActive,isExactActive ,href}" custom>
                                <li @click="navigate">
                                    <a :href="href" :class="[isActive && 'active', isExactActive && 'router-link-exact-active']">POS SYSTEMS<i class="fad fa-chevron-double-right"></i></a>
                                </li>
                            </router-link>

                        </ul>
                    </div>

                    <div class="contact-widget">
                        <h4>NEED HELP?</h4>
                        <p>Prefer speaking with a human to filling out a form? call corporate office and we will connect you with a team member who can help.
                        </p>
                        <a href="tel:+ 01114095210"><i class="fad fa-mobile"></i> 01114095210</a>
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
    components: {
        introSec
    },
    // methods: {
    //     goTo(payload) {
    //         this.$store.dispatch('getSingleServ',payload)
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         // hide homepage sections links
    //         if (to.params.id != from.params.id) {
    //             this.$router.push(this.$route.params.id)
    //         }
    //     }
    // },
    mounted() {
        window.scrollTo(0, 0)

    },
    // computed: {
    //     servData() {
    //         console.log(this.$store.getters.singleServ)
    //         return this.$store.getters.singleServ
    //     }
    // },
    // watch:{
    // $route (to, from){
    // // hide homepage sections links
    //     if (to.params.id != from.params.id) {
    //        this.$store.dispatch('getSingleServ', this.$route.params.id)
    //     }
    // } 
    // }
}
</script>

<style scoped>
.single-service .serv-img {
    border-radius: 15px;
    overflow: hidden;

}

.single-service .contact-widget {
    background-color: rgb(29 29 29);
    border-radius: 15px;
    padding: 30px;

    margin-top: 1em;
    color: white;
}

.single-service .contact-widget h4 {
    font-size: 20px;
    font-weight: bold;
    margin: 15px 0;
}

.single-service .contact-widget a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    font-size: 19px;
    font-weight: 600;
}

.single-service .contact-widget a i {
    color: #f49421;
    margin-right: 10px;
}

.single-service .contact-widget a:hover {
    color: #f49421;
    text-decoration: underline;
}

.single-service .contact-widget p {
    color: rgb(212, 212, 212);
    font-weight: 700;
}

.single-service .all-serv {
    background-color: rgb(29 29 29);
    border-radius: 15px;
    padding: 15px;
    padding-top: 50px;

}

.single-service .all-serv li {
    margin-bottom: 5px;
}

.single-service .all-serv li a {
    color: white;
    display: inline-block;
    text-decoration: none;
    padding: 10px 15px;
    width: 100%;
    transition: 0.3s;
    font-weight: 600;
    border-radius: 10px;
    position: relative;
}

.single-service .all-serv h4 {
    color: #f49421;
    font-weight: bold;
    margin-bottom: 32px;
    font-size: 20px;
}

.single-service .all-serv li a.active,
.single-service .all-serv li a:hover {
    background-color: #3a3a3a;
    color: white;
}

.single-service .all-serv li a.active::after,
.single-service .all-serv li a:hover::after {
    content: "";
    height: 60%;
    transform: translatey(-50%);
    position: absolute;
    left: 1px;
    top: 50%;
    width: 2px;
    background-color: #f49421;
}

.single-service .all-serv li a i {
    transform: translatey(-50%);
    position: absolute;
    right: 5px;
    top: 50%;
    color: #f49421;
}

.single-service .serv-content {
    color: white;
    padding: 20px 0;
}

.single-service .serv-content h3 {
    font-weight: bold;
    color: #f49421;
}

.single-service .serv-content p {
    line-height: 33px;
}

.single-service .serv-content .serv-steps {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    /* align-items: center; */
    align-self: center;
}

.single-service .serv-content .serv-steps>* {
    width: 48%
}

.single-service .serv-content .serv-steps img {
    border-radius: 15px;
}

.single-service .serv-content .serv-steps .steps {
    margin-left: 4%;
}

.single-service .serv-content .serv-steps .steps ul li {
    margin: 8px 0
}

.single-service .serv-content .serv-steps .steps ul li i {
    color: #f49421;
    margin-right: 5px;
}

.single-service .serv-content .steps h5 {
    font-weight: bold;
    color: #f49421;
}
</style>
