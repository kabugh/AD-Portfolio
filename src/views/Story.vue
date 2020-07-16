<template>
  <section class="story">
    <header
      class="hero"
      :style="{
        backgroundImage: `url(${passedItem.frontImage})`
      }"
      ref="header"
    >
      <div class="hero__container">
        <h1 ref="title">{{ passedItem.name }}</h1>
      </div>
    </header>
    <article class="story__container" ref="article">
      <h1>Photo Story</h1>
      <h3>
        Build an elegantly modern, responsive website that’s creative,
        accessible and beautifully presented. A well-designed website can change
        your conversion and a profit for good.
      </h3>
      <p>
        Fusce aliquam tincidunt hendrerit. Nunc tincidunt id velit sit amet
        vestibulum. In venenatis tempus odio ut dictum. Curabitur ac nisl
        molestie, facilisis nibh ac, facilisis ligula. Integer congue malesuada
        eros congue varius. Sed malesuada dolor eget velit euismod pretium.
        Etiam porttitor finibus pretium. Nam suscipit vel ligula at dharetra.
      </p>
      <PhotoGallery
        :images="passedItem.images"
        :displayImageOnly="true"
        :zoomedPhotos="true"
      />
    </article>
  </section>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import HeroPage from "@/components/HeroPage.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";
import { TimelineLite } from "gsap";

@Component({
  components: { HeroPage, PhotoGallery }
})
export default class Story extends Vue {
  @Prop({ required: true }) passedItem!: {
    name: string;
    description: string;
    frontImage: string;
    images: string[];
  };

  mounted() {
    const header = this.$refs.header;
    const title = this.$refs.title;
    const article = this.$refs.article;

    const timeline1 = new TimelineLite();

    timeline1
      .from(header, {
        duration: 1,
        ease: "power4",
        opacity: 0
      })
      .from(
        title,
        {
          duration: 1.5,
          opacity: 0,
          ease: "power4",
          y: -100
        },
        "-=1"
      )
      .to(title, { y: 0 })
      .from(
        article,
        {
          duration: 1.5,
          opacity: 0,
          ease: "power4",
          y: 100
        },
        "-=1.5"
      )
      .to(article, { y: 0 });
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/global.scss";

.story {
  width: 100%;
  .hero {
    width: 100%;
    height: 50vmin;
    min-height: 40vh;
    @include backgroundDefault;
    background-image: url("../assets/images/bg.jpg");
    @include flex;
    .hero__container {
      @include flex;
      flex-direction: column;
      padding: $verticalPadding $horizontalPadding;
      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
      }
    }
  }
  .story__container {
    color: black;
    padding: $verticalPadding $horizontalPadding / 2;
    display: grid;
    grid-template-columns: minmax(20vw, 1fr);
    row-gap: 2vh;
    h1 {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 1px;
      display: inline;
    }
    h3 {
      font-size: 1rem;
      color: $thirdColor;
      font-weight: 500;
      margin: $verticalPadding / 4 0;
      display: inline;
    }
    p {
      font-size: 0.875rem;
      line-height: 2;
    }
  }
  @media (min-width: 450px) {
    .hero .hero__container h1 {
      font-size: 2rem;
    }
  }
  @media (min-width: 768px) and (min-height: 500px) {
    .story__container {
      padding: $verticalPadding $horizontalPadding;
    }
  }
  @media (min-width: 1024px) and (min-height: 500px) {
    .story__container {
      padding: $verticalPadding $horizontalPadding * 3 /2;
    }
  }
  @media (min-width: 1250px) and (min-height: 500px) {
    .story__container {
      padding: $verticalPadding $horizontalPadding * 2;
    }
  }
}
</style>
