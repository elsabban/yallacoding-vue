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
                   <div v-for="(item,index) in serviceData.homepage.services" :key="index" class="col-lg-3 col-md-6 col-sm-6 col-12">
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
.service-box {
     background-color: #121315;
    padding: 24px;
    min-height: 250px;
    color: white;
    border-radius: 5px;
    transition: 0.3s;
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    border-top: 3px solid #f49522;
}
.service-box:hover .icon a {
    background-color:#f49522 ;
    color:black
}
.icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    color: #f49522;
    align-self: center;
    margin:16px 0 20px
}
.icon > i {
    font-size: 40px;
}
.icon a {
    border-radius: 50%;
    padding: 5px;
    font-size: 14px;
    background-color: #2f2f2f;
    color: #f49522;
    text-decoration: none;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

}
.service-box:hover .icon a {
    background-color:#f49522 ;
    color:black
}
.service-box h5 {
    font-size: 16px;
    font-weight: 600;
       color: #19a89e;
}


.service-box:after {
       content: "";
    position: absolute;
    right: -109px;
    bottom: -2px;
    width: 120px;
    height: 120px;
    background: #844c07;
    border-radius: 50px;
    opacity: 0.1;
    z-index: 0;
    transform: skewX(-46deg) scaleX(1);
    transition: 0.3s;
    
}
.service-box:hover::after {
background:#f49522;
opacity: 1;
}

@media(min-width:992px) and (max-width:1200px) {
    .container {
        max-width: 95%;
    }
}
</style>