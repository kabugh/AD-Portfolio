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
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  ];
}
</script>
<style lang="scss" scoped></style>
