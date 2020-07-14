<template>
  <section class="photoGallery">
    <div class="photoGallery__container">
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
      <div class="grid">
        <div
          class="image__container"
          v-for="(image, i) in images"
          :key="i"
          @click="index = i"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out-quad"
          :data-aos-delay="200 + i * 100"
        >
          <img class="image" :src="image.url" />
          <div class="image__description_layer">
            <div class="description__container" v-if="!forInstagram">
              <h1>{{ image.name }}</h1>
              <p>
                {{ image.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { LightGallery } from "vue-light-gallery";

@Component({
  props: ["images", "forInstagram"],
  components: { LightGallery }
})
export default class PhotoGallery extends Vue {
  index = null;
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/global.scss";
.photoGallery {
  width: 100%;
  .photoGallery__container {
    padding: $verticalPadding $horizontalPadding / 4;
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
      grid-auto-rows: 1fr;
      grid-gap: 3vh;
      &::before {
        content: "";
        width: 0;
        padding-bottom: 100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;
      }

      > *:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
      }
    }
    .image__container {
      @include backgroundDefault;
      @include flex;
      align-items: flex-end;
      width: 100%;
      height: 100%;
      position: relative;
      &:hover {
        cursor: pointer;
      }
      .image {
        width: 100%;
        height: 100%;
      }
      .image__description_layer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(10, 13, 26, 0.4);
        color: #fff;
        visibility: hidden;
        opacity: 0;
        @include flex;
        align-items: flex-end;
        transition: opacity 0.8s cubic-bezier(0.65, 0, 0.35, 1),
          visibility 0.8s cubic-bezier(0.65, 0, 0.35, 1);
      }
      &:hover .image__description_layer {
        visibility: visible;
        opacity: 1;
      }

      &:hover .description__container {
        transform: translateY(0);
      }
      .description__container {
        transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
        transform: translateY(1em);
        padding: 4vh;
        text-align: center;
        h1 {
          font-size: 1.25rem;
          text-transform: capitalize;
          margin-bottom: 2vh;
        }
        p {
          font-size: 0.75rem;
          line-height: 1.75;
        }
      }
    }
    @media (min-width: 768px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
      }
    }
    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(3, minmax(16rem, 1fr));
      }
    }
  }
}
</style>
