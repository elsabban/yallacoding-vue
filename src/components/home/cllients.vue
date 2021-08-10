<template>
    <div  v-if="clientData != null">
           <img src="src/assets/img/right-curve.png" alt="">
                 <img src="src/assets/img/yellow-curve.png" alt="">
           <div class="container">
               <div class="row">
                   <div class="col-12">
                      <div class="sec-title mb-5 text-center">
                           <h2>OUR CLIENTS
                               <span></span>
                           </h2>
                           <p>We are committed to providing our customers with exceptional service <br> while offering our employees the best training. </p>
                      </div>
                   </div>
                   <div v-for="(item,index) in clientData.clients" :key="index" class="col-lg-4 col-md-6 col-sm-6 col-12">
                       <div class="client-box">
                           <div class="client-img" :style="{ 'background-image': 'url(' + item.path + ')' }"></div>
                           <div class="client-desc">
                               <h5>{{item.title}}</h5>
                               <ul class="list-unstyled">
                                   <li  v-for="(itemTech,index) in item.tech" :key="index">{{itemTech}}</li>                                   
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
    </div>
</template>
<script>

export default {
    props:["clientData"],
   
}
</script>
<style scoped>
/* clients-box */
.sec-title h2 span {
    box-shadow: none;
}
.client-box {
    position: relative;
   margin-bottom: 50px;
    
}
.client-box .client-img {
   box-shadow: 0px 8px 20px 4px rgb(0 0 0 / 22%);
    width: 100%;
    height: 250px;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    background-attachment: scroll;
    transition: 2s;
    border-radius: 15px;
    border: 5px solid white;
    position: relative;
    overflow: hidden;
    
}

.client-box:hover .client-img {
    background-position: bottom center;
    
}
.client-box .client-img::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    left: 0;
    transition: 0.3s;
}
.client-box:hover .client-img::after { 
    opacity: 0;
}

.client-box .client-desc  ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    align-items: center;
    margin-bottom: 0;
}
.client-box .client-desc {
        box-shadow: 0 0 20px -5px rgb(0 0 0 / 15%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    position: absolute;
    bottom: -32px;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 25px;
    height: 75px;

}

.client-box .client-desc h5 {
    margin-bottom: 0;
    color: #bd7800;
    }
.client-box .client-desc ul li {
    padding:0 5px;
    position: relative;
    font-size: 14px;
    font-weight: 600;
    color: #1da59a;
}
.client-box .client-desc ul li:not(:first-child)::after {
        content: "|";
    position: absolute;
    left: -2px;
    top: 0;
}
.clients img {
    position: absolute;
    bottom:20px;
    right: 0;
    width: 80px;
    transform: rotatex(
180deg
);
filter: invert(50%) sepia(93%) saturate(363%) hue-rotate(126deg) brightness(89%) contrast(91%);
}
.clients img:nth-child(2) {
      position: absolute;
    bottom: auto;
    left: 0;
    top: 0;
    width: 200px;
       transform: rotate( 
-180deg
 );
 filter: none;
}
@media (max-width:991px) {

    .clients img,.clients img:nth-child(2) {
        width: 50px;
    }

}
.clients .sec-title p {
    color: black;
}
</style>