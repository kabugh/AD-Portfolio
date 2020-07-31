<template>
  <section class="home">
    <header class="hero">
      <vue-displacement-slideshow
        :images="slideShow.images"
        :displacement="require('@/assets/images/displacement.png')"
        :intensity="0.1"
        :speedIn="1.4"
        :speedOut="1.4"
        ease="expo.in"
        ref="slideshow"
        @animationEnd="nextTitle"
      ></vue-displacement-slideshow>
      <div
        class="slideshow__controls"
        data-aos="fade-up"
        data-aos-offset="-200"
        data-aos-delay="500"
      >
        <div class="prev__control" @click="$refs.slideshow.previous()"></div>
        <transition name="slide-fade" mode="out-in">
          <h2 :key="currentTitle" ref="currentTitle">{{ currentTitle }}</h2>
        </transition>
        <div class="next__control" @click="$refs.slideshow.next()"></div>
      </div>
    </header>
    <section class="introduction">
      <div class="introduction__container">
        <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
          Hej
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="600"
          class="paragraph__wrapper"
        >
          <p>
            Cześć! Miło Cię widzieć na mojej stronie! Rozgość się, rozejrzyj, a
            ja opowiem Ci o mojej pracy. Nazywam się Ala i z zawodu fotografuję
            ludzi. To pasja i ogromny kawał życia. Zdjęcia, które robię,
            określiłabym jako ciepłe i naturalne. Zamiast jaskrawych kolorów i
            kontrastów, wolę delikatną zieleń i emocje. Ludzie mówią, że w pracy
            potrafię zniknąć i sprawić, by zapomnieli, że są fotografowani.
            Jeśli podoba Ci się taka wizja, napisz do mnie – stworzymy coś
            pięknego!
          </p>
        </div>
      </div>
    </section>
    <section class="offer">
      <div class="offer__container">
        <div class="title__container">
          <h1 data-aos="fade-up" data-aos-delay="250" data-aos-duration="600">
            Oferta
          </h1>
        </div>
        <ul class="offer__items">
          <li
            class="offer__item"
            v-for="(item, index) in offerItems"
            :key="index"
            :class="orientationClass(item)"
            @click="pushItem(item)"
          >
            <div class="image__wrapper">
              <img
                :src="item.image.fields.file.url"
                :alt="item.title"
                class="unselectable"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
              />

              <div class="image__description_layer">
                <div class="description__container">
                  <h1>{{ item.title }}</h1>
                </div>
              </div>
            </div>
            <h1 data-aos="fade-up" data-aos-delay="300">{{ item.title }}</h1>
            <hr data-aos="fade-up" data-aos-delay="300" class="title__line" />
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueDisplacementSlideshow from "vue-displacement-slideshow";
import { convertToSlug } from "@/utils/slugify";

@Component({
  components: {
    VueDisplacementSlideshow
  }
})
export default class Home extends Vue {
  created() {
    this.$store.dispatch("fetchServices");
  }

  mounted() {
    this.$watch(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      () => (this.$refs.slideshow as any).currentImage,
      val => {
        this.currentTitleIndex = val;
        this.currentTitle = this.slideShow.titles[this.currentTitleIndex];
      }
    );
  }

  publicPath = process.env.BASE_URL;
  slideShow = {
    images: [
      `${this.publicPath}img/slideshow/1.jpg`,
      `${this.publicPath}img/slideshow/2.jpg`,
      `${this.publicPath}img/slideshow/3.jpg`,
      `${this.publicPath}img/slideshow/4.jpg`,
      `${this.publicPath}img/slideshow/5.jpg`
    ],
    titles: [
      "Jagoda & Adriani",
      "Basia & Roman",
      "Emily & Luke",
      "Sesja Kobieca",
      "Ola & Jacek"
    ]
  };

  get offerItems() {
    return this.$store.getters.services;
  }

  currentTitleIndex = 0;
  currentTitle = this.slideShow.titles[this.currentTitleIndex];

  nextTitle() {
    this.$watch(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      () => (this.$refs.slideshow as any).currentImage,
      val => {
        this.currentTitleIndex = val;
        this.currentTitle = this.slideShow.titles[this.currentTitleIndex];
      }
    );
  }

