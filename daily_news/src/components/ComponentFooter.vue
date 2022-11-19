<template>
  <footer class="footer" id="footer">
    <div class="wrapper">
      <div class="footer-logo">
        <p class="logo">National Daily news</p>
        <p class="footer-text">{{ text }}</p>
      </div>
      <div class="footer-socials">
        <h3>{{ titles.socials }}</h3>
        <div> 
          <a v-bind:href="icon.urlFacebook" target="_blank">
            <div class="icon-facebook icon"></div>
          </a>
          <a v-bind:href="icon.urltwitter" target="_blank">
            <div class="icon-twit icon"></div>
          </a>
          <a v-bind:href="icon.urllinkedin" target="_blank">
            <div class="icon-inkedin icon"></div>
          </a>
          <a v-bind:href="icon.urlInsta" target="_blank">
            <div class="icon-insta icon"></div>
          </a>
        </div>
      </div>
      <div class="footer-links">
        <h3>{{ titles.links }}</h3>
        <div v-for="link in links1" :key="link.links1">
          <a v-bind:href="link.url">{{ link.text }}</a>
        </div>
        <div v-for="link in links2" :key="link.links2">
          <a v-bind:href="link.url">{{ link.text }}</a>
        </div>
      </div>
      <div class="footer-map">
        <h3>{{ titles.store }}</h3>
        <ComponentMap/>
      </div>
      <div class="footer-contacts" id="footer-contacts">
        <div>
          <div class="footer-contacts__item icon-marker"><span> {{ contacts.adress }}</span></div>
          <div class="footer-contacts__item icon-phone"><span>{{ contacts.tel }}</span></div>
          <div class="footer-contacts__item icon-mail"><span>{{ contacts.mail }}</span></div>
        </div>
      </div>
      <div class="footer-rights"> © 2022 National Daily news. All rights reserved.</div>
      
    </div>
  </footer>
 </template>
 
 <script>
 import ComponentMap from '@/components/ComponentMap.vue'
 export default {
   name: 'ComponentsFooter',
   components: {
    ComponentMap
   },
   data () {
    return {
      icon: {
        urlFacebook: 'https://www.facebook.com/',
        urlInsta: 'https://www.instagram.com/',
        urllinkedin: 'https://www.linkedin.com/',
        urltwitter: 'https://www.twitter.com/',
      },
      text:'Fake news is cheap to produce. Genuine journalism is expensive.',
      links1: [
      { text: 'top news',
        url: '/'
      },
      { text: 'coronavirus',
        url: '/corona'
      },
      { text: 'Ukraine',
        url: '/ukraine'
      },
      { text: 'science',
        url: '/science'
      },
      { text: 'business',
        url: '/business'
      },
    
      ],
      links2: [
      { text: 'entertainment',
        url: '/entertainment'
      },
      { text: 'health',
        url: '/health'
      },
      { text: 'sports',
        url: '/sports'
      },
      { text: 'technology',
        url: '/technology'
      }
      ],
      contacts: {
        mail: 'support@news.id',
        tel: '+123 345123 556',
        adress: '832  Thompson Drive, San Fransisco CA 94107, United States',
      },
      titles: {
        socials: 'Follow Us',
        links: 'Quick Links',
        store: 'Contact us',
      }
    }
  }
}
 </script>
 

 <style scoped>
 @import '../../public/src/css/footer.css';
 </style>