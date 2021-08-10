<template>
<header ref="headerer" :class="{slidefix : scrolled}">
    <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">
            <img src="src/assets/img/logo.png" alt="">
        </a>
        <button @click="closeMenu" :class="{ crossAct: isClose}" class="navbar-toggler x">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <div class=" navbar-collapse" :class="{ openMenu: isClose}" id="navbarNav">
             <button @click="closeMenu" :class="{ crossAct: isClose}" class="navbar-toggler x">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
            <ul class="navbar-nav">
                <router-link to="/home" v-slot="{ navigate,isActive,isExactActive ,href}" custom>
                    <li class="nav-item " @click="navigate">
                        <a class="nav-link" data-scroll="home" :href="href" :class="[isActive && 'active', isExactActive && 'router-link-exact-active']" @click=" scroll('home')">HOME</a>
                    </li>
                </router-link>
                <router-link to="/home" v-slot="{ navigate,isExactActive ,href}" custom>
                    <li class="nav-item " :class="{hide : isHome}" @click="navigate">
                        <a class="nav-link" :class="[ isExactActive && 'router-link-exact-active']" data-scroll="about" :href="href" @click=" scroll('about')">ABOUT</a>
                    </li>
                </router-link>
                <router-link to="/home" v-slot="{ navigate,isExactActive,href}" custom>
                    <li class="nav-item " :class="{hide : isHome}" @click="navigate">
                        <a class="nav-link" :class="[ isExactActive && 'router-link-exact-active']" data-scroll="service" :href="href" @click=" scroll('service')">SERVICES</a>
                    </li>
                </router-link>
                <!-- <router-link to="/home" tag="li" class="nav-item ">
                    <a class="nav-link" data-scroll="home" @click="scroll('home')">HOME</a>
                </router-link> -->
                <!-- <router-link to="/home" tag="li" class="nav-item ">
                    <a class="nav-link" data-scroll="about" @click="scroll('about')">ABOUT</a>
                </router-link> -->
                <!-- <router-link to="/home" tag="li" class="nav-item ">
                    <a class="nav-link" data-scroll="service" @click="scroll('service')">SERVICES</a>
                </router-link> -->
                  <router-link to="/packages" v-slot="{isActive, navigate,isExactActive,href}" custom>
                    <li class="nav-item "  @click="navigate">
                        <a class="nav-link" :class="[isActive && 'active', isExactActive && 'router-link-exact-active']"  :href="href" >PACKAGES</a>
                    </li>
                </router-link>
                <router-link to="/blog-page" v-slot="{isActive, navigate,isExactActive,href}" custom>
                    <li class="nav-item "  @click="navigate">
                        <a class="nav-link" :class="[isActive && 'active', isExactActive && 'router-link-exact-active']"  :href="href" >BLOG</a>
                    </li>
                </router-link>
                <!-- <li class="nav-item">
        <a class="nav-link" href="#">POS</a>
      </li> -->
                <router-link to="/contact" v-slot="{ navigate,isActive,isExactActive ,href}" custom>
                    <li class="nav-item ">
                        <a class="nav-link" :href="href" :class="[isActive && 'active', isExactActive && 'router-link-exact-active']" @click="navigate">CONTACT</a>
                    </li>
                </router-link>
                <!-- <router-link tag="li" to="/contact" class="nav-item">
                    <a class="nav-link" href="#">CONTACT</a>
                </router-link> -->
            </ul>
            <div class="contact">
                <ul class="list-unstyled">
                    <li><i class="fas fa-envelope"></i><a href="mailto:info@yalla-coding.com">info@yalla-coding.com</a></li>
                    <li><i class="fas fa-phone-square-alt"></i> <a href="tel:+01114095210">01114095210</a></li>
                    <li><i class="fas fa-phone-square-alt"></i> <a href="tel:+01552731175">01552731175</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
export default {
    data() {
        return {
            isClose: false,
            isHome:false

        }
    },
    methods: {
        closeMenu() {

            this.isClose = !this.isClose;
        },

        scroll(id) {

            //  this.isActive = !this.isActive
            if (this.$route.path == "/home") {
                this.$store.dispatch('scroll', id)
            }

            // this.moveClass(event)

        },
        // moveClass(e) {

        //     if (document.querySelectorAll('.nav-item a.active').length > 0) {
        //       console.log("found")
        //       document.querySelectorAll('.nav-item a.active').forEach(function(item){
        //         item.classList.remove('active')
        //       })
        //     }
        //     e.target.classList.add('active')

        // }

    },
    computed: {
        scrolled() {
            return this.$store.getters.scrolled
        }
    },
    created() {
        const thisComp = this;

        document.addEventListener("scroll", function () {

            if (thisComp.$route.path == "/home") {
                thisComp.$store.dispatch('detectSection', 'about');
                thisComp.$store.dispatch('detectSection', 'service');
            }

            thisComp.$store.dispatch('scrollEvent', thisComp.$refs.headerer.offsetHeight)
        })


        
    },
    watch:{
    $route (to, from){
    // hide homepage sections links
        if (this.$route.path !== "/home") { 
            this.isHome = true
           
        } else {
            this.isHome = false
           
        }
    }
}, 
    
}
</script>

