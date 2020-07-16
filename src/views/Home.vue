<template>
  <section class="home">
    <StaticNavbar />
    <header class="hero">
      <vue-displacement-slideshow
        :images="slideShow.images"
        :displacement="require('@/assets/images/displacement.jpg')"
        :intensity="0.2"
        :speedIn="1.5"
        :speedOut="1.5"
        ease="expo.in"
        ref="slideshow"
        @animationEnd="nextTitle"
      >
      </vue-displacement-slideshow>
      <div
        class="slideshow__controls"
        data-aos="fade-up"
        data-aos-offset="-200"
        data-aos-delay="500"
      >
        <div class="prev__control" @click="$refs.slideshow.previous()"></div>
        <h2>{{ currentTitle }}</h2>
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
            Nazywam się <span>Alicja Dębek</span> i zapraszam Cię do świata
            fotografii naturalnej – czyli fotografii bez ustawiania, stresu i
            udawania. Tutaj skupiamy się na szczerych emocjach, detalach, i
            klimacie budowania opowieści.
          </p>
        </div>
      </div>
    </section>
    <section class="offer">
      <div class="offer__container">
        <div class="title__container">
          <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
            Oferta
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="150" data-aos-duration="600">
            Something cool to say here
          </h2>
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
                data-aos-delay="100"
                data-aos-duration="600"
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
  slideShow = {
    images: [
      require("@/assets/images/slideshow/1.jpg"),
      require("@/assets/images/slideshow/2.jpg"),
      require("@/assets/images/slideshow/3.jpg"),
      require("@/assets/images/slideshow/4.jpg"),
      require("@/assets/images/slideshow/5.jpg")
    ],
    titles: [
      "Basia & Roman",
      "Emily & Luke",
      "Sesja Kobieca",
      "Jagoda & Adriani",
      "Ola & Jacek"
    ]
  };
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
      orientation: "horizontal",
      article: [
        "Każde wesele traktuję jak własne. Staram się poznać Was jak najlepiej, wiedzieć co jest dla Was ważne, abyście nie mieli poczucia kogoś „obcego” w Waszym dniu.",
        "Nie fotografuję tylko kluczowych momentów, szukam detali, ciekawych sytuacji, gestów, spojrzeń, wszystkiego, co składa się na klimat tego wyjątkowego dnia.",
        "Potrafię sfotografować Was tak, abyście nie czuli się „ustawieni”. Na sesji plenerowej macie przede wszystkim świetnie się bawić, a ja zajmę się chwytaniem Waszych najlepszych momentów.",
        "Moje zdjęcia mają specyficzny styl. Lubię minimalizm, detale, delikatne kolory, światłocienie, niedopowiedzenia. Warto zajrzeć do mojego portfolio lub na facebooka, by przekonać się, czy i Wam ten styl odpowiada",
        "Wszyscy lubią gratisy! U mnie dostaniecie darmową sesję narzeczeńską, pendrive’a z albumem lub drewnianym pudełkiem na odbitki."
      ]
    },
    {
      title: "Sesja Kobieca",
      description: "test",
      image: "girl.jpg",
      orientation: "vertical",
      article: [
        "W przeciwieństwie do sesji ślubnej, tutaj nie ogranicza nas suknia i garnitur, a jedynie wyobraźnia.",
        "Namiot w lesie, hamak o zachodzie słońca, ognisko nad wodą? A może romantyczna kawiarnia, wieczór przy kominku lub szalony dzień na mieście?",
        "Pokażcie, jacy naprawdę jesteście, a zapewniam, że będziecie bardzo miło wracać do tych zdjęć.",
        "Sesja we dwoje to nie tylko zdjęcia Waszych twarzy, ale kawałek Waszej historii, dokument o Was i Waszym związku, pełen emocji, gestów, po prostu Was",
        "Jeśli myślicie, że nie umiecie „pozować”, to dobrze – bo nie musicie! Nie będzie tutaj sztuczności, stresu i krępującego ustawiania.",
        "Tylko Wy i Wasza opowieść."
      ]
    },
    {
      title: "Sesja Lifestyle",
      description: "test",
      image: "fire.jpg",
      orientation: "vertical",
      article: [
        "W przeciwieństwie do sesji ślubnej, tutaj nie ogranicza nas suknia i garnitur, a jedynie wyobraźnia.",
        "Namiot w lesie, hamak o zachodzie słońca, ognisko nad wodą? A może romantyczna kawiarnia, wieczór przy kominku lub szalony dzień na mieście?",
        "Pokażcie, jacy naprawdę jesteście, a zapewniam, że będziecie bardzo miło wracać do tych zdjęć.",
        "Sesja we dwoje to nie tylko zdjęcia Waszych twarzy, ale kawałek Waszej historii, dokument o Was i Waszym związku, pełen emocji, gestów, po prostu Was",
        "Jeśli myślicie, że nie umiecie „pozować”, to dobrze – bo nie musicie! Nie będzie tutaj sztuczności, stresu i krępującego ustawiania.",
        "Tylko Wy i Wasza opowieść."
      ]
    },
    {
      title: "Fotografia okolicznościowa",
      description: "test",
      image: "slideshow/5.jpg",
      orientation: "horizontal",
      article: [
        "W przeciwieństwie do sesji ślubnej, tutaj nie ogranicza nas suknia i garnitur, a jedynie wyobraźnia.",
        "Namiot w lesie, hamak o zachodzie słońca, ognisko nad wodą? A może romantyczna kawiarnia, wieczór przy kominku lub szalony dzień na mieście?",
        "Pokażcie, jacy naprawdę jesteście, a zapewniam, że będziecie bardzo miło wracać do tych zdjęć.",
        "Sesja we dwoje to nie tylko zdjęcia Waszych twarzy, ale kawałek Waszej historii, dokument o Was i Waszym związku, pełen emocji, gestów, po prostu Was",
        "Jeśli myślicie, że nie umiecie „pozować”, to dobrze – bo nie musicie! Nie będzie tutaj sztuczności, stresu i krępującego ustawiania.",
        "Tylko Wy i Wasza opowieść."
      ]
    }
  ];

  currentTitleIndex = 0;
  currentTitle = this.slideShow.titles[this.currentTitleIndex];

  nextTitle() {
    if (this.currentTitleIndex + 1 === this.slideShow.titles.length) {
      this.currentTitleIndex = 0;
    } else {
      this.currentTitleIndex++;
    }
    this.currentTitle = this.slideShow.titles[this.currentTitleIndex];
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
.home {
  width: 100%;
  .hero {
    width: 100%;
    height: 100vh;
    background-color: black;
    position: relative;
    font-family: "Crimson Text", sans-serif;
    .slideshow__controls {
      display: none;
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
          font-size: 1rem;
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
    .hero {
      .slideshow__controls {
        width: 100%;
        position: absolute;
        bottom: 0;
        padding-bottom: $verticalPadding;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        align-items: center;
        column-gap: 2vh;
        h2 {
          font-size: 1.5rem;
          transition: all 0.5s ease-in-out;
        }
        > div {
          background-image: url("../assets/images/icons/arrow.png");
          @include backgroundDefault;
          width: 36px;
          height: 36px;
          &:first-of-type {
            transform: rotate(180deg);
          }
          &:hover {
            cursor: pointer;
          }
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
