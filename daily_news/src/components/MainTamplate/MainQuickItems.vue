<template>
  <div> 
    <ul class="quick-items" >
      <li v-for="link in links" :key="link.links">
        <div class="quick-item">
          <router-link v-bind:to="link.url" >{{ link.text }}</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
   name: 'MainQuickItems',
   components: {
  }, 
   data () {
    return {
      links: [
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
      ]
    } 
  },
} 
</script>


<style scoped>
@import '../../../public/src/css/quickItems.css';
</style>