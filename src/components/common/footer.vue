<template>
    <footer style=" background-image: url('src/assets/img/footer-bg.png');">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6 col-12">
                    <div class="f1">
                        <img src="src/assets/img/logo.png" alt="">
                        <p>Welcome to our web design agency. Lorem ipsum simply free text dolor sited amet cons cing elit.</p>
                        <ul class="list-unstyled">
                            <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href=""><i class="fab fa-twitter"></i></a></li>
                            <li><a href=""><i class="fab fa-instagram"></i></a></li>
                            <li><a href=""><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                    <div class="f2">
                        <h2>EXPLORE</h2>
                        <ul class="list-unstyled">
                            <li><a href=""><i class="fad fa-chevron-double-right"></i>Home</a></li>
                            <li><a href=""><i class="fad fa-chevron-double-right"></i>About Us</a></li>
                            <li><a href=""><i class="fad fa-chevron-double-right"></i>Services</a></li>
                            <li><a href=""><i class="fad fa-chevron-double-right"></i>Packages</a></li>
                            <li><a href=""><i class="fad fa-chevron-double-right"></i>Plog</a></li>
                            <li><a href=""><i class="fad fa-chevron-double-right"></i>web development</a></li>
                            <li><a href=""><i class="fad fa-chevron-double-right"></i>mobile app</a></li>
                            <li><a href=""><i class="fad fa-chevron-double-right"></i>digital marketing</a></li>
                            <li><a href=""><i class="fad fa-chevron-double-right"></i>pos systems</a></li>
                            <li><a href=""><i class="fad fa-chevron-double-right"></i>Contact</a></li>
                           
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                    <div class="f3">
                        <h2>CONTACT</h2>
                        <ul class="list-unstyled">
                            <li><a href=""><i class="fas fa-map-marker-alt"></i> 14 elsedeeq st,tomanpay, el zaiton</a></li>
                            <li><a href="tel:+01114095210"><i class="fas fa-mobile"></i> 01114095210</a><li>
                            <li><a href="tel:+01552731175"><i class="fas fa-mobile"></i>01552731175</a><li>
                            <li><a href="mailto:info@yalla-coding.com"><i class="fas fa-envelope"></i>info@yalla-coding.com</a></li>

                        </ul>
                    </div>
                </div>
                <div class="col-12">
                    <div class="last-sec">
                        <h6>© copyright 2021 by YALLA CODING TEAM</h6>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.last-sec h6{
    color: white;
    padding: 30px 0;
    border-top: 1px solid rgb(66, 66, 66);
    margin-top: 100px;
    text-align: center;
    margin-bottom: 0;
}
.f1 img {
    width: 100px;
}
.f1 p {
    color:white;

}
.f1 > * {
    margin:15px 0;
    
}
.f1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:baseline;
    align-self: center;
}
footer {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #17181b;
    padding: 120px 0 0;
}
.f1 ul {
    display: flex;
    justify-content: baseline;
    align-self: baseline;
    align-items: center;
    flex-direction: row;
    margin: 15px 0;
   
}
.f1 ul li {
    margin: 0 5px 5px;
    
   
 
}
.f1 ul li a {
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
.f1 ul li a:hover {
  color: #f49522;
}
/* .f2 > * {
    margin: 15px 0;
} */

.f2 h2,.f3 h2{
    color: white;
    font-size: 25px;
    font-weight: bold;
    height: 100px;
    display: flex;
    align-items: center;
    align-self: center;

}
.f2 ul {
       columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
.f2 ul li a {
    color: white;
    transition: 0.3s;
    text-decoration: none;
}
.f2 ul li a i {
  color: #f49522;
  font-size: 14px;
  margin-right:8px ;
}
.f2 ul li a:hover {
 color: #f49522;
 }
  .f3 ul li {
      margin-bottom: 20px;
  }
 .f3 ul li a {
   color: white;
   transition: 0.3s;
 }
  .f3 ul li a:hover {
      color: #f49522;
  }
 .f3 ul li a i {
     color: #f49522;
     margin-right: 8px;
 }
</style>