<template>
  <section class="aboutMe page">
    <HeroPage
      title="About"
      subTitle="creative collection"
      description="When, while the lovely valley teems with vapour around me, and
    the meridian sun strikes the upper surface of the impenetrable foliage of my
    trees."
    />
    <section
      v-for="(desc, index) in descs"
      :key="index"
      class="description__section"
    >
      <div
        class="description__image"
        :style="{
          backgroundImage:
            'url(' + require(`@/assets/images/${desc.image}`) + ')'
        }"
      ></div>
      <div class="description__container">
        <div class="description__wrapper">
          <h1 data-aos="fade-down">{{ desc.title }}</h1>
          <h3 data-aos="fade-up" data-aos-delay="200">
            {{ desc.subtitle }}
          </h3>
          <p data-aos="fade-up" data-aos-delay="400">{{ desc.paragraph }}</p>
        </div>
      </div>
    </section>
    <section class="photography">
      <div class="photography__container">
        <div class="title__container">
          <h1 data-aos="fade-up" data-aos-delay="200">
            Photography is an art.
          </h1>
          <h1 data-aos="fade-up" data-aos-delay="250">
            It’s about finding extra-ordinary.
          </h1>
          <h1 data-aos="fade-up" data-aos-delay="300">In an ordinary place.</h1>
          <p data-aos="fade-up" data-aos-delay="600">
            Fusce aliquam tincidunt hendrerit. Nunc tincidunt id velit sit amet
            vestibulum. In venenatis tempus odio ut dictum. Curabitur ac nisl
            molestie, facilisis nibh ac, facilisis ligula. Integer congue
            malesuada eros congue varius. Sed malesuada dolor eget velit euismod
            pretium. Etiam porttitor finibus pretium. Nam suscipit vel ligula at
            dharetra.
          </p>
        </div>
        <div class="statistics__container">
          <div class="element" v-for="(item, i) in statistics" :key="i">
            <img
              class="icon"
              :src="require(`@/assets/images/icons/${item.icon}`)"
              alt="icon"
            />
            <h1>{{ item.number }}</h1>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
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
export default class AboutMe extends Vue {
  descs = [
    {
      image: "animal.jpg",
      title: "Visual Art",
      subtitle:
        "Creative Photography Theme with Easy to Built Responsive Features",
      paragraph:
        "Proin facilisis varius nunc. Curabitur eros risus, ultrices et dui ut, luctus accumsan nibh. Fusce convallis sapien placerat tellus susvehicula. Cras vitae diam ut justo elementum faucibus eget a diam."
    },
    {
      image: "animal.jpg",
      title: "Visual Art",
      subtitle:
        "Creative Photography Theme with Easy to Built Responsive Features",
      paragraph:
        "Proin facilisis varius nunc. Curabitur eros risus, ultrices et dui ut, luctus accumsan nibh. Fusce convallis sapien placerat tellus susvehicula. Cras vitae diam ut justo elementum faucibus eget a diam."
    }
  ];
  statistics = [
    {
      icon: "photo.png",
      number: "2139",
      title: "Photo sessions",
      description:
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum."
    },
    {
      icon: "camera.png",
      number: "3125",
      title: "Photos",
      description:
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum."
    }
  ];
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
.aboutMe {
  .description__section {
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    .description__image {
      width: 100%;
      height: 100%;
      @include backgroundDefault;
    }
    .description__container {
      width: 100%;
      height: 100%;
      color: black;
      background-color: white;
      @include flex;
      .description__wrapper {
        flex-direction: column;
        text-align: left;
        padding: $verticalPadding $horizontalPadding;
        h1 {
          font-size: 2.25rem;
        }
        h3 {
          margin: 2vh 0;
          font-size: 1.25rem;
        }
        p {
          color: $secondaryColor;
          line-height: 1.5;
          font-size: 0.875rem;
        }
      }
    }
    &:nth-of-type(even) .description__container {
      background-color: black;
      color: white;
      p {
        color: white;
      }
    }
  }
  .photography {
    width: 100%;
    color: black;
    .photography__container {
      padding: $verticalPadding $horizontalPadding;
      .title__container {
        text-align: center;
        h1 {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1vh;
          &:last-of-type {
            margin-bottom: 0;
          }
        }
        p {
          margin: ($verticalPadding / 2) auto 0 auto;
          color: $secondaryColor;
          line-height: 1.75;
        }
      }
      .statistics__container {
        padding-top: $verticalPadding;
        @include flex;
        flex-direction: column;
        .element {
          padding: $verticalPadding / 2;
          @include flex;
          flex-direction: column;
          .icon {
            width: 64px;
            height: 64px;
            margin: 2vh 0;
          }
          h1 {
            font-size: 4rem;
            font-weight: 500;
          }
          h3 {
            font-size: 1.5rem;
            font-weight: 500;
            margin-top: 2vh;
          }
          p {
            margin: ($verticalPadding / 2) 0 0 0;
            color: $secondaryColor;
            text-align: center;
            line-height: 1.75;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (min-height: 500px) {
    .description__section {
      min-height: 40vh;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      .description__container .description__wrapper {
        padding: $verticalPadding / 2 $horizontalPadding / 2;
      }
      &:nth-of-type(even) {
        .description__image {
          grid-column: 2;
          grid-row: 1;
        }
        .description__wrapper {
          text-align: right;
        }
      }
    }
    .photography .photography__container {
      .title__container {
        h1 {
          font-size: 2.5rem;
        }
        p {
          max-width: 60vw;
          margin-left: auto;
          margin-right: auto;
        }
      }
      .statistics__container {
        flex-direction: row;
        padding-top: $verticalPadding / 2;
      }
    }
  }
  @media (min-width: 1400px) and (orientation: landscape) {
    .description__section {
      &:nth-of-type(odd) {
        .description__container .description__wrapper {
          padding-right: $horizontalPadding;
        }
      }
      &:nth-of-type(even) {
        .description__container .description__wrapper {
          padding-left: $horizontalPadding;
        }
      }
    }
    .photography .photography__container {
      .title__container {
        padding: 0 $horizontalPadding * 1.25;
      }
      .statistics__container {
        padding: $verticalPadding * 1.25 $horizontalPadding * 1.25;
      }
    }
  }
}
</style>
