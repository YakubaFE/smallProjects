<template>
  <div class="mainNews-wrapper">
    <h2 class="mainNews__title">Topic: {{this.params.q}}</h2>
    <div class="search">
      <div class="search-form">
        <input type="text" placeholder="Search" v-model="q">
        <button type="button" class="search__btn" v-on:click="searchNewsList">
          <router-link v-bind:to="'/search/' + this.q" >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9395 1.9313C5.98074 1.9313 1.94141 5.97063 1.94141 10.9294C1.94141 15.8881 5.98074 19.9353 10.9395 19.9353C13.0575 19.9353 15.0054 19.193 16.5449 17.9606L20.293 21.7067C20.4821 21.888 20.7347 21.988 20.9967 21.9854C21.2587 21.9827 21.5093 21.8775 21.6947 21.6924C21.8801 21.5073 21.9856 21.2569 21.9886 20.9949C21.9917 20.7329 21.892 20.4802 21.7109 20.2908L17.9629 16.5427C19.1963 15.0008 19.9395 13.0498 19.9395 10.9294C19.9395 5.97063 15.8982 1.9313 10.9395 1.9313ZM10.9395 3.93134C14.8173 3.93134 17.9375 7.05153 17.9375 10.9294C17.9375 14.8072 14.8173 17.9352 10.9395 17.9352C7.06162 17.9352 3.94141 14.8072 3.94141 10.9294C3.94141 7.05153 7.06162 3.93134 10.9395 3.93134Z" fill="#3C3C3C"/>
            </svg>
          </router-link>   
        </button>
      </div>
    </div>
    <div class="mainNews-items">
      <div v-for="item in news" :key="item.news" class="mainNews-item">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="image" @click="showPopup(item)">
          <img v-bind:src="item.urlToImage" alt="">
        </div>
      </div>
      <PopupNews v-show ="isModalVisible"  @closePopup="closeInfoPopup" >
        <div class="mainNews-items">
          <div  class="mainNews-item">
            <h3>{{ userModal.title }}</h3>
             <p>{{ userModal.content }}</p>
            <a v-bind:href="userModal.url" class="modal-link" target="_blank">See more...</a>
            <div class="image">
              <img v-bind:src="userModal.urlToImage" alt="">
            </div>
          </div>
        </div>
      </PopupNews>
    </div>
    <div class="paginate">
      <vue-awesome-paginate 
        :total-items="100"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="onClickHandler"
      >
      </vue-awesome-paginate> 
    </div>
  </div>
</template>

<script>
  import PopupNews from '@/components/modalWindow/PopupNews.vue'
  import axios from 'axios'
export default {
  name: 'MainNewsList',
  components: {
    PopupNews
  },
  data () {
    return {
      isModalVisible: false,
      userModal: {},
      news: null,
      error: [],
      totalResults: 0,
      q: '',
      apiURL: 'https://newsapi.org/v2/everything?sources=bbc-news',
      params: {
        sortBy:'relevancy',
        pageSize: '10',
        apiKey: 'eebda440532d47cdb5386fc263ddb4d8',
        q: 'entertainment'
      },
      currentPage: 1,
    }
  },
  methods: {
    newsList() {
      axios.get(this.apiURL, {params: this.params})
        .then(response => {
          this.news = response.data.articles
          this.totalResults = response.data.total_results
          this.page = response.data.page
        })
      .catch(e => {
        this.error.push(e)
      })
      window.scrollTo({
        top: 700,
        left: 100,
        behavior: 'smooth'
      });
    },
    
    onClickHandler (currentPage)  {
      this.page = currentPage;
      this.params.page = currentPage;
      this.newsList();
    },
    showPopup(item) {
      this.userModal = item;
      this.isModalVisible = !this.isModalVisible ;
    },
    closeInfoPopup () {
      this.isModalVisible = false;
    }
  },
  mounted() {
    this.newsList();
  },
}
</script>