<template>
    <div>
<NavBar />
<div class="add"><h5 class="address">Home / </h5> <h5 class="productNameAdd">{{ productName }} </h5></div>
<div class="cartWishlistButtonsForTab">
            <div >
                <button class="wishlist"><img src="../static/Img/heart.png" alt="" class="wishlistImage"> <span style="margin-left: 5px;"> WISHLIST</span></button>
            </div>
            <div >
                <button class="addToCart"><img src="../static/Img/shopping-bag.png" class="addToCartImage" alt=""><span>ADD TO CART</span></button>
            </div>
        </div>
        
        
<div class="imageDesc">
    <div class="productImagesDiv">
        <LightGallery v-if="PdpProduct.name" :images="PdpProduct.gallery" />
        <!-- <img :src="gallery.image" alt="" v-for="(gallery, index_image) in productImages" :key="index_image"> -->
    </div>

    <div>
        <!-- <img :src="image" alt="" class="mobileImg"> -->
        
    </div>
        <div class="productDescriptionDiv">
        <h1 class="productName">{{ productName }}</h1>
        <p class="SKU">SKU : {{ productSKU  }}</p>
        <div class="prices">
            <h3 class="sellingPrice"> ₹{{ sellingPrice }}</h3>
            <h4 class="originalPrice" v-if="sellingPrice<price">₹{{ price }}</h4>
        </div>
        <p class="inclTax">inclusive of all taxes</p>
        <div class="cartWishlistButtons">
            <button class="addToCartButton"><img src="../static/Img/cart-header.svg" class="addToCartImage" alt="">ADD TO CART</button>
            <button class="wishlistButton"><img src="../static/Img/heart.png" alt="" class="wishlistImage"> <span style="margin-left: 5px;"> WISHLIST</span></button>
        </div>
        <div class="delivery">
        <label class="deliveryLabel">DELIVERY PIN</label>
        <input type="text" maxlength="6" placeholder="CHECK PINCODE" class="pincodeInput">
    </div>
        <div class="desc">
            <p class="made">MADE IN INDIA</p>
            <br>
            <span class="ahuja">Ahujasons has been authorized to use "Kashmir Pashmina" Geographical Indication (GI) certification by Government of India.</span>
            <div>
            <span class="detailsheader">PRODUCT DETAILS</span>
            <br>
            <p class="details">A handloom pure pashmina shawl in rustic brown colour with intricate Sozni hand embroidery Ambi Jaal is a luxurious and timeless piece of art. The soft, 100% premium pure pashmina wool adds to the warmth and comfort that this shawl provides. The intricate Sozni embroidery Ambi Jaal patterns are artfully created by a traditional technique that uses coloured silk thread, making it a unique and special creation. The rustic brown colour adds a subtle and elegant look while the intricate embroidery brings out the beauty of the pashmina wool. This beautiful shawl is perfect for any special occasion or just to add a touch of class and elegance to any outfit.</p>
            <br>
        </div>
        </div>
       
        <div class="active"  id="detailsDiv">
        <div id="div1">
            <div class="detailshead">
                <h5> Fabric</h5>
                <p>{{ fabric }}</p>
            </div>
            <div class="detailshead">
                <h5>Fit</h5>
                <p>{{ fit }}</p>
            </div>
        </div>
        <div id="div1">
            <div class="detailshead">
                <h5> Color </h5>
                <p>{{ color }}</p>
            </div>
            <div class="detailshead">
                <h5>Length</h5>
                <p>{{ length }}</p>
            </div>
        </div>
            
        
       
        
    </div>
        <button class="detailsBtn inActive" id="closeBtn" @click="detailsClose()">More Details</button>
        <button class="detailsBtn active" id="openBtn" @click="detailsClose()">Less Details</button>
    </div>
    
</div>
<div>
    <div class="similar-product-container">
                <div class="container-title">Similar Product</div>
                <SlickCarosual v-if="PdpProduct.name" :PdpProduct="PdpProduct" />
            </div>
  </div>
<FooterE/>
</div>

</template>

<script>

import apiCall from "~/mixins/apiCall";
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import LightGallery from './LightGallery.vue'


