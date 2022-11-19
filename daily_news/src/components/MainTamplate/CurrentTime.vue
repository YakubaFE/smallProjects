<template>
  <div class="realTime">
    <div class="realTime-container">
      <div class="date">{{ currentDate() }}</div>
      <div class="time">{{ currentTime() }}</div>
      <div class="realTime-search-city">
        <input type="text" placeholder="Search" v-model="q">
          <button type="submit" class="realTime-search-city__searchCklik" v-on:click="weatherNowSearch">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9395 1.9313C5.98074 1.9313 1.94141 5.97063 1.94141 10.9294C1.94141 15.8881 5.98074 19.9353 10.9395 19.9353C13.0575 19.9353 15.0054 19.193 16.5449 17.9606L20.293 21.7067C20.4821 21.888 20.7347 21.988 20.9967 21.9854C21.2587 21.9827 21.5093 21.8775 21.6947 21.6924C21.8801 21.5073 21.9856 21.2569 21.9886 20.9949C21.9917 20.7329 21.892 20.4802 21.7109 20.2908L17.9629 16.5427C19.1963 15.0008 19.9395 13.0498 19.9395 10.9294C19.9395 5.97063 15.8982 1.9313 10.9395 1.9313ZM10.9395 3.93134C14.8173 3.93134 17.9375 7.05153 17.9375 10.9294C17.9375 14.8072 14.8173 17.9352 10.9395 17.9352C7.06162 17.9352 3.94141 14.8072 3.94141 10.9294C3.94141 7.05153 7.06162 3.93134 10.9395 3.93134Z" fill="#3C3C3C"/>
            </svg>
        </button>
        </div>
      <h3> Weather in {{ name }}</h3>
      <div class="realTime-weather">
        <img  v-bind:src = "icon" > 
        <div class="temperature">{{ currentTemp }} 
          <span>°C</span>
        </div>
        <div class="description">{{ overcast }}
          <div class="description">Feels {{ feels_like }} <span>°C</span></div>
        </div>
      </div>
      <div class="weather-components">
        <div class="wind"> wind_speed: {{ wind }}</div>
        <div class="humidity">humidity: {{ humidity }}</div>
        <div class="pressure">pressure: {{ pressure }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CurrentTime',
  components: {
  },
  data () {
    return {
    q: '',
    name: '',
    currentTemp: '',
    feels_like: '',
    pressure: '',
    humidity: '',
    wind: '',
    overcast: '',
    icon: '',
    apiSearchURL: 'https://api.openweathermap.org/data/2.5/weather?units=metric',
      params: {
        appid: '251ce1749fdb828256db07eac169fd13',
      },
      paramsSearch: {
        appid: '251ce1749fdb828256db07eac169fd13',
      },
  }
  },
  
  methods: {
    weatherNow (){
      this.params.q = 'leszno'
      axios.get(this.apiSearchURL, {params: this.params})
     .then(response => {
      this.name = response.data.name
      this.currentTemp = Math.round(response.data.main.temp);
      this.feels_like = Math.round(response.data.main.feels_like);
      this.pressure = response.data.main.pressure;
      this.humidity = response.data.main.humidity + '%';
      this.wind = Math.round(response.data.wind.speed) + 'm/s';
      this.overcast = response.data.weather[0].description;
      this.icon = 'http://openweathermap.org/img/w/'+ response.data.weather[0].icon + '.png';
     })
     .catch(e => {
        this.error.push(e)
      })
    },
    weatherNowSearch (){
      this.paramsSearch.q = this.q
      axios.get(this.apiSearchURL, {params: this.paramsSearch})
     .then(response => {
      this.name = response.data.name
      this.currentTemp = Math.round(response.data.main.temp);
      this.feels_like = Math.round(response.data.main.feels_like);
      this.pressure = response.data.main.pressure;
      this.humidity = response.data.main.humidity + '%';
      this.wind = Math.round(response.data.wind.speed) + 'm/s';
      this.overcast = response.data.weather[0].description;
      this.icon = 'http://openweathermap.org/img/w/'+ response.data.weather[0].icon + '.png';
     })
     .catch(e => {
        this.error.push(e)
      })
    },
    currentDate() {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate(); 
      return date;
    },
    currentTime() {
      const current = new Date();
      const time = current.getHours() + ":" + current.getMinutes();
      return time;
    },
  },    
  mounted () {
    this.weatherNow()
  },
}
</script>


<style scoped>
  @import '../../../public/src/css/time.css';
</style>