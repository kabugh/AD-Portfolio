<template>
  <section class="stories">
    <HeroPage
      title="Historie"
      subTitle="niezapomniane wspomnienia"
      description="Jeśli zobaczysz coś co cię poruszy, a następnie złapiesz to na zdjęciu, to zwyczajnie zatrzymasz ten moment na wieki."
      image="bg.jpg"
    />
    <section class="content__container">
      <PhotoGallery
        v-if="stories.length > 0"
        :images="stories"
        routeComponentName="story"
        :displayImageOnly="false"
        :zoomedPhotos="false"
      />
      <div class="loading" v-else>loading..</div>
    </section>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import HeroPage from "@/components/HeroPage.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";

@Component({
  components: { HeroPage, PhotoGallery }
})
export default class Stories extends Vue {
  created() {
    this.$store.dispatch("fetchStories");
  }

  get loading() {
    return this.$store.getters.loading;
  }

  get stories() {
    return this.$store.getters.stories;
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
.stories {
  width: 100%;
  .stories__container {
    color: black;
    padding: $verticalPadding $horizontalPadding;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: $verticalPadding;
    column-gap: $verticalPadding;
    .story {
      width: 100%;
      text-align: center;
      .story__image {
        width: 100%;
        height: 50%;
      }
      h1 {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 4vh 0;
      }
      p {
        text-align: center;
        font-size: 1rem;
        font-weight: 300;
        color: $secondaryColor;
      }
      button {
        font-size: 14px;
        padding: 8px 12px;
        border: 2px solid black;
        font-weight: 300;
        margin-top: 4vh;
      }
    }
    @media (min-width: 768px) and (min-height: 500px) {
      grid-template-columns: repeat(2, 1fr);
      .story {
        h1 {
          margin: 2vh 0;
        }
        button {
          margin-top: 2vh;
          padding: 12px 24px;
          font-size: 1rem;
        }
      }
    }
    @media (min-width: 1024px) and (min-height: 500px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
