<template>
  <div class="container-slider">
    <div class="mainNews wrapper-slider">
      <h2 class="mainNews__title">Top news</h2>
      <div class="mainNews__slider">
      <swiper 
        :modules="modules"
        :slides-per-view="3"
        :space-between="50"
        :pagination= true 
        :breakpoints="swiperOptions.breakpoints"
        :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="default-slider">
        <swiper-slide v-for="item in news" :key="item.news">
          <div class="mainNews__slider-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="image">
              <img v-bind:src="item.urlToImage" alt="">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  </div>
  
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue';
import {  Pagination, Autoplay } from "swiper";
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "swiper/swiper.min.css";
export default {
  name: 'MainNewsSlide',
  components: {
    Swiper,
    SwiperSlide,
  },
  data () {
    return {
      swiperOptions: {
          breakpoints: {       
      320: {       
         slidesPerView: 1,
         spaceBetween: 10     
      },          
      770: {       
         slidesPerView: 2,       
         spaceBetween: 50     
      },   
  
      950: {       
         slidesPerView: 3,       
         spaceBetween: 50     
      } 
    }
   },   
      news: null,
      error: [],
      page: 1,
      totalResults: 0,
      apiURL: 'https://newsapi.org/v2/top-headlines?sources=bbc-news',
      params: {
        apiKey: '8fd3e5a94c7140e0972eda000f3969dd'
      },
    }
  },
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination, Autoplay],
      };
      
    },
  methods: {
    newsListSlider() {
      axios.get(this.apiURL, {params: this.params})
        .then(response => {
          this.news = response.data.articles
          this.totalResults = response.data.total_results
          this.page = response.data.page
        })
        .catch(e => {
          this.error.push(e)
        })
    }
  },
  mounted() {
    this.newsListSlider();
  },
}
</script>


<style scoped>
 @import '../../../public/src/css/slider.css';
</style>