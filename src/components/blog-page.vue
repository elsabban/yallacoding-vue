<template>
    <div>
          <intro-sec pageTitle="BLOG"></intro-sec>
          <section v-if="this.$store.getters.blogData != null" class="blog">
               <blog-sec :blogData="blogData"></blog-sec>
        </section> 
    </div>
</template>
<script>
import introSec from './common/intro.vue'
import blogSec from './home/blog.vue'
export default {
    components:{
        introSec,
        blogSec
    },
    created() {
        this.$store.dispatch('getBlogData','blog')
        // this.$store.dispatch('detectSection')
    },
     computed:{
        blogData() {
                 return this.$store.getters.blogData.posts
            
        }
    },
    
}
</script>
<style scoped>

</style>