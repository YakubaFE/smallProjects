<template>
    <MainNewsSlide/>
    <div class="main-grid">
      <div class="side-bar">
        <CurrentTime/>
        <MainQuickItems/>
      </div>
      <div>
        <router-view/>
      </div>
    </div>
</template>

<script>
import CurrentTime from '@/components/MainTamplate/CurrentTime.vue'
import MainNewsSlide from '@/components/MainTamplate/MainNewsSlide.vue'
import MainQuickItems from '@/components/MainTamplate/MainQuickItems.vue'
export default {
  name: 'ComponentsMain',
  components: {
    MainNewsSlide,
    CurrentTime,
    MainQuickItems
  },
}
</script>


<style scoped>
.main-grid {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 30px;
}
@media screen and (max-width: 750px) {
  .main-grid {
    display: flex;
    flex-direction: column;
  }
}
</style>