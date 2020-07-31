<template>
  <section class="partners">
    <h1 data-aos="fade-up">Partnerzy</h1>
    <div class="partners__container" v-if="partners.length > 0">
      <Carousel
        easing="cubic-bezier(0.76, 0, 0.24, 1)"
        :speed="800"
        :perPage="1"
        :perPageCustom="[
          [768, 2],
          [960, 3]
        ]"
        :paginationSize="12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Slide class="item" v-for="item in partners" :key="item.image.sys.id">
          <img
            @click="navigateOutside(item.link)"
            :src="item.image.fields.file.url"
            alt="image"
            :class="{ clickable: item.link }"
          />
        </Slide>
      </Carousel>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Carousel, Slide } from "vue-carousel";
import { Partner } from "@/store/models";

@Component({ components: { Carousel, Slide } })
export default class Partners extends Vue {
  created() {
    this.$store.dispatch("fetchPartners");
  }

  get partners() {
    return this.$store.getters.partners;
  }
  partners1: Partner[] = [
    {
      image: "partner1.png",
      link: "https://mywed.com/pl/photographer/alicjadebek/"
    },
    {
      image: "partner3.png",
      link: "https://www.weselezklasa.pl/alicjadebek/"
    },
    {
      image: "partner2.png"
    }
  ];
  navigateOutside(link: string) {
    if (link) window.open(link, "_blank");
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
.partners {
  width: 100%;
  padding: $verticalPadding / 2 0;
  h1 {
    font-size: 2rem !important;
    @media (min-width: 768px) and (min-height: 500px) {
      font-size: 2.5rem !important;
    }
  }

  .partners__container {
    padding: $verticalPadding $horizontalPadding / 2;
    .item {
      width: 25vmax;
      height: 20vh;
      @include flex;
      @media (min-width: 1024px) {
        width: 10vmax;
        height: 12vh;
      }
      img {
        width: 100%;
        height: 100%;

        margin: 0 auto;
        object-fit: contain;
        &.clickable {
          &:hover {
            cursor: pointer;
          }
        }
      }
      .VueCarousel-dot {
        &:focus {
          outline: none !important;
        }
      }
    }
  }
}
</style>
