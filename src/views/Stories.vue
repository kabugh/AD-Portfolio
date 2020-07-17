<template>
  <section class="stories">
    <HeroPage
      title="Historie"
      subTitle="creative collection"
      description="When, while the lovely valley teems with vapour around me, and
    the meridian sun strikes the upper surface of the impenetrable foliage of my
    trees."
      image="bg.jpg"
    />
    <!-- <section class="stories__container">
      <div class="story" v-for="(story, i) in stories" :key="i">
        <img
          class="story__image"
          :src="require(`@/assets/images/${story.photo}`)"
          alt="story image"
        />
        <h1>{{ story.title }}</h1>
        <p>
          {{ story.description }}
        </p>
        <button type="button" class="dark">Czytaj dalej</button>
      </div>
    </section> -->
    <section class="content__container">
      <PhotoGallery
        :images="stories"
        routeComponentName="story"
        :displayImageOnly="false"
        :zoomedPhotos="false"
      />
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
  stories = [
    {
      name: "Ślub humanistyczny Jagody i Adriani’ego",
      frontImage:
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A3406-1024x683.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, porro voluptate. Voluptas, quo excepturi. Quos fugiat neque adolorem.",
      images: [
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A1825-1024x683.jpg",
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2188-1024x683.jpg",
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2340-1024x683.jpg",
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A3294-1024x683.jpg",
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2220-1024x683.jpg",
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A1976-1024x683.jpg"
      ]
    },
    {
      name: "Test",
      frontImage: "http://eterlight.pl/wp-content/uploads/2018/08/IMG_9374.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, porro voluptate. Voluptas, quo excepturi. Quos fugiat neque adolorem.",
      images: [
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2329-683x1024.jpg",
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2329-683x1024.jpg",
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2329-683x1024.jpg"
      ]
    },
    {
      name: "Opowieść",
      frontImage:
        "http://eterlight.pl/wp-content/uploads/2017/07/IMG_4126-1024x683.jpg",
      description:
        "Jest i pierwsza pełna opowieść ślubna! A zaczęło się od tego, że dwoje zakochanych ludzi postanowiło się pobrać, a ich szczęście promieniało tak mocno, że mogłoby zarazić cały Milicz",
      images: [
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A1976-1024x683.jpg",
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2212-1024x683.jpg",
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2225-1024x683.jpg"
      ]
    }
  ];
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
