<template>
  <!-- TOP -->
  <div>
    <NavBar />
  <!-- category count -->
  <div class="category-count">
    <p class="category_header">WOMEN TOP KURTAS</p>
    <p class="count_header">{{ product_count }} Items</p>
  </div>
  <!-- Filter and sort -->
  <div class="tab_filters">
    <div class="tab_sort">
      <button @click="showMobileSortOption()" class="action-button">
        <img class="action-image" src="../static/Img/sort.svg" alt="">
      <p>Sort By</p>
      </button>
    </div>
    <div class="tab_filter">
      <button  class="action-button" @click="showMobileFilterOption()">
        <img class="action-image" src="../static/Img/filter-mobile.svg" alt="">
      <p>Filters</p>
      </button>
    </div>
  </div>
<!-- sort options in mobile view -->
<div id="sortListMobile" style="display: none;">
  <div class="option container">
         <div class="sorting-value" @click="showMobileSortOption()">

          <ul class="sorting_list">
            <h3>SORT BY</h3>
            <li><button value="price_low" @click="sortBy($event)">Price (Low to High) </button></li>
            <li><button value="selling_price" @click="sortBy($event)">Price (High to Low)</button></li>
            <li><button value="discount" @click="sortBy($event)">Discount</button></li>
            <li><button value="product_position" @click="sortBy($event)">Newest</button></li>
          </ul>

         </div>
  </div>
</div>
<!-- filters for mobile -->
<div>




</div>

  <div class="filter_sort">
    <div class="applied_filter_list">
      <button class="hide_button" @click="hideFilter()">
        <img src="../static/Img/filter-icon.svg" alt="" />
        <p><b> HIDE FILTERS</b></p>
      </button>
      <div
        class="filters_name"
        v-if="Object.keys(this.applied_filter_list).length > 0"
      >
        <p
          v-for="(filter_applied, index) in Object.keys(
            this.applied_filter_list
          )"
          :key="index"
          @click="delete_filter(filter_applied)"
          id="filter_add"
        >
          {{ filter_applied }} x
        </p>
      </div>
    </div>
    <div>
      <select class="sort_select" @change="sortBy($event)">
        <option value="" disabled selected><b> SORT BY </b></option>
        <option value="price_low">Price (Low to High)</option>
        <option value="selling_price">Price (High to Low)</option>
        <option value="discount" name="sort_by">Discount</option>
        <option value="product_position">Newest</option>
      </select>
    </div>
  </div>
  <p
    @click="clear_all_filters"
    id="filter_add"
    v-if="Object.keys(this.applied_filter_list).length > 0"
    class="clear_all"
  >
    Clear All
  </p>

  <!-- lower body -->
  <div class="filters_products">
    <!-- Filters for mobile view -->
    <div class="mobile_view_filters" id="filterListMobile" style="display: none;">
      <div>
        <div class="filter_lable_div">

        <ul class="filter_header">
          <li
            v-for="(filter, index) in filter_list"
            :key="index"
            class="filterList"
          >
              <h6 class="filter_lable" @click="filterClose(index)">{{ filter.filter_lable }}</h6>
          </li>
        </ul>
      </div>
    </div>
  </div>



    <!-- <div class="filter_options_div"><ul :id="index" class="inActive">
              <li
                v-for="(options, id_filter) in filter.options"
                :key="id_filter"
                class="secondList"
              >
                <input
                  type="checkbox"
                  class="input-check"
                  :id="'checkB' + options.value"
                  name="checkB"
                  @click="apply_filter(options.code, options.value)"
                />
                {{ options.value }}
              </li>
            </ul>
          </div> -->
    <!-- accordion -->



    <div class="col-3" id="accordion">
      <div>
        <ul class="filter_header">
          <li
            v-for="(filter, index) in filter_list"
            :key="index"
            class="filterList"
          >
            <div
              class="name_img"
              @click="filterClose(index), choosePlusMinus(index)"
            >
              <h6 class="filter_lable">{{ filter.filter_lable }}</h6>
              <img
                src="../static/Img/plus.png"
                alt=""
                :id="'plus' + index"
                class="plus"
              />
              <img
                src="../static/Img/minus-sign.png"
                alt=""
                :id="'minus' + index"
                class="minus"
              />
            </div>
            <ul :id="index" class="inActive">
              <li
                v-for="(options, id_filter) in filter.options"
                :key="id_filter"
                class="secondList"
              >
                <input
                  type="checkbox"
                  class="input-check"
                  :id="'checkB' + options.value"
                  name="checkB"
                  @click="apply_filter(options.code, options.value)"
                />
                {{ options.value }}
              </li>
            </ul>
            <hr />
          </li>
        </ul>
      </div>
    </div>

    <!-- Card -->
    <div class="col-9" id="products">
      <div
        class="card"
        v-for="(products, index_p) in product_list"
        :key="index_p"
      >
      <NuxtLink :to="'/products/' + products.url_key">
        <img :src="products.image" alt="" class="card_img" />
        <p class="product_name">{{ products.name }}</p>
        <p class="price">Rs. {{ products.selling_price }}</p>
      </NuxtLink>
      </div>
    </div>
  </div>
  <div class="" id="pos">
    <img src="../static/Img/giphy.gif" alt="" />
  </div>
  <FooterE/>

