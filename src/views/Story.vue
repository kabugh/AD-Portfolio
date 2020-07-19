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
      <section
        class="block__container"
        v-for="(element, index) in storyData"
        :key="index"
      >
        <h1 data-aos="fade-up" :data-aos-delay="100 + index * 100">
          {{ element.title }}
        </h1>
        <h3 data-aos="fade-up" data-aos-delay="200">{{ element.lead }}</h3>
        <p data-aos="fade-up" data-aos-delay="300">{{ element.paragraph }}</p>
        <div data-aos="fade-up" data-aos-delay="400" class="image__wrapper">
          <img :src="element.image" :alt="element.title" class="unselectable" />
        </div>
      </section>
    </article>
    <PhotoGallery
      :images="passedItem.images"
      :displayImageOnly="true"
      :zoomedPhotos="true"
    />
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

  storyData = [
    {
      title: "Przygotowania",
      lead:
        "Przypadkowy opis.. - bohaterowie poniższej historii są miłośnikami zwierząt. Na zdjęciach możemy zobaczyć nie tylko przygotowania do ślubu w okolicach stadniny, ale także ich fantastyczne psy. Na twarzach zakochanych w dniu uroczystości nie zauważycie nawet nutki stresu – było za to dużo uśmiechu i romantycznych spojrzeń.",
      paragraph:
        "Wyjątkowy, włoski klimat tego przepięknego obiektu sprawia, że czas zatrzymuje się tu w miejscu. Zarówno wnętrze rustykalnej sali weselnej, jak i otoczenie oazy wręcz powala na kolana. Każdy detal jest tu dopracowany w najmniejszym stopniu. Surowe cegły, drewno, przepiękny wystrój oraz otoczenie natury sprawiają, że niezwykły dzień ślubu staje się jeszcze piękniejszy. W Oazie panuje bardzo spokojny, sielankowy klimat. ",
      image:
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A2660-1024x683.jpg"
    },
    {
      title: "Dzień pierwszy",
      lead:
        "Przypadkowy opis.. - bohaterowie poniższej historii są miłośnikami zwierząt. Na zdjęciach możemy zobaczyć nie tylko przygotowania do ślubu w okolicach stadniny, ale także ich fantastyczne psy. Na twarzach zakochanych w dniu uroczystości nie zauważycie nawet nutki stresu – było za to dużo uśmiechu i romantycznych spojrzeń.",
      paragraph:
        "Wyjątkowy, włoski klimat tego przepięknego obiektu sprawia, że czas zatrzymuje się tu w miejscu. Zarówno wnętrze rustykalnej sali weselnej, jak i otoczenie oazy wręcz powala na kolana. Każdy detal jest tu dopracowany w najmniejszym stopniu. Surowe cegły, drewno, przepiękny wystrój oraz otoczenie natury sprawiają, że niezwykły dzień ślubu staje się jeszcze piękniejszy. W Oazie panuje bardzo spokojny, sielankowy klimat. ",
      image:
        "http://eterlight.pl/wp-content/uploads/2019/09/BJ0A3213-1024x683.jpg"
    }
  ];
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";

.story {
  width: 100%;
  .hero {
    width: 100%;
    height: 50vmin;
    min-height: 40vh;
    @include backgroundDefault;
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
    display: grid;
    grid-template-columns: minmax(20vw, 1fr);
    row-gap: $verticalPadding;
    color: black;
    padding: $verticalPadding $horizontalPadding / 2;
    position: relative;
    .block__container {
      display: grid;
      grid-template-columns: minmax(20vw, 1fr);
      row-gap: 2vh;
      h1 {
        font-size: 2rem;
        font-weight: 700;
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
      .image__wrapper {
        width: 100%;
        margin-top: 4vh;
        img {
          width: 100%;
          height: 100%;
          max-height: 70vh;
        }
      }
    }
  }
  .photoGallery .photoGallery__container {
    padding: $verticalPadding $horizontalPadding / 2;
  }
  @media (min-width: 360px) {
    .story__container .block__container {
      h3 {
        font-size: 1.25rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  @media (max-height: 500px) and (orientation: landscape) {
    .story__container {
      row-gap: $verticalPadding * 2;
      .block__container {
        .image__wrapper {
          width: 70%;
          margin-left: auto;
          margin-right: auto;
          img {
            max-height: 70vh;
          }
        }
      }
    }
  }
  @media (min-width: 450px) {
    .hero .hero__container h1 {
      font-size: 2rem;
    }
  }
  @media (min-width: 768px) and (min-height: 500px) {
    .hero .hero__container h1 {
      font-size: 3rem;
    }
    .story__container,
    .photoGallery .photoGallery__container {
      padding: $verticalPadding $horizontalPadding;
    }
  }
  @media (min-width: 1024px) and (min-height: 500px) {
    .story__container,
    .photoGallery .photoGallery__container {
      padding: $verticalPadding $horizontalPadding * 3 /2;
    }
  }
  @media (min-width: 1250px) and (min-height: 500px) {
    .story__container {
      padding: $verticalPadding $horizontalPadding * 2;
      .block__container {
        h1 {
          font-size: 2.5rem;
        }
        h3 {
          font-size: 1.25rem;
        }
        p {
          font-size: 1.125rem;
        }
      }
    }
    .photoGallery .photoGallery__container {
      padding: $verticalPadding $horizontalPadding;
    }
  }
  @media (min-width: 1450px) and (min-height: 500px) {
    .story__container .block__container {
      h3 {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
