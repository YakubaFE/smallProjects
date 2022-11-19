<template>
  <GoogleMap api-key="AIzaSyCZhME1_8_VqA-kTEj8ErBiFNrA7q0F0xY" style="width: 100%; height: 200px; border-radius: 5px;" :center="center" :zoom="11">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  name: 'ComponentMap',
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 37.779549518112674, lng: -122.3916198037813 };

    return { center };
  },
});
</script>