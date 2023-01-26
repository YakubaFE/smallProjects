<template>
<div class="vue-modal"  @click.self="closePopup">
  <div class="vue-modal__inner">
    <div class="vue-modal__content">
      <slot></slot>
      <div class="vue-modal__button">
        <button type="button" @click="closePopup">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script> 
  export default {
    name: 'PopupNews',
    data() {
      return 
    },
    methods: {
      closePopup() {
        this.$emit('closePopup')
      }
    }
  }   
</script>

<style scoped >
  @import '../../../public/src/css/popup.css';
</style>