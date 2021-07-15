<template>
       <div v-if="blogData != null" class="container">
               <div class="row">
                   <div class="col-12">
                      <div class="sec-title mb-5 text-center">
                           <h2 class="pr-2">OUR BLOG
                               <span></span>
                           </h2>
                           <p>We are committed to providing our customers with exceptional service <br> while offering our employees the best training. </p>
                      </div>
                   </div>
                   <div v-for="(item,index) in blogData.homepage.blog" :key="index" class="col-lg-4 col-md-6 mx-auto col-sm-6 col-12">
                       <div class="blog-box">
                           <div class="blog-img" :style="{'background-image':'url(' + item.path + ')'}">
                           
                           </div>
                           <div class="blog-desc">
                               <div class="blog-detail">
                               <ul class="list-unstyled">
                                   <li><i class="fas fa-user"></i> BY {{item.writer | capitalize}}</li>
                                   <li><i class="fas fa-calendar-alt"></i> {{item.date | capitalize}}</li>
                               </ul>
                           </div>
                               <h2>{{item.title}}</h2> 
                               <h5>{{item.desc}}</h5>
                               <a class="" href="">READ MORE <i class="fad fa-chevron-double-right"></i></a>
                           </div>
                       </div>
                   </div>
                
               </div>
           </div>
</template>
<script>
export default {
    props:['blogData'],
    data() {
        return {
           
        }
    }
}
</script>
<style scoped>
.blog-box .blog-img {
   width: 100%;
   height: 250px;
   background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    position: relative;
}
.blog-detail {
background-color: #f49522;
    padding: 12px 0;
    position: relative;
    margin-top: -20px;

    /* position: absolute;
    padding: 12px 0;
    width: 80%;
    bottom: -20px;
    left: 50%;
    transform: translatex(-50%); */

}

.blog-detail ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    align-items: center;
    margin-bottom: 0;
 
}

.blog-detail ul li {
    padding:0 10px;
    position: relative;
    font-size: 13px;
    font-weight: 600;
    color: black;
}
.blog-detail ul li i {
    margin-right: 5px;
}
.blog-detail ul li:not(:first-child)::after {
        content: "|";
    position: absolute;
    left: -2px;
    top: 0;
}
.blog-desc {
       background-color: #191919;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
       padding: 0 30px 0;
}
.blog-desc > * {
    width: 100%;
      padding: 15px 0;
      text-align: center;
}
.blog-desc h5 {
color: #1da59a;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0;
  
    padding: 0;
    margin-bottom:15px;
    overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}
.blog-desc h2 {
    color:white;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 0;
}
.blog-desc a {
    color: grey;
    text-decoration: none;
    font-size: 14px; 
    font-weight: bold;
      border-top: 1px solid #383737;
      transition: .3s;
}
.blog-desc a i {
    margin-left: 5px;
    color: #f49522;
}
.blog-desc a:hover {
  color: #f49522;
}
.blog-box {
        box-shadow: 0px 0px 13px 3px #0000006b;
        margin-bottom: 20px;
}
</style>