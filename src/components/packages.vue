<template>
<div>
    <intro-sec pageTitle="PACKAGES"></intro-sec>
    <section class="pricing py-5">
        <div class="container">
            <div class="row">
                <!-- Free Tier -->
                <div class="col-lg-4">
                    <div class="card mb-5 mb-lg-0">
                        <!-- <img src="src/assets/img/up-curve.png" alt="">
                        <img src="src/assets/img/grey-curve.png" alt=""> -->
                        <img data-v-c39ebc44="" src="src/assets/img/yellow-curve.png" alt="">
                        <img data-v-c39ebc44="" src="src/assets/img/right-curve.png" alt="">
                        <div class="card-body">
                            <h5 class="card-title text-uppercase text-center">Free</h5>
                            <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                            <hr>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Private Projects</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
                            </ul>
                            <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
                        </div>
                    </div>
                </div>
                <!-- Plus Tier -->
                <div class="col-lg-4">
                    <div class="card mb-5 mb-lg-0">
                        <img data-v-c39ebc44="" src="src/assets/img/yellow-curve.png" alt="">
                        <img data-v-c39ebc44="" src="src/assets/img/right-curve.png" alt="">
                        <div class="card-body">
                            <h5 class="card-title  text-uppercase text-center">Plus</h5>
                            <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                            <hr>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
                                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
                            </ul>
                            <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
                        </div>
                    </div>
                </div>
                <!-- Pro Tier -->
                <div class="col-lg-4">
                    <div class="card">
                        <img data-v-c39ebc44="" src="src/assets/img/yellow-curve.png" alt="">
                        <img data-v-c39ebc44="" src="src/assets/img/right-curve.png" alt="">
                        <div class="card-body">
                            <h5 class="card-title  text-uppercase text-center">Pro</h5>
                            <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
                            <hr>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong></li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
                            </ul>
                            <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import introSec from './common/intro.vue'
export default {
    components: {
        introSec
    }
}
</script>

<style scoped>
.card>img {
    position: absolute;
    bottom: auto;
    left: 0;
    top: 0;
    width: 120px;
    transform: rotate(-180deg);
    filter: none;

}

.card>img:nth-child(2) {
    position: absolute;
    bottom: 52px;
    top: auto;
    z-index: 0;
    right: 0;
    left: auto;
    width: 46px;
    transform: rotatex(180deg);
    filter: invert(50%) sepia(93%) saturate(363%) hue-rotate(126deg) brightness(89%) contrast(91%);
}

.btn {
    background-color: #f49421;
    transition: 0.3s;
    border: none;
}

.btn:hover {
    background-color: #c07519;
}

.card-title {
    color: #19a79d;
    opacity: 0.7;
}

.pricing .card {
    border: none;
    border-radius: 1rem;
    transition: all 0.2s;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    background-color: black;
    color: white;
    overflow: hidden;
}

span i {
    color: #19a79d;
}

.pricing hr {
    margin: 1.5rem 0;
    border-top: 1px solid rgb(238 145 33);
}

.pricing .card-title {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    letter-spacing: .1rem;
    font-weight: bold;
}

.pricing .card-price {
    font-size: 3rem;
    margin: 0;
}

.pricing .card-price .period {
    font-size: 0.8rem;
}

.pricing ul li {
    margin-bottom: 1rem;
}

.pricing .text-muted {
    opacity: 0.7;
}

.pricing .btn {
    font-size: 80%;
    border-radius: 5rem;
    letter-spacing: .1rem;
    font-weight: bold;
    padding: 1rem;
    position: relative;
    transition: all 0.2s;
}

/* Hover Effects on Card */

@media (min-width: 992px) {
    .pricing .card:hover {
        margin-top: -.25rem;
        margin-bottom: .25rem;
        box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
    }

    .pricing .card:hover .btn {
        opacity: 1;
    }
}
</style>