  orientationClass(item: { orientation: string }) {
    return {
      horizontal: item.orientation === "horizontal",
      vertical: item.orientation === "vertical"
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pushItem(item: any) {
    this.$router.push({
      name: "service",
      params: { name: convertToSlug(item.title), service: item }
    });
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
.slide-fade-enter-active {
  transition: opacity 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}
.slide-fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}
.slide-fade-leave-to {
  opacity: 0;
}
.home {
  width: 100%;
  .hero {
    width: 100%;
    height: 100vh;
    background-color: black;
    position: relative;
    .vue-displacement-slideshow {
      canvas {
        transition: all 0.5s cubic-bezier(0.65, 0, 0.35, 1);
        background-color: gray;
      }
    }
    .slideshow__controls {
      width: 100%;
      position: absolute;
      bottom: 0;
      padding: $verticalPadding $horizontalPadding / 2 $verticalPadding * 2
        $horizontalPadding / 2;
      display: grid;
      grid-template-columns: auto 1fr auto;
      justify-items: center;
      align-items: center;
      column-gap: 2vh;
      h2 {
        font-size: 1.25rem;
        transition: all 1s 0.5s cubic-bezier(0.65, 0, 0.35, 1);
      }
      > div {
        background-image: url("../assets/images/icons/arrow.png");
        @include backgroundDefault;
        width: 48px;
        height: 48px;
        transition: scale 0.2s ease-in-out;
        &:last-of-type {
          transform: rotate(180deg);
          &:hover {
            cursor: pointer;
            transform: scale(1.05) rotate(180deg);
          }
        }
        &:hover {
          cursor: pointer;
          transform: scale(1.05);
        }
      }
    }
  }
  .introduction {
    width: 100%;
    .introduction__container {
      padding: $verticalPadding $horizontalPadding / 2 0 $horizontalPadding / 2;
      color: black;
      @include flex;
      flex-direction: column;
      position: relative;
      h1 {
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .paragraph__wrapper {
        padding: $verticalPadding / 2 0;
        margin: 0 auto;
        p {
          font-size: 1.25rem;
          line-height: 2;
        }
      }
    }
  }
  .offer {
    width: 100%;
    .offer__container {
      padding: $verticalPadding $horizontalPadding / 2;
      color: black;
      .title__container {
        padding-bottom: $verticalPadding;
        @include flex;
        flex-direction: column;
        h1 {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        h2 {
          font-size: 1.25rem;
          margin: 0.5vh;
          color: $secondaryColor;
        }
      }
      .offer__items {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: $verticalPadding;
        .offer__item {
          @include flex;
          flex-direction: column;
          &:hover {
            cursor: pointer;
          }
          .image__wrapper {
            width: 100%;
            max-height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
          h1 {
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: $verticalPadding / 2 0;
            text-align: center;
          }
          .image__description_layer,
          .description__container {
            display: none;
          }
        }
      }
    }
  }
  @media (min-width: 450px) and (min-height: 500px) {
    .hero .slideshow__controls {
      grid-template-columns: repeat(3, 1fr);
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
    }
    .offer .offer__container .offer__items .offer__item.vertical {
      max-width: 60%;
      margin: 0 auto;
    }
  }
  @media (min-width: 768px) and (min-height: 500px) {
    .hero {
      .slideshow__controls {
        h2 {
          font-size: 1.5rem;
        }
        > div {
          width: 36px;
          height: 36px;
        }
      }
    }
    .introduction .introduction__container {
      h1 {
        font-size: 3.5rem;
      }
      .paragraph__wrapper {
        max-width: 70vw;
        p {
          font-size: 1.25rem;
        }
      }
    }
    .offer .offer__container {
      .title__container {
        h1 {
          font-size: 3.5rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
      .offer__items {
        .offer__item {
          max-width: 50%;
          &.vertical {
            max-width: 35%;
            margin: 0 $horizontalPadding / 2;
            margin-top: -30%;

            &:first-of-type {
              justify-self: start;
            }

            &:nth-of-type(even) {
              margin-right: 0;
            }
            &:nth-of-type(odd) {
              margin-left: 0;
            }
          }
          &:nth-of-type(2n + 2) {
            justify-self: end;
            margin-top: -30%;
          }
        }
      }
    }
  }
  @media (min-width: 1024px) and (min-height: 500px) {
    .hero .slideshow__controls {
      > div {
        width: 48px;
        height: 48px;
      }
      h2 {
        font-size: 2rem;
      }
    }
    .introduction .introduction__container {
      padding-left: 2 * $horizontalPadding;
      padding-right: 2 * $horizontalPadding;
    }
    .offer .offer__container {
      .offer__items {
        grid-auto-rows: fit-content($verticalPadding);
        row-gap: $verticalPadding * 2;
        .offer__item {
          max-width: 50%;
        }
      }
    }
  }

  @media (min-width: 1024px) and (min-height: 500px) and (max-height: 900px) {
    .offer .offer__container {
      .title__container {
        h1 {
          font-size: 3.5rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
      .offer__items {
        grid-auto-rows: minmax(auto, 60vh);
      }
    }
  }
  @media (min-width: 1024px) and (min-height: 500px) and (hover: hover) and (pointer: fine) {
    .offer .offer__container .offer__items {
      grid-auto-rows: minmax(
        auto,
        60%
      ); // this line is the cause of the item jump
      .offer__item {
        h1,
        hr {
          display: none;
        }
        .image__wrapper {
          position: relative;
        }
        .image__description_layer {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: black;
          color: #fff;
          visibility: hidden;
          @include flex;
          transition: all 1s cubic-bezier(0.65, 0, 0.35, 1);
          height: 0; // bad practice should be translateY
        }
        &:not(.description__container):hover .image__description_layer {
          visibility: visible;
          height: 100%;
        }

        &:not(.description__container):hover .description__container {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
        .description__container {
          @include flex;
          transition: all 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          transform: translateY(-2em);
          opacity: 0;
          visibility: hidden;
          padding: 4vh;
          text-align: center;
          h1 {
            font-size: 1.75rem;
            text-transform: uppercase;
            margin-bottom: 2vh;
            display: block;
          }
        }
      }
    }
  }
  @media (min-width: 1450px) and (min-height: 500px) {
    .offer .offer__container {
      padding: $verticalPadding $horizontalPadding;
      .offer__items .offer__item.vertical {
        margin-top: -20%;
      }
    }
  }
}
</style>
