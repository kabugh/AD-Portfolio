<template>
  <section class="instagram">
    <PhotoGallery
      :images="images"
      :displayImageOnly="true"
      :zoomedPhotos="true"
      class="col-3"
    />
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PhotoGallery from "./PhotoGallery.vue";
@Component({
  components: { PhotoGallery }
})
export default class Instagram extends Vue {
  images = [
    "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A1825-1024x683.jpg",
    "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2188-1024x683.jpg",
    "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2340-1024x683.jpg",
    "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A3294-1024x683.jpg"
  ];
}
</script>
<style lang="scss" scoped></style>