<style scoped>
.navbar-brand img {
    width: 100px;
}

.slidefix .navbar-brand img {
    width: 70px;
}

.navbar {
    padding: 10px 42px;
}

.slidefix .navbar {
    padding: 2px 42px;
}

#navbarNav {
    justify-content: flex-end;
}

header {
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 0;
    transition: 0.5s;

}
.hide {
    display: none;
}
.slidefix {
    position: fixed;

    background-color: rgb(29 29 29);
    color: black;
    animation-name: slideNav-data-v-af5d225e;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    border-top: 2px solid #f19221;
    box-shadow: 0px 0px 10px 2px black;
}

@keyframes slideNav {
    0% {
        top: -100px
    }

    100% {
        top: 0%
    }
}

.navbar-expand-lg .navbar-nav .nav-link {
    color: rgb(255 255 255);
    font-size: 16px;
    font-weight: 700;
}

.contact {
    display: none;
}

.contact li {
    margin-bottom: 10px;
}

.contact li a {
    color: white;
    text-decoration: none
}

.contact li a:hover {
    color: #f49522;
}

.contact li i {
    color: #f49522;
    margin: 0 5px;
}

@media (min-width: 992px) {
    .navbar-expand-lg .navbar-nav .nav-item {
        margin-left: 20px;
    }

    .navbar-expand-lg .navbar-nav .nav-item .nav-link {
        position: relative;
        padding-left: 0;
        padding-right: 0;
        transition: 0.5s;
    }

    .navbar-expand-lg .navbar-nav .nav-item .nav-link:after {
        content: "";
        width: 0;
        height: 1px;
        background-color: #f49522;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.3s;
    }

    .navbar-expand-lg .navbar-nav .nav-item .nav-link:hover,
    .navbar-expand-lg .navbar-nav .nav-item .nav-link.active {
        color: #f49522;
    }

    .navbar-expand-lg .navbar-nav .nav-item .nav-link:hover::after,
    .navbar-expand-lg .navbar-nav .nav-item .nav-link.active::after {
        width: 100%;
    }
}

@media (max-width:991px) {
    .contact {
        display: flex;
        align-items: center;
        align-self: center;
        margin-top: 50px;
        margin-left: 15px;

    }

    #navbarNav {
        justify-content: flex-end;
        position: fixed;
        height: 100vh;
        top: 0px;
        right: -300px;
        width: 300px;
        background-color: #000000;
        transition: 0.5s;
        border-top: 2px solid #f19221;
    }

    #navbarNav.openMenu {
        right: 0;
        transition: 0.5s;
    }

    .navbar-expand-lg .navbar-nav .nav-item .nav-link {
        padding-right: 15px;
        padding-left: 15px;
        /* border-bottom:1px solid #f49522; */
    }

    .navbar-expand-lg .navbar-nav .nav-item:not(:last-child) .nav-link {
        border-bottom: 1px solid #f49522;
    }

    .navbar-nav {
        margin-top: 50px;
    }
}

/* ANIMATED X */

.navbar-toggler.x {
    border: none;
    z-index: inherit;
    position: absolute;
    right: 15px;
    /* top: 15px; */
}
 #navbarNav .navbar-toggler.x {
     top:15px;
     
 }
.navbar-toggler.x:focus {
    outline: none;
}

.navbar-toggler.x.crossAct .icon-bar:nth-of-type(1) {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 10% 10%;
    -ms-transform-origin: 10% 10%;
    transform-origin: 10% 10%;
}

.navbar-toggler.x.crossAct .icon-bar:nth-of-type(2) {
    opacity: 0;
}

.navbar-toggler.x.crossAct .icon-bar:nth-of-type(3) {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 10% 90%;
    -ms-transform-origin: 10% 90%;
    transform-origin: 10% 90%;
}

.navbar-toggler.x .icon-bar {
    width: 22px;
    display: block;
    height: 2px;
    background-color: #fff;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}

.navbar-toggler.x .icon-bar+.icon-bar {
    margin-top: 4px;
}

.navbar-toggler.x .icon-bar:nth-of-type(1) {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    transform-origin: 0;
}

.navbar-toggler.x .icon-bar:nth-of-type(2) {
    opacity: 1;
    filter: alpha(opacity=100);
}

.navbar-toggler.x .icon-bar:nth-of-type(3) {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    transform-origin: 0;
}
</style>
