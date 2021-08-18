<template>
<div v-if="clientData != null">

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
                <router-link :to="'/single-client/' + item.id" v-slot="{ navigate,href}" custom>
                    <a :href="href" @click="navigate">
                        <div class="client-box">
                            <div class="client-img" :style="{ 'background-image': 'url(' + item.path + ')' }"></div>
                            <div class="client-desc">
                                <h5>{{item.title}}</h5>
                                <ul class="list-unstyled">
                                    <li v-for="(itemTech,index) in item.tech" :key="index">{{itemTech}}</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </router-link>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ["clientData"],

}
</script>

<style scoped>

</style>