</div>
  
</template>

<script>
import apiCall from "~/mixins/apiCall";

export default {
  name: "PLP",
  data() {
    return {
      page: 1,
      count: 20,
      product_list: [],
      filter_list: [],
      sort: "",
      product_count: "",
      applied_filter_list: {},
      add_filter_list: "",
      name: "",
      parent_name: "",
      totalPages: "",
      checkFilter: true,
      sort_by: "",
      sort_dir: "desc",
      isShowMobileOption: false,
    };
  },
  mixins: [apiCall],
  mounted() {
    this.get_product_list();
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight  >=
        document.documentElement.scrollHeight
      ) {
        this.autoscroll();
      }
    });
  },
  methods: {
    showMobileFilterOption(){
      let val= document.getElementById("filterListMobile")
      console.log(val);
      var styleOfEle = val.style["display"]
      console.log(styleOfEle);
      if(styleOfEle=="block"){
        val.style["display"]="none"
      }
      else if(styleOfEle=="none"){
        val.style["display"]="block"
      }
      console.log(styleOfEle);
    },
    showMobileSortOption(){
      let val= document.getElementById("sortListMobile")
      var styleOfEle = val.style["display"]
      console.log(styleOfEle);
      if(styleOfEle=="contents"){
        val.style["display"]="none"
      }
      else if(styleOfEle=="none"){
        val.style["display"]="contents"
      }
      console.log(styleOfEle);
    },
    sortBy(e) {
      let eVal = e.target.value;
      if (eVal == "price_low") {
        this.sort_by = "selling_price";
        this.sort_dir = "asc";
        this.get_product_list();
      } else if (eVal == "selling_price") {
        this.sort_by = "selling_price";
        this.sort_dir = "desc";
        this.get_product_list();
      } else if (eVal == "discount") {
        this.sort_by = "discount";
        this.sort_dir = "desc";
        this.get_product_list();
      } else if (eVal == "product_position") {
        this.sort_by = "product_position";
        this.sort_dir = "desc";
        this.get_product_list();
      } else {
        this.sort_by = "";
        this.sort_dir = "desc";
      }
    },
    choosePlusMinus(id) {
      let plus = document.getElementById("plus" + id);
      if (plus.classList.value == "plus") {
        plus.classList.remove("plus");
        plus.classList.add("minus");
      } else {
        plus.classList.remove("minus");
        plus.classList.add("plus");
      }
      const minus = document.getElementById("minus" + id);
      if (minus.classList.value == "minus") {
        minus.classList.remove("minus");
        minus.classList.add("plus");
      } else {
        minus.classList.remove("plus");
        minus.classList.add("minus");
      }
    },
    hideFilter() {
      const acc = document.getElementById("accordion");
      if (acc.classList.value == "accordion") {
        acc.classList.remove("accordion");
        acc.classList.add("col-3");
      } else {
        acc.classList.add("accordion");
        acc.classList.remove("col-3");
      }
      const prod = document.getElementById("products");
      if (prod.classList.value == "products") {
        prod.classList.remove("products");
        prod.classList.add("col-9");
      } else {
        prod.classList.add("products");
        prod.classList.remove("col-9");
      }
    },
    filterClose(id) {
      const ele = document.getElementById(id);
      if (ele.classList.value == "inActive") {
        ele.classList.remove("inActive");
        ele.classList.add("active");
      } else {
        ele.classList.add("inActive");
        ele.classList.remove("active");
      }
    },
    bodyRequest() {
      const body = {
        service: "category",
        store: 1,
        url_key: "top-wear",
        page: this.page,
        count: this.count,
        sort_by: this.sort_by,
        sort_dir: this.sort_dir,
        filter: this.add_filter_list,
      };
      return body;
    },
    async get_product_list() {
      this.page = 1;
      let request = "https://pim.wforwoman.com/pim/pimresponse.php/";
      const body = this.bodyRequest();
      const response = await this.get_axios(request, body);
      if (response) {
        this.product_list = response.data.result.products;
        if (this.checkFilter == true)
          this.filter_list = response.data.result.filters;
        this.product_count = response.data.result.count;
        this.sort = response.data.result.sort;
        this.name = response.data.result.name;
        this.parent_name = response.data.result.parent_name;
        this.totalPages = Math.ceil(this.product_count / this.count);
        this.checkFilter = false;
      }
    },
    add_filter() {
      this.add_filter_list = "";
      let arrKeys = Object.keys(this.applied_filter_list);
      let arrValues = Object.values(this.applied_filter_list);
      if (arrKeys.length) {
        for (let i = 0; i < arrKeys.length; i++) {
          this.add_filter_list += arrValues[i] + "-" + arrKeys[i] + ",";
        }
        this.add_filter_list = this.add_filter_list.substring(
          0,
          this.add_filter_list.length - 1
        );
      }
      this.get_product_list();
    },
    async paginateProducts() {
      if (this.page <= this.totalPages) {
        this.page++;
        const body = this.bodyRequest();
        let request = "https://pim.wforwoman.com/pim/pimresponse.php/";

        const response = await this.get_axios(request, body);
        if (response.status == 200 && response.data.response.success == 1) {
          this.product_list = [
            ...this.product_list,
            ...response.data.result.products,
          ];
        } else {
          alert("Something went wrong");
        }
      }
    },
    autoscroll() {
      let posPos = document.getElementById("pos").offsetTop;
      if (posPos - window.scrollY < 950) {
        this.paginateProducts();
      }
    },
    apply_filter(code, value) {
      if (Object.hasOwn(this.applied_filter_list, value)) {
        delete this.applied_filter_list[value];
        this.add_filter();
      } else {
        this.applied_filter_list = {
          ...this.applied_filter_list,
          [value]: code,
        };
        this.add_filter();
      }
    },
    delete_filter(value) {
      delete this.applied_filter_list[value];
      this.add_filter();
      let check = document.getElementById("checkB" + value).checked;
      if (check == true) {
        document.getElementById("checkB" + value).checked = false;
      }
    },
    clear_all_filters() {
      (this.applied_filter_list = {}), this.add_filter();
      var get = document.getElementsByName("checkB");

      for (var i = 0; i < get.length; i++) {
        get[i].checked = false;
      }
    },
  },
};
</script>

