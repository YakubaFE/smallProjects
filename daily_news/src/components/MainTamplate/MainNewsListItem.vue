<template> 
    <h3>{{ title }}</h3>
    <!-- <p>{{ item.description }}</p>
    <div @click="showPopup" class="image">
      <img v-bind:src="item.urlToImage" alt="">
    </div> -->
  <PopupNews v-show="isModalVisible"  @closePopup="closeInfoPopup">
    <!-- <h3>{{ item.title }}</h3>
    <p>{{ item.content }}</p>
    <a v-bind:href="item.url" target="_blank">See more...</a>
    <div class="image">
      <img v-bind:src="item.urlToImage" alt="">
    </div> -->
  </PopupNews>
</template>

<script>
  import PopupNews from '@/components/modalWindow/PopupNews.vue'
  import axios from 'axios'
  export default {
  name: 'MainNewsListItem',
  components: {
    PopupNews
  },
  props: {
   
  },
  data () {
  
    return {
      isModalVisible: false,
      
      // options: [
      //   { text: '', value: '' },
      //   { text: 'Popular articles', value: 'popularity' },
      //   { text: 'Date of publication', value: 'publishedAt' },
      // ],
      new: null,
      title: null,
      description: null,
      urlToImage: null,
      error: [],
    }
  },
  methods: {
    ListItem() {
      axios.get('https://newsapi.org/v2/everything?sources=bbc-news' + '&apiKey=8fd3e5a94c7140e0972eda000f3969dd')
        .then(response => {
          this.new = response.data.articles
          console.log(response.data.articles.title)
          this.new = response.data.articles.title
          this.totalResults = response.data.total_results
          this.page = response.data.page
        })
      .catch(e => {
        this.error.push(e)
      })
    },
    
    showPopup () {
    this.isModalVisible = true;
  
    },
    closeInfoPopup () {
      this.isModalVisible = false;
    }
  },
  mounted() {
    this.ListItem();
  },
  
}
</script>


<style scoped>
 /* @import '../../../public/src/css/newsList.css'; */
</style>