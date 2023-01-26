<template>
  <header class="header">
    <div class="wrapper">
      <div class="header-logo">
        <p>National Daily news</p>
      </div>
      <div class="header-menu">
        <div class="header-menu__btn" v-on:click="becomeActive" >
          <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11ZM4 4H9V9H4V4Z" fill="#3C3C3C"/>
            <path d="M14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11ZM15 4H20V9H15V4Z" fill="#3C3C3C"/>
            <path d="M3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22ZM4 15H9V20H4V15Z" fill="#3C3C3C"/>
            <path d="M14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22ZM15 15H20V20H15V15Z" fill="#3C3C3C"/>
          </svg>
          <span>{{menuButton.text}}</span>
          <svg :class="[isActive ? activeClassSvg : '', errorClassSvg]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.57048 11.1771L1.57048 5.84376C1.43802 5.72697 1.35731 5.5624 1.34606 5.38617C1.33482 5.20994 1.39395 5.03644 1.51048 4.90376C1.62727 4.7713 1.79184 4.69059 1.96807 4.67934C2.14431 4.66809 2.3178 4.72722 2.45048 4.84376L8.01048 9.78375L13.5705 4.84376C13.7043 4.73601 13.8745 4.68405 14.0456 4.69873C14.2168 4.71341 14.3757 4.79358 14.4891 4.92254C14.6026 5.0515 14.662 5.21928 14.6547 5.39091C14.6475 5.56254 14.5744 5.72476 14.4505 5.84376L8.45048 11.1771C8.32882 11.284 8.17242 11.3429 8.01048 11.3429C7.84854 11.3429 7.69214 11.284 7.57048 11.1771Z" fill="#3C3C3C"/>
          </svg>
        </div>
        <nav :class="[isActive ? activeClass : '', errorClass]">
          <ul class="header-menu__items">
            <li v-for="item in menu" :key="item.menu">
                <router-link v-bind:to="item.url">{{ item.text }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <form class="header-log">
        <div class="header-login" v-if="!formSubmitted">
          <input v-model.trim="email" type="email" placeholder="Enter your email" required>
          <button type="submit" value="submit" class="header-log__in" @click="submit">{{buttons.buttonName1}}</button> 
        </div>
        <div class="header-log-error"> {{errorMessage}} </div>
        <button v-if="formSubmitted" type="submit" class="header-log__out" @click="offSubmit">{{buttons.buttonName2}}</button>
      </form>  
    </div>
  </header>
 </template>
 
<script>
  export default {
   name: 'ComponentsHeader',
   components: {
  },
   data () {
    return {
      errorMessage: '',
      email: '',
      formSubmitted: false,
      menu: [
      { text: 'home',
        url: '/'
      },
      { text: 'contacts',
        url: '#footer'
      },
      { text: 'war in Ukraine',
        url: '/ukraine'
      },
      ],
      menuButton: {
        text: 'menu'
      },
      buttons: {
        buttonName1: 'subscribe',
        buttonName2: 'subscribed',
      },
      isActive: false,
      activeClass: 'active-menu',
      errorClass: 'notactive-menu',
      activeClassSvg: 'active-svg',
      errorClassSvg: 'notactive-svg',
    }     
  },
   methods: {
    becomeActive() {
    this.isActive = !this.isActive
    },
    onSubmit(event) {
      event.preventDefault()
      event.submit ()
    },
    submit () {
      if (this.email !== '') {
        this.formSubmitted = true;
      } else {
        this.formSubmitted = false; 
      }
    },
    offSubmit() {
      this.formSubmitted = false;  
    },
    validateEmail(email) {
      if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Email invalid!' 
      }
    }, 
  },
}
 </script>

 <style scoped>
  @import '../../public/src/css/header.css';
 </style>