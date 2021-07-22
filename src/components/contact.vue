<template>
    <div>
        <section class="intro">
            <div class="img-holder" style="background-image:url(src/assets/img/webapp.jpg)"></div>
        </section>
        <section class="contact-page pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-lg-4 col-md-6">
                 <div class="contact-detail">
                     <h6>GET IN TOUCH !</h6>
                     <h2>Contact Us</h2>
                     <P>“Don’t be a stranger, just say hello”</P>
                     <h6>Phone :</h6>
                     <a href="tel:0123456789"><i class="fas fa-phone-square"></i> 0123456789</a><br>
                     <a href="tel:0123456789"><i class="fas fa-phone-square"></i> 0123456789</a>
                     <h6>Mail :</h6>
                     <a href="mailto:#"><i class="fas fa-envelope"></i> info@yalla-coding.com</a>
                     <h6>Location :</h6>
                     <a href="#"><i class="fas fa-map-marked-alt"></i> 14 elsedeeq st,tomanpay, el zaiton</a>
                     <h6>Follow Us :</h6>
                     <ul class="list-unstyled contact-social">
                            <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href=""><i class="fab fa-twitter"></i></a></li>
                            <li><a href=""><i class="fab fa-instagram"></i></a></li>
                            <li><a href=""><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                 </div>
            </div>
            <div class="col-12 col-sm-12 col-lg-8 col-md-6">
                <div class="form-sec mt-sm-3" style="">
                    <div class="form-head">
                    <h2>Drop Us a Line</h2>
                    <p>If you have any questions, just fill in the contact form, and we will answer you shortly.</p>
                </div>
                 <form action="#">
                     <div class="row">
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="wrapper">
                            <label for="name">First-Name :</label>
                            <input type="text" placeholder="Ex:abdo *">
                            <div class="under-line"></div>
                        </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="wrapper">
                            <label for="name">Last-Name :</label>
                            <input type="text" placeholder="Ex:sayed *">
                            <div class="under-line"></div>
                        </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="wrapper">
                            <label for="name">Phone number :</label>
                            <input type="text" placeholder="Ex:012345678 *">
                            <div class="under-line"></div>
                        </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6">
                            <div class="wrapper">
                            <label for="name">E-mail :</label>
                            <input type="text" placeholder="Ex:example@gmail.com *">
                            <div class="under-line"></div>
                        </div>
                        </div>
                        
                        <div class="col-12 ">
                            <div class="wrapper r">
                            <label for="name">Message :</label>
                            <textarea placeholder="Enter your message"></textarea>
                            <div class="under-line"></div>
                        </div>
                        </div>
                     </div>
                     <div class="form-btn">
                         <button type="submit" class="btn btn-custom">Send.</button>
                     </div>
                 </form>
                 
                 
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
label {
 
    color: #dc851e;
}
 ul.contact-social {
    display: flex;
    justify-content: baseline;
    align-self: baseline;
    align-items: center;
    flex-direction: row;
    margin: 15px 0;
   
}
ul.contact-social li {
    margin: 0 5px 5px;
    
   
 
}
ul.contact-social li a {
    color: white;
        width: 30px;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    text-decoration: none;
    background-color: #353535;
 border-radius: 50%;
 transition: 0.3s;
}
ul.contact-social li a:hover {
  color: #f49522;
}
.contact-detail > h6 {
    color:white
}
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