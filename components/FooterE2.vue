<template>
 <div> <div class="footer-logo">
    <img src="../static/Img/Group197.svg" alt="" id="line-footer" />
    <img src="../static/Img/Group195.svg" alt=""  class="footer-logo-img"/>
    <img src="../static/Img/Group197.svg" alt="" id="line-footer" />
  </div>

  <div class="footer">
    <div class="footer_box">
      <div class="footer-inner">
        <div class="info custom-menu">
          <h3 class="label" >SHOP</h3>
          <div class="mobile-view">
            <ul>
              <li><a href="#" class="">Men</a></li>
              <li><a href="#" class=""> Woman</a></li>
              <li><a href="#" class="">Home</a></li>
              <li><a href="#" class="">Sale</a></li>
              <li><a href="#" class="">Collection</a></li>
            </ul>
          </div>
        </div>
        <div class="info custom-menu">
          <h3 class="label">QUICK LINKS</h3>
          <div class="mobile-view">
            <ul>
              <li><a href="#">Ahujasons Export</a></li>
              <li><a href="#"> Ahujasons Wholesale</a></li>
              <li><a href="#">Legacy </a></li>
              <li><a href="#">Craftsman ship</a></li>
              <li><a href="#">Our Store</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
        </div>
        <div class="info custom-menu">
          <h3 class="label">CUSTOMER SERVICE</h3>
          <div class="mobile-view">
            <ul>
              <li><a href="#">Terms and Condition</a></li>
              <li><a href="#"> Shipping & Delivery</a></li>
              <li><a href="#">Returns & Cancellation</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Store appointment</a></li>
            </ul>
          </div>
        </div>
        <div class="info custom-menu" id="follow">
          <h3 class="label">MY PROFILE</h3>
          <div class="mobile-view">
            <ul>
              <li><a href="#">My Account </a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">My Cart</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Order History </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_subscribe">
      <h3 class="label">SIGN UP AND SAVE</h3>
      <h4>Subscribe to our newsletter and get 10% off your first purchase</h4>
      <input type="text" name="" id="" placeholder="Enter your email" />
      <button>Subscribe</button>
      <hr />
      <p>GIVE US A FOLLOW</p>
      <img src="../static/Img/facebook.png" alt="" />
      <img src="../static/Img/instagram.png" alt="" />
      <img src="../static/Img/twitter.png" alt="" />
      <img src="../static/Img/linkedin.png" alt="" />
      <img src="../static/Img/pinterest.png" alt="" />
      <img src="../static/Img/youtube.png" alt="" />
      <p id="copyright">
        Copyright © 2021 by Ahujasons | Powered by GreenHonchos
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:"FooterE",
}
</script>

<style>
.footer-logo {
  display: flex;
}
#line-footer {
  width: 44%;
  margin: 0px 20px;
}
.footer_subscribe h3 {
  font-weight: 500;
}
.footer_subscribe p {
  margin-top: 50px;
  margin-bottom: 18px;
}
.footer_subscribe button {
  border: 0;
  background-color: #fff;
  font-size: 16px;
}
.footer_subscribe h4 {
  margin-top: 18px;
  margin-bottom: 22px;
  font-weight: 500;
}
.footer_subscribe input {
  border: 0;
  width: 330px;
}
.footer_subscribe img {
  width: 27.53px;
  height: 22.43px;
  margin-right: 30px;
}
.footer_subscribe {
  margin-top: 37px;
}
.footer {
  display: flex;
  margin-top: 40px;
}
.footer_box {
  width: 65%;
}
.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  justify-content: space-around;
  margin: 37px 39px 8px 0px;
}
.footer-inner .info h3 {
  color: #242424;
  font-weight: 500;
  font-family: "dosis";
  font-size: 16px;
}
.footer-inner .info .mobile-view ul li {
  list-style: none;
  padding-top: 9%;
  margin-left: 0;
}
.footer-inner .info .mobile-view ul li a {
  text-decoration: none;
  color: #242424;
  font-family: "dosis";
}
#copyright {
  margin-top: 90px;
}
@media screen and (max-width: 1023px){
    #line-footer {
        width: 41%;
    }
    .footer_subscribe{
    display: none;
}
  .footer_box{
  width: 100%;
 } 
 .footer_subscribe{
  width: 100%;
 }
 .footer{
  flex-direction: column;
 }
}
@media screen and (max-width: 426px){
    .footer-logo{
    display: none
  }
  .footer-logo-img{
    width: 84px;
  }
  #line-footer{
    width: 28%;
  }
  #copyright {
    margin-top: 36px;
    margin-bottom: 56px;
}
  
}
</style>