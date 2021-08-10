<template>
    <section class="intro">
            <div class="img-holder" style="background-image:url(src/assets/img/webapp.jpg)">
            <div class="caption">
                <h4>{{pageTitle}}</h4>
            </div>
            </div>
        </section>
</template>
<script>
export default {
    props:['pageTitle']
}
</script>
<style scoped>
.intro .img-holder {
    width: 100%;
    height: 400px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.intro .img-holder::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgb(0, 0, 0);
    background: radial-gradient(circle, rgba(0, 0, 0, 0.8295693277310925) 0%, rgba(0, 0, 0, 0.8911939775910365) 100%);
}

.intro .caption {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: white;
    font-weight: bold;
    z-index: 1;
}
.intro .caption h4 {
    font-size: 39px;
    font-weight: bolder;
    letter-spacing: 8px;

}
@media (max-width:575px) {
    .intro .caption h4 {
    font-size: 20px;
  

}
}
</style>