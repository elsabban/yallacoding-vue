<template>
    <div>
        <section class="intro">
            <div class="img-holder" style="background-image:url(src/assets/img/webapp.jpg)"></div>
        </section>
    </div>
</template>
<script>
export default {
    
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
</style>