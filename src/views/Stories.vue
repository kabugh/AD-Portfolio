<template>
  <section class="stories">
    <HeroPage
      title="Historie"
      subTitle="creative collection"
      description="When, while the lovely valley teems with vapour around me, and
    the meridian sun strikes the upper surface of the impenetrable foliage of my
    trees."
    />
    <section class="stories__container">
      <div class="story" v-for="(story, i) in stories" :key="i">
        <img
          class="story__image"
          :src="require(`@/assets/images/${story.image}`)"
          alt="story image"
        />
        <h1>{{ story.title }}</h1>
        <p>
          {{ story.shortDescription }}
        </p>
        <button type="button" class="dark">Czytaj dalej</button>
      </div>
    </section>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeroPage from "@/components/HeroPage.vue";

@Component({
  components: { HeroPage }
})
export default class Stories extends Vue {
  stories = [
    {
      title: "Wild Question Marks",
      image: "animal.jpg",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, porro voluptate. Voluptas, quo excepturi. Quos fugiat neque adolorem."
    },
    {
      title: "Wild Question Marks",
      image: "animal.jpg",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, porro voluptate. Voluptas, quo excepturi. Quos fugiat neque adolorem."
    },
    {
      title: "Wild Question Marks",
      image: "animal.jpg",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, porro voluptate. Voluptas, quo excepturi. Quos fugiat neque adolorem."
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