<style>
.trans-sort-container{
  display: none;
}

.tab_filters{
  display: none;
}
.mobile_view_filters{
  display: none;
}
.card_heart {
  height: 16px;
  width: 18px;
}
.card_img {
  width: 90%;
  border: 0;
}
#pos {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.hide_button {
  cursor: pointer;
  display: flex;
  border: 3px solid silver;
  outline: 0;
  background-color: #fff;
  align-items: center;
  margin-left: 40px;
  padding: 13px;
}

.input-check {
  height: 22px;
  width: 22px;
  margin-right: 16px;
}
input:checked {
  accent-color: #4c0b36;
}
.secondList {
  display: flex;
}
.clear_all {
  font-size: 13px;
  display: inline-block;
  padding: 5.5px 13px;
  border-radius: 18px;
  margin-right: 5px;
  border: 1px solid #707070;
  margin-left: 40px;
  cursor: pointer;
}



.plus {
  display: block;
}
.minus {
  display: contents;
}

.name_img {
  display: flex;
  justify-content: space-between;
}
.name_img img {
  margin-top: 10px;
}
hr {
  margin-top: 2px;
  width: 94%;
  opacity: 70%;
  border: 1px solid grey;
}
.filterList h6 {
  font-size: 16px;
  font-family: "jost-regular";
  margin: 10px 0px 10px 0px;
  cursor: pointer;
}
li {
  display: list-item;
  margin: 11px;
  cursor: pointer;
}
ul {
  list-style-type: none;
}
.filters_name {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.filters_name p {
  font-size: 13px;
  display: inline-block;
  padding: 5.5px 13px;
  border-radius: 18px;
  margin-right: 5px;
  border: 1px solid #707070;
  /* margin-bottom: 20px; */
}
.applied_filter_list {
  display: flex;
}

.inActive {
  display: none;
}
.active {
  display: contents;
}
.button_icon {
  display: flex;
  justify-content: space-between;
}
.filter_lable {
  text-transform: uppercase;
}
.button_icon button {
  cursor: pointer;
  display: contents;
  font-size: 16px;
  font-size: medium;
}
.filterList img {
  height: 15.9px;
  width: 15.26px;
  margin-right: 20px;
  cursor: pointer;
}
.filters_products {
  display: flex;
  padding-top: 36px;
}
.col-3 {
  width: 19%;
  margin-left: 20px;
}

.accordion {
  display: none;
}

.products {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 25px;

  justify-content: space-around;
}
.col-9 {
  width: 78%;
  padding-left: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


.line {
  border: 1px solid #3030301a;
  width: 94%;
  text-align: center;
  margin-left: 2%;
}
select {
  border: 0;
  outline: 0;
}
a {
  text-decoration: none;
  color: #303030;
}

.category_header {
  font-size: 32px;
  font-family: playfairdisplay-regular;
  text-align: center;
  margin-top: 30px;
}
.count_header {
  font-size: 18px;
  font-family: jost-regular;
  text-align: center;
  margin-top: 10px;
  opacity: 70%;
}
.filter_sort {
  display: block;

  width: 100%;
  height: 50px;
  border: 5px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}
.filter_sort p {
  margin-left: 20px;
}
.sort_select {
  margin-right: 50px;
  font-family: jost-regular;
  font-size: 17px;
  width: 268px;
  height: 56px;
  border: 3px solid silver;
  padding: 10px;
  font-weight: bold;
}
.card {
  width: 25%;
  margin-bottom: 50px;
}

.product_name {
  font-size: 16px;
  font-family: jost-medium;
  display: flex;
  width: 90%;
  font-weight: bold;
}
.price {
  color: #4c0b36;
  font-size: 16px;
  font-family: "Jost";
  margin-top: 8px;
  font-weight: bold;
}
@media screen and (max-width: 1023px) {
  
  .trans-sort-container{
    display: contents
    
  }
  .filter_lable_div{
    overflow:scroll;
    width: 50%;
  }
  .filter_options_div{
    width: 50%;
  }
  .filter_header{
    background-color: #fff;
  }
  .mobile_view_filters
  {position: fixed;
    width: 100%;
    height: 100%;
    display: block;
    background-color: #fff;
    left: 0;
    opacity: 1;
    background-color: rgba(0,0,0,.5);
    top: 0;
    z-index: 2;}
  .sorting_list h3{
    text-align: center;
  }
  .sorting_list button{
    border: 0;
    background-color: #fff;

  }
  .sorting-value{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    opacity: 1;
    background-color: rgba(0,0,0,.5);
    top: 0;
    z-index: 2;
  }
  .sorting_list{
    position: fixed;
    right: 0;
    width: 100%;
    max-width: 100%;
    z-index: 999;
    background-color: #fff;
    top: auto;
    padding: 0;
    bottom: 51px;
    text-align: left;
  }
  .tab_filters{
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    z-index: 14;
    background: #ffff;
  }
  .action-button {
    padding: 8px 12px;
    display: flex;
    column-gap: 15px;
    border: none;
    background-color: #fff;
    color: #000;
    font-size: 14px;
    align-items: center;
    font-weight: 600;
  }
  .tab_filters div{
    padding: 8px 4px;
    width: 50%;
    border: 1px solid #ccc;
display: flex;
  }
 .action-image {
  width: 15px;
  height: 15px;
 }
 hr {
   width: 60%;
  }
 
 hr{
  width: 40%;
 }
 
 
  .col-3{
    display: none;
  }
  .col-9{
    width: 100%;
  }
  
  .filter_sort{
    display: none;
  }
  .hide_button {
    display: none;
  }
}
@media screen and (max-width: 767px){
  
  .card{
    width: 33%;
  }
}
@media screen and (max-width: 426px){
  .card{
    width: 50%;
  }
  
  
  
 



}

</style>