export default {
name:"PDP",
components: {
    VueSlickCarousel,
    LightGallery
  },
  data() {
    return {
        image:'',
        urlKey: this.$route.params.name,
        product_list:[],
        productImages:[],
        productName:'',
        productSKU:'',
        sellingPrice:'',
        price:'',
        fabric:'',
        color:'',
        fit:'',
        length:'',
        similar_products:[],
        PdpProduct:{},
    }
  },
  mixins: [apiCall],
  mounted(){
    this.get_product();
  },
  methods:{
    detailsClose() {
      const ele = document.getElementById("detailsDiv");
      if (ele.classList.value == "inActive") {
        ele.classList.remove("inActive");
        ele.classList.add("active");
      } else {
        ele.classList.add("inActive");
        ele.classList.remove("active");
      }
      const btn =document.getElementById("openBtn");
        if (btn.classList.value.includes("inActive")) {
        btn.classList.remove("inActive");
        btn.classList.add("active");
      } else {
        btn.classList.add("inActive");
        btn.classList.remove("active");
      }
      const btn1 =document.getElementById("closeBtn");
        if (btn1.classList.value.includes("inActive")) {
        btn1.classList.remove("inActive");
        btn1.classList.add("active");
      } else {
        btn1.classList.add("inActive");
        btn1.classList.remove("active");
      }
    },
    bodyRequest() {
      const body = {
        service:"product",
        store:1,
        url_key: this.urlKey,

      };
      return body;
    },
    async get_product() {
      let request = "https://pim.wforwoman.com/pim/pimresponse.php/";
      const body = this.bodyRequest();
      console.log("get product");
      const response = await this.get_axios(request, body);
      if (response) {
        console.log(response);
        this.image=response.data.result.image;
        this.productImages=response.data.result.gallery;
        this.productName=response.data.result.name;
        this.productSKU=response.data.result.sku;
        this.sellingPrice=response.data.result.selling_price;
        this.price=response.data.result.price;
        this.fabric=response.data.result.fabric_family;
        this.color=response.data.result.color;
        this.fit=response.data.result.fit;
        this.length=response.data.result.length;
        this.similar_products=response.data.result.bestseller_products;
        this.PdpProduct=response.data.result;
      }
      console.log(response);
      console.log("hiihihioh");
    },
  }
}
</script>

<style>
.delivery{
    margin-top: 10px;
    border-top: 1px solid #eae8e8;
    margin-right: 40px;
    display: grid;
}
.incltax{
    color: #000;
    font-size: 14px;
    display: block;
    margin: 0 10px 0 0;
    font-family: "Jost-medium";
}
.productNameAdd{
    font-size: 12px;
    font-family: "Jost-medium";
}
.add{
    display: flex;
    align-items: center;
}
.mobileImg{
display: none;
}
.similar-product-container {
    padding: 30px 60px;
}
.container-title {
    text-align: center;
    padding: 10px 0px;
    font-size: 22px;
    color: #000;
}
.active{
    display: block;
}
.inActive{
    display: none;
}
.productDescriptionDiv{
    width: 50%;
    padding-left: 1.6%;
}
.productName{
    margin-top: 0;
    margin-bottom: 5px;
    line-height: 1;
    font-family: "Jost-regular";
    padding: 10px 20px 15px 0;
    font-size: 22px;
    font-weight: 500;
}
.SKU{
    font-size: 13px;
    padding: 10px 20px 15px 0;}
