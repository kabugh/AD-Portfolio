<template>
  <section class="story">
    <header class="story__header--container">
      <h1></h1>
    </header>
    <article class="story__container">
      <h2>Photo Story</h2>
      <h3>Lid</h3>
      <p></p>
      <PhotoGallery :zoomedPhotos="true" />
    </article>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PhotoGallery from "@/components/PhotoGallery.vue";

@Component({
  props: ["story", "zoomedPhotos"],
  components: { PhotoGallery }
})
export default class Story extends Vue {}
</script>
<style lang="scss" scoped></style>
