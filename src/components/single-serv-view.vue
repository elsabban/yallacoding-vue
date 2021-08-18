<template>
<div class="col-lg-8 col-12">
     <div v-if="servData === undefined" class="not-found" style="">
        <h2><span>Sorry</span>, something went wrong </h2>
    </div>
      <div v-if="servData != null" >
                    <div class="serv-right">
                        <div class="serv-img">
                            <img :src="servData.path" class="img-fluid" alt="" srcset="">
                        </div>
                    </div>
                    <div class="serv-content">
                        <h3>{{servData.title}}</h3>
                        <P> {{servData.desc[0]}}</P>
                        <div class="serv-steps">
                            <img src="src/assets/img/9.jpg" class="img-fluid" alt="">
                            <div class="steps">
                                <h5>PLANNING & STRATEGY</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <ul class="list-unstyled">
                                    <li v-for="(item,index) in servData.steps" :key="index"><i class="fad fa-check"></i> {{item}}</li>
                                  
                                </ul>
                            </div>
                        </div>
                        <p class="mt-5">{{servData.desc[1]}} <br><br>

                            {{servData.desc[2]}}</p>
                    </div>

                </div>

</div>
</template>
<script>
export default {
     mounted() {
        this.$store.dispatch('getSingleServ', this.$route.params.id)
    },
    // props:['servData'],
    computed: {
        servData() {
            console.log(this.$store.getters.singleServ)
            return this.$store.getters.singleServ
        }
    },
}
</script>
<style scoped>

</style>