.prices{
    display: flex;
    align-items: baseline;
}
.sellingPrice{
    font-size: 35px;
    /* padding: 1%; */
    font-family: "jostbold";
    font-weight: 500;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    -webkit-text-size-adjust: 100%;
}
.originalPrice{
    color: #504f4f;
    text-decoration: line-through;
    text-decoration-color: red;
    padding-right: 1%;
    font-size: 18px;
    margin-left: 30px;
}
.cartWishlistButtonsForTab{
    display: none;
}
.cartWishlistButtons{
    display: flex;
    margin-top: 5%;
    margin-bottom: 7%;

}
.wishlistButton{
    width: 27%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    font-family: "Jost-medium";
    color: #000;
    border: 1px solid #c2c2c2;
    border-radius: 10px;
    margin-left: 20px;
    font-size: 12px;
}
.wishlistImage{
    width: 7%;
    margin-bottom: 3px;
}
.addToCartButton{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #501337;
    border-radius: 10px;
    font-size: 12px;
    color: #fff;
    border: 1px solid transparent;
    outline: none!important;
    max-width: 250px;
    height: 44px;
}
.addToCartImage{
    width: 7%;
    filter: brightness(0) invert(1);
    color: #000;
    font-size: 14px;
    display: block;
    margin: 0 10px 4px 0;
    font-family: "Jost-medium";
}
.desc{
    display: grid;
}
.deliveryLabel{
    font-size: 16px;
    text-transform: uppercase;
    font-family: "Jost-medium";
    color: #444;
    margin-top: 5%;
    display: inline-block;
    margin-bottom: 0.5rem
}
.pincodeInput{
    width: calc(63% - 72px);
    height: 40px;
    font-size: 14px;
    border: 1px solid #000;
    color: #333;
    border-radius: 0;
    outline: none;
    background: #fff;
    text-transform: uppercase;
    font-family: "Jost-medium";
    letter-spacing: .5px;
    padding: 0 15px;
    margin-top: 5px;
    margin-bottom: 20px;
}
.pincodeInput ::placeholder{
    font-family: "Jost-medium";

}
.imageDesc{
    display: flex;
}
.productImagesDiv{
    width: 60%;
    padding-left: 23px;
}
.productImagesDiv img{
    /* width: 50%; */
    padding: .5%;
}
.made{
    width: fit-content;
    padding: 0;
    color: #000;
    font-size: 14px;
    border-radius: 5px;
    float: left;
    margin-top: 20px;
    margin-right: 20px;
}
.ahuja{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    color: dimgrey;
    text-align: left;
}
.detailsheader{
    text-align: left;
    padding-right: 0;
    position: relative;
    color: #444;
    font-size: 15px;
    line-height: 1;
    margin-bottom: 0;
    font-family: "Jost-medium";
    text-transform: uppercase;
    margin-bottom:10px ;
}
.details{ 
    margin-bottom: 40px;
    font-size: 13px;
    letter-spacing: .75px;
    font-weight: 400;
    color: #757575;
    float: left;
    width: 100%;
    overflow: hidden;
    line-height: 1.5;
    padding-right: 36px;
    padding-top: 20px;
}
#detailsDiv h5{
    float: left;
    width: 100%;
    text-align: left;
    padding-right: 0;
    position: relative;
    color: #444;
    font-size: 15px;
    line-height: 1;
    margin-bottom: 5px;
    font-family: "Jost-medium"
}
#detailsDiv p{
    display: inline-block;
    vertical-align: top;
    position: relative;
    color: #757575;
    font-size: 14px;
    line-height: 1.5;
    font-family: "Jost-regular";
}
.address{
    color: #333;
    text-transform: capitalize;
    font-size: 12px;
    padding: 10px 5px 10px 25px;
}
#div1{
    display: flex;
    margin: 20px 0px;
}
.detailsBtn{
    cursor: pointer;
    margin-bottom: 0;
    font-size: 15px;
    color: #ee1010;
    clear: both;
    font-family: "Jost-regular";
    border: 0;
    background-color: #fff;
}
.detailshead{
    margin-right: 70px
}
@media screen and (max-width: 1023px){
    .productImagesDiv{
        width: 50%;
        padding: 0;
    }
    .one-image-container22 {
    flex: 0 0 50%;
    }
    .imageDesc{
        display: flex;
    }
.mobileImg{
    display: block  ;
    width: 100%;
}
.productDescriptionDiv {
    width: 50%;
    padding-left: 2.6%;
    margin-top: 20px;
}
.cartWishlistButtonsForTab{
    display: none;
}
hr{
    display: none;
}
.pincodeInput {
    width: calc(72% - 23px);
}
.similar-product-container {
    padding: 30px 0px;
}

.wishlist{
    background: #fff;
    font-family: "Jost-medium";
    color: #000;
    border: 1px solid #c2c2c2;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}
.addToCart{
    background: #501337;
    border-radius: 10px;
    height: 40px;
    color: white;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.addToCart img{
    width: 14%;
}
.wishlistImage {
    width: 11%;
}

}
@media screen and (max-width:426px) {
    .cartWishlistButtonsForTab{
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    z-index: 14;
    background: #ffff;
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: 100%;
    left: 0;
    padding: 10px 8px;
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
}
.cartWishlistButtons{
    display: none
}
.productImagesDiv{
    width: 100%
}
.productDescriptionDiv{
    width: 100%
}
.imageDesc{
    display: contents
}

    
};
</style>