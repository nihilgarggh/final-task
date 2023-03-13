<template>
  <div class="fullNav">
  <div class="top">
    <div class="top-left">
      <p>COMPLIMENTARY GIFT BOX PACKING ON ALL PRE-PAID ORDERS</p>
    </div>
    <div class="top-right">
      <img src="../static/Img/india.png" alt="" />
      <a href="#"
        >IND
        <img src="../static/Img/down-arrow.png" alt="" />
      </a>
      <a href="#">OUR STORES</a>
      <a href="#">MY ACCOUNT</a>
      <a href="#">BLOG</a>
    </div>
  </div>
  <!-- TOP NAVBAR -->
  <div class="navbar">
    <div class="toggle_navbar laptop_view">
      <img src="../static/Img/toggle.svg" alt="" class="side_menu">
      <img src="../static/Img/smallLogo.png" alt="" class="logo_tablet">

    </div>
    <a href="#" class="mobile_view"
      >WOMEN
      <img
        src="../static/Img/down-arrow.png"
        alt=""
        class="links_down_arrow"
      />
    </a>
    <a href="#" class="mobile_view"
      >MEN
      <img
        src="../static/Img/down-arrow.png"
        alt=""
        class="links_down_arrow"
      />
    </a>

    <a href="#" class="mobile_view">SALE</a>
    <a href="#" class="mobile_view"
      >COLLECTION
      <img
        src="../static/Img/down-arrow.png"
        alt=""
        class="links_down_arrow"
      />
    </a>
    <img
      src="../static/Img/Group2.png"
      alt="image not found"
      class="mobile_view"
    />
    <a href="#" class="mobile_view"
      >OUR STORY
      <img
        src="../static/Img/down-arrow.png"
        alt=""
        class="links_down_arrow"
      />
    </a>
    <a href="#" class="mobile_view">CRAFTSMANSHIP</a>

    <div class="login-bag-fav">
      <a href="#"><img src="../static/Img/search.svg" alt="" /></a>
      <a href="#"><img src="../static/Img/Heart.svg" alt="" /></a>
      <a href="#">
        <img src="../static/Img/shopping-bag.svg" alt="" class="shopping_bag"/>
        <span class="counter-number">3</span>
        </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
name:"NavBar"
}
</script>

<style>
.fullNav{
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  padding-bottom: 10px;
}
.shopping_bag {
  position: absolute;
}
.top {
  display: flex;
  justify-content: space-between;
  font-family: "jost-regular";
  padding-left: 16px;
  padding-right: 16px;
}
.top-left {
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 10px 0px;
}
.top-right {
  font-size: 12px;
  display: flex;
  align-items: center;
}
.top-right select {
  margin: 0 10px 0 10px;
  border: 0;
  outline: 0;
  font-size: 12px;
}
.top-right a {
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  text-decoration: none;
  color: #303030;
}
.top-right img {
  height: 18px;
  width: 21px;
}
.line {
  border: 1px solid #3030301a;
  width: 94%;
  text-align: center;
  margin-left: 2%;
}
.navbar {
  display: flex;
  font-family: "jost-medium";
  justify-content: space-around;
  align-items: center;
  margin: 24px 0 24px 0;
  padding-top: 10px;
}
.navbar select {
  font-weight: bold;
}
.navbar a {
  font-weight: bold;
  font-size: 16px;
}
.login-bag-fav {
  display: flex;
  justify-content: space-between;
  width: 8%;
}
.laptop_view{
  display: none;
}
.links_down_arrow {
  width: 10.92px;
  height: 11.95px;
}
span.counter-number {
  width: 12px;
  height: 12px;
  background: #4c0b36;
  color: #fff;
  padding: 3px;
  border-radius: 15px;
  top: 50%;
  font-family: "Jost-medium";
  right: -20px;
  text-align: center;
  font-size: 11px;
  line-height: 11px;
  position: relative;
}
a {
  text-decoration: none;
  color: #303030;
}


@media screen and (max-width: 1023px){
    .side_menu{
    width: 16%;
  }
    .navbar {
    justify-content: space-between;
  }
  .toggle_navbar{
    display: flex;
    margin-left: 5%;
    justify-content: space-between;
}
.laptop_view{
    display: flex;
    width: 20%;  }
  .login-bag-fav {
    display: flex;
    justify-content: space-between;
    width: 15%;
    margin-right: 5%;
}
.logo_tablet{
    width: 45%;
  }
  .mobile_view {
    display: none;
  }
}
@media screen and (max-width: 767px){
  .top{
    display: none;
  }
  .top_line{
    display: none;
  }
 

}
@media screen and (max-width: 426px){
    .side_menu {
    width: 30%;
}
.logo_tablet {
    width: 71%;
    margin-left: 30px;
}
.toggle_navbar{
  width: 25%;
  display: flex;
}
.login-bag-fav {
  width: 24%;
  margin-right: 8%;

}
}
</style>