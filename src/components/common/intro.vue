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

</style>