<template>
  <section class="home">
    <StaticNavbar />
    <header class="hero" @click="$refs.slideshow.next()">
      <vue-displacement-slideshow
        :images="img"
        :displacement="require('@/assets/images/displacement.jpg')"
        :intensity="0.2"
        :speedIn="1.5"
        :speedOut="1.5"
        ease="expo.in"
        ref="slideshow"
      >
      </vue-displacement-slideshow>
    </header>
    <section class="offer">
      <div class="offer__container">
        <div class="title__container">
          <h1>Oferta</h1>
          <h2>Something cool to say here</h2>
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
                :src="require(`@/assets/images/${item.image}`)"
                :alt="item.title"
                class="unselectable"
                data-aos="fade-up"
              />

              <div class="image__description_layer">
                <div class="description__container">
                  <h1>{{ item.title }}</h1>
                </div>
              </div>
            </div>
            <h1 data-aos="fade-up" data-aos-delay="100">{{ item.title }}</h1>
            <hr data-aos="fade-up" data-aos-delay="200" class="title__line" />
          </li>
        </ul>
      </div>
    </section>
    <Contact />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StaticNavbar from "@/components/StaticNavbar.vue";
import Contact from "@/components/Contact.vue";
import VueDisplacementSlideshow from "vue-displacement-slideshow";
import { convertToSlug } from "@/utils/slugify";
@Component({
  components: {
    StaticNavbar,
    Contact,
    VueDisplacementSlideshow
  }
})
export default class Home extends Vue {
  orientationClass(item: { orientation: string }) {
    return {
      horizontal: item.orientation === "horizontal",
      vertical: item.orientation === "vertical"
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pushItem(item: any) {
    this.$router.push({
      name: "Service",
      params: { name: convertToSlug(item.title), service: item }
    });
  }
  img = [
    require("@/assets/images/slideshow/1.jpg"),
    require("@/assets/images/slideshow/2.jpg"),
    require("@/assets/images/slideshow/3.jpg"),
    require("@/assets/images/slideshow/4.jpg"),
    require("@/assets/images/slideshow/5.jpg")
  ];
  images = [
    {
      url:
        "https://images.unsplash.com/photo-1594725224909-0e66d59ed0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      name: "Movements",
      description:
        "Lorem ipsum dolor sit amet enim. Etiam ullamcorper., maleicies porta urna. Vestibulusis."
    },
    {
      url:
        "https://images.unsplash.com/photo-1594725224909-0e66d59ed0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      name: "Collaborative",
      description:
        "Lorem ipsum dolor sit amet enim. Etiam ullamcorper., maleicies porta urna. Vestibulusis."
    },
    {
      url:
        "https://images.unsplash.com/photo-1594725224909-0e66d59ed0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      name: "Storytelling",
      description:
        "Lorem ipsum dolor sit amet enim. Etiam ullamcorper., maleicies porta urna. Vestibulusis."
    },
    {
      url:
        "https://images.unsplash.com/photo-1594725224909-0e66d59ed0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      name: "Theory of change",
      description:
        "Lorem ipsum dolor sit amet enim. Etiam ullamcorper., maleicies porta urna. Vestibulusis."
    }
  ];

  offerItems = [
    {
      title: "Reportaż Ślubny",
      description: "test",
      image: "slideshow/4.jpg",
      orientation: "horizontal"
    },
    {
      title: "Sesja Kobieca",
      description: "test",
      image: "girl.jpg",
      orientation: "vertical"
    },
    {
      title: "Sesja Lifestyle",
      description: "test",
      image: "fire.jpg",
      orientation: "vertical"
    },
    {
      title: "Fotografia okolicznościowa",
      description: "test",
      image: "slideshow/5.jpg",
      orientation: "horizontal"
    }
  ];
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
.home {
  width: 100%;
  .hero {
    width: 100%;
    height: 100vh;
    background-color: black;
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
            max-height: 80vh;
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
    .offer .offer__container .offer__items .offer__item.vertical {
      max-width: 60%;
      margin: 0 auto;
    }
  }
  @media (min-width: 768px) and (min-height: 500px) {
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
          max-width: 60%;
          &.vertical {
            max-width: 35%;
            margin: 0 $horizontalPadding / 2;
            &:first-of-type {
              justify-self: start;
            }
            &:nth-of-type(2n + 1) {
              justify-self: end;
              margin-top: -50%;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1024px) and (min-height: 500px) {
    .offer .offer__container {
      .offer__items {
        grid-auto-rows: fit-content($verticalPadding);
        row-gap: $verticalPadding * 2;
        .offer__item {
          max-width: 50%;
          &.vertical {
            &:nth-of-type(2n + 1) {
              margin-top: -25%;
            }
            .image__wrapper {
              max-width: 90%;
            }
          }
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
      grid-auto-rows: minmax(auto, 60%);
      .offer__item {
        &.vertical {
          &:nth-of-type(2n + 1) {
            margin-top: -50%;
          }
        }
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
        &:hover .image__description_layer {
          visibility: visible;
          height: 100%;
        }

        &:hover .description__container {
          transform: translateY(0);
          opacity: 1;
        }
        .description__container {
          @include flex;
          transition: all 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          transform: translateY(-2em);
          opacity: 0;
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
      padding: $verticalPadding $horizontalPadding * 3 / 2;
    }
  }
}
</style>
