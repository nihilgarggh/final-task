<template>
  <div>
    <div class="image-container">
      <div class="image-with-flex" id="lightgallery">
        <div
          class="one-image-container22"
          v-for="(product, index1) in images"
          :key="index1"
          
        >
          <img
            class="image"
            :src="product.image"
            :data-src="product.image"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mobile_view_slick" >
      <div id="lightgallerytest">
    <slick :options="slickOptions"  > 
      <div class="one-image-container22" v-for="(product, index1) in images" :key="index1">
        <img   class="image"  :src="product.image" :data-src="product.image"   />

      </div> 
      </slick>
  </div>
    </div>
    
</div>
</template>

<script>
export default {
  props: ['images'],
  data(){
    return {

      slickOptions: {
                    slidesToShow: 1,
                    lazyLoad: 'ondemand',
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    fade: false,
                  },
    }
  },  

  methods: {
    gallerycontrol() {
      console.log('ihihih',this.images);
      setTimeout(() => {
        lightGallery(document.getElementById('lightgallerytest'), {
          download: false,
          selector: 'img',
        });
      });
      setTimeout(() => {
        lightGallery(document.getElementById('lightgallery'), {
          download: false,
          selector: 'img',
        });
      });
    },

  },
  mounted() {
    this.gallerycontrol()
  },
}
</script>

<style>
.mobile_view_slick{
  display: none;
}
.image-with-flex {
  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
  flex: 0 0 100%;
  justify-content: space-between;
}

.one-image-container22 {
  flex: 0 0 49.5%;
  overflow: hidden;
}

.one-image-container22:hover img.image {
  transform: scale(1.09);
  cursor: zoom-in;
  transition: 0.8s all ease-in-out;
}

.image {
  width: 100%;
}

.lg-toolbar {
  background-color: rgba(0, 0, 0, 0) !important;
}

.lg-outer.lg-visible {
  background-color: #fff !important;
  width: 60% !important;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 90%;
  border-radius: 12px;
}

.lg-toolbar .lg-icon:hover {
  color: #000 !important;
}

.lg-actions .lg-next:hover,
.lg-actions .lg-prev:hover {
  color: #000 !important;
}

.lg-backdrop.in {
  opacity: .6 !important;
}

@media screen and (max-width: 426px)  {
  .lg-outer.lg-visible {
  width: 98% !important;
}
.mobile_view_slick{
  display: block;
}
.image-container{
  display: none;
}
}

</style>
