<template>
<section class="blog-single">
    <intro-sec pageTitle="BLOG"></intro-sec>
     <div v-if="postCheck === undefined" class="not-found" style="">
        <h2><span>Sorry</span>, something went wrong </h2>
    </div>
    <div v-if="postCheck != null" class="container">
        <div class="row">
            <!-- Latest Posts -->
            <div class="col-12 text-center my-5">
                <h1>{{postData.post.title}}</h1>
            </div>
            <main class="post blog-post col-lg-8">
                <div class="container">
                    <div class="post-single">
                        <div class="post-thumbnail"><img :src="postData.post.path" alt="..." class="img-fluid"></div>
                        <div class="post-details">
                            <div class="post-meta d-flex justify-content-between">
                                <div class="category">
                                    <a href="#" v-for="(item,index) in postData.post.tags" :key="index">{{item}}</a>
                                    </div>
                            </div>
                            <h1>{{postData.post.title}}</h1>
                            <div class="post-footer d-flex align-items-center flex-column flex-sm-row"><a href="#" class="author d-flex align-items-center flex-wrap">
                                    <div class="avatar"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/avatar-1.jpg" alt="..." class="img-fluid"></div>
                                    <div class="title"><span>{{postData.post.writer}}</span></div>
                                </a>
                                <div class="d-flex align-items-center flex-wrap">
                                    <div class="date"><i class="icon-clock"></i> {{ postData.post.date}}</div>
                                    <div class="views"><i class="fas fa-eye"></i> {{postData.post.views}}</div>
                                    <div class="comments meta-last"><i class="fas fa-comment"></i>{{postData.post.comments.length}}</div>
                                </div>
                            </div>
                            <div v-dompurify-html="postData.post.body" class="post-body">
                                <!-- {{postData.body}} -->
                            </div>
                            <div  class="post-tags">
                                <a href="#" v-for="(item,index) in postData.post.tags" :key="index" class="tag">#{{item}}</a>
                                
                            </div>
                            <div class="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row"><a href="#" class="prev-post text-left d-flex align-items-center">
                                    <div class="icon prev"><i class="fa fa-angle-left"></i></div>
                                    <div class="text"><strong class="text-primary">Previous Post </strong>
                                        <h6>DIGITAL MARKETING</h6>
                                    </div>
                                </a><a href="#" class="next-post text-right d-flex align-items-center justify-content-end">
                                    <div class="text"><strong class="text-primary">Next Post </strong>
                                        <h6>DIGITAL AGENCY</h6>
                                    </div>
                                    <div class="icon next"><i class="fa fa-angle-right"> </i></div>
                                </a></div>
                            <div class="post-comments">
                                <header>
                                    <h3 class="h6">Post Comments<span class="no-of-comments">({{postData.post.comments.length}})</span></h3>
                                </header>
                                <div v-for="(item,index) in postData.post.comments" :key="index" class="comment">
                                    <div class="comment-header d-flex justify-content-between">
                                        <div class="user d-flex align-items-center">
                                            <div class="image"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/user.svg" alt="..." class="img-fluid rounded-circle"></div>
                                            <div class="title"><strong>{{item.name}}</strong><span class="date">{{item.date}}</span></div>
                                        </div>
                                    </div>
                                    <div class="comment-body">
                                        <p>{{item.content}}</p>
                                    </div>
                                </div>
                                <!-- <div class="comment">
                    <div class="comment-header d-flex justify-content-between">
                      <div class="user d-flex align-items-center">
                        <div class="image"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/user.svg" alt="..." class="img-fluid rounded-circle"></div>
                        <div class="title"><strong>Nikolas</strong><span class="date">May 2016</span></div>
                      </div>
                    </div>
                    <div class="comment-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </div>
                  <div class="comment">
                    <div class="comment-header d-flex justify-content-between">
                      <div class="user d-flex align-items-center">
                        <div class="image"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/user.svg" alt="..." class="img-fluid rounded-circle"></div>
                        <div class="title"><strong>John Doe</strong><span class="date">May 2016</span></div>
                      </div>
                    </div>
                    <div class="comment-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </div> -->
                            </div>
                            <div class="add-comment">
                                <header>
                                    <h3 class="h6">Leave a reply</h3>
                                </header>
                                <form action="#" class="commenting-form">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <input type="text" name="username" id="username" placeholder="Name" class="form-control">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="email" name="username" id="useremail" placeholder="Email Address (will not be published)" class="form-control">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <textarea name="usercomment" id="usercomment" placeholder="Type your comment" class="form-control"></textarea>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <button type="submit" class="btn btn-secondary">Submit Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <aside class="col-lg-4">
                <!-- Widget [Search Bar Widget]-->
                <div class="widget search">
                    <header>
                        <h3 class="h6">Search the blog</h3>
                    </header>
                    <form action="#" class="search-form">
                        <div class="form-group">
                            <input type="search" placeholder="What are you looking for?">
                            <button type="submit" class="submit"><i class="fas fa-search"></i></button>
                        </div>
                    </form>
                </div>
                <!-- Widget [Latest Posts Widget]-->
                <div class="widget latest-posts">
                    <header>
                        <h3 class="h6">Latest Posts</h3>
                    </header>
                    <div class="blog-posts">
                        <!-- <a href="#">
                            <div class="item d-flex align-items-center">
                                <div class="image"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/small-thumbnail-1.jpg" alt="..." class="img-fluid"></div>
                                <div class="title"><strong>Alberto Savoia Can Teach You About</strong>
                                    <div class="d-flex align-items-center">
                                        <div class="views"><i class="fas fa-eye"></i> 500</div>
                                        <div class="comments"><i class="fas fa-comment"></i>12</div>
                                    </div>
                                </div>
                            </div>
                        </a> -->
                        <router-link v-for="(item,index) in postData.latest" :key="index" :to="'/blog-single/' + item.id" v-slot="{ navigate,href}" custom>
                               <a  :href="href" @click="navigate">
                                   <div class="item d-flex align-items-center">
                                <div class="image" :style="{'background-image':'url('+item.path+')'}">
                                    <!-- <img :src="item.path" alt="..." class="img-fluid"> -->
                                    </div>
                                <div class="title"><strong>{{item.title}}</strong>
                                    <div class="d-flex align-items-center">
                                        <div class="views"><i class="fas fa-eye"></i> {{item.views}}</div>
                                        <div class="comments"><i class="fas fa-comment"></i>{{item.comments.length}}</div>
                                    </div>
                                </div>
                            </div>
                               </a>
                        </router-link>
                        <!-- <a href="#">
                            <div class="item d-flex align-items-center">
                                <div class="image"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/small-thumbnail-2.jpg" alt="..." class="img-fluid"></div>
                                <div class="title"><strong>Alberto Savoia Can Teach You About</strong>
                                    <div class="d-flex align-items-center">
                                        <div class="views"><i class="fas fa-eye"></i><i class="icon-eye"></i> 500</div>
                                        <div class="comments"><i class="fas fa-comment"></i>12</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div class="item d-flex align-items-center">
                                <div class="image"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/small-thumbnail-3.jpg" alt="..." class="img-fluid"></div>
                                <div class="title"><strong>Alberto Savoia Can Teach You About</strong>
                                    <div class="d-flex align-items-center">
                                        <div class="views"><i class="fas fa-eye"></i> 500</div>
                                        <div class="comments"><i class="fas fa-comment"></i>12</div>
                                    </div>
                                </div>
                            </div>
                        </a> -->
                        </div>
                </div>
                <!-- Widget [Categories Widget]-->
                <!-- <div class="widget categories">
                    <header>
                        <h3 class="h6">Categories</h3>
                    </header>
                    <div class="item d-flex justify-content-between"><a href="#">Growth</a><span>12</span></div>
                    <div class="item d-flex justify-content-between"><a href="#">Local</a><span>25</span></div>
                    <div class="item d-flex justify-content-between"><a href="#">Sales</a><span>8</span></div>
                    <div class="item d-flex justify-content-between"><a href="#">Tips</a><span>17</span></div>
                    <div class="item d-flex justify-content-between"><a href="#">Local</a><span>25</span></div>
                </div> -->
                <!-- Widget [Tags Cloud Widget]-->
                <div class="widget tags">
                    <header>
                        <h3 class="h6">Tags</h3>
                    </header>
                    <ul class="list-inline">
                        <li class="list-inline-item" v-for="(item,index) in postData.tags" :key="index"><a href="#" class="tag">#{{item}}</a></li>
                        <!-- <li class="list-inline-item"><a href="#" class="tag">#Technology</a></li>
                        <li class="list-inline-item"><a href="#" class="tag">#Fashion</a></li>
                        <li class="list-inline-item"><a href="#" class="tag">#Sports</a></li>
                        <li class="list-inline-item"><a href="#" class="tag">#Economy</a></li> -->
                    </ul>
                </div>
            </aside>
        </div>
    </div>
</section>
</template>

<script>
import introSec from './common/intro.vue'
export default {
    components: {
        introSec,
    },
    mounted() {
        this.$store.dispatch('getSingleBlog', this.$route.params.id)
    },
    computed: {
        postData() {
            console.log(this.$store.getters.post)
            return this.$store.getters.post
        },
        postCheck() {
             console.log(this.$store.getters.postCheck)
            return this.$store.getters.postCheck
        }
    },
    watch:{
    $route (to, from){
    // hide homepage sections links
        if (to.params.id != from.params.id) {
           this.$store.dispatch('getSingleBlog', this.$route.params.id)
        }
    } 
    }

}
</script>

<style scoped>
.not-found {
    background: #1b1b1b;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold
}
.not-found span {
    color: red;
}
</style>
