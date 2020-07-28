<template>
  <section class="aboutMe page">
    <HeroPage
      title="Alicja Dębek"
      subTitle="o mnie"
      description="Fotografia nie jest związana z patrzeniem, lecz z czuciem. Jeżeli nie czujesz nic w tym, na co patrzysz, nigdy nie uda ci się sprawić, aby ludzie patrząc na twoje zdjęcia, cokolwiek odczuwali."
      image="about.jpg"
    />
    <section
      v-for="(desc, index) in aboutMe"
      :key="index"
      class="description__section content__container"
    >
      <div
        class="description__image"
        :style="{
          backgroundImage: `url(${desc.image.fields.file.url})`
        }"
      ></div>
      <div class="description__container">
        <div class="description__wrapper">
          <h1 data-aos="fade-down" data-aos-duration="500">{{ desc.title }}</h1>
          <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
            {{ desc.subTitle }}
          </h3>
          <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
            {{ desc.description }}
          </p>
        </div>
      </div>
    </section>
    <!-- <section class="photography">
      <div class="photography__container">
        <div class="title__container">
          <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
            Fotografia jest sztuką.
          </h1>
          <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="250">
            Chodzi w niej o poszukiwanie nadzwyczajnych rzeczy.
          </h1>
          <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
            W zwyczajnych miejscach.
          </h1>
          <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
            Sesje fotograficzne to ciekawa przygoda, możliwość poznania siebie i
            spojrzenia na siebie z innej strony. Po wszystkim zostanie pamiątka
            na całe życie, bez względu na to, czy wrzucisz ją do internetu,
            podarujesz ukochanej osobie, czy schowasz do szuflady, by wrócić do
            niej za kilkadziesiąt lat.
          </p>
        </div>
        <div class="statistics__container">
          <div class="element" v-for="(item, i) in statistics" :key="i">
            <img
              class="icon unselectable"
              :src="require(`@/assets/images/icons/${item.icon}`)"
              alt="icon"
            />
            <h1>{{ item.number }}</h1>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section> -->
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeroPage from "@/components/HeroPage.vue";
@Component({
  components: { HeroPage }
})
export default class AboutMe extends Vue {
  created() {
    this.$store.dispatch("fetchAboutMe");
  }

  get aboutMe() {
    return this.$store.getters.aboutMe;
  }

  desca = [
    {
      image: "about1.jpg",
      title: "O Mnie",
      subTitle:
        "Nazywam się Alicja Dębek, a fotografia to jedna z moich największych pasji.",
      description:
        "Z wykształcenia jestem fototechnikiem. Uwielbiam fotografować kochających się ludzi, można powiedzieć, że jestem „zakochana w miłości”.  Często wzruszam się na ślubach, na szczęście za aparatem nikt tego nie widzi."
    },
    {
      image: "about2.jpg",
      title: "Zainteresowania",
      subTitle:
        "Prywatnie jestem introwertyczką, szczęśliwie zakochaną w pewnym artyście.",
      description:
        "Gram w gry komputerowe, lubię literaturę fantastyczną, dinozaury i kulturę pogańską. Fascynują mnie zwierzęta w każdej postaci. Po godzinach natomiast działam w temacie fotografii alternatywnej, współpracując z modelkami, projektantami i makijażystami, i realizując wspólnie różne magiczne, niekiedy nieco mroczne pomysły."
    }
  ];
  statistics = [
    {
      icon: "photo.png",
      number: "128",
      title: "Sesji fotograficznych",
      description:
        "Sesja to nie tylko zdjęcia Waszych twarzy, ale kawałek Waszej historii, dokument o Was, pełen emocji, gestów, po prostu Was"
    },
    {
      icon: "camera.png",
      number: "875",
      title: "Cudownych ujęć",
      description:
        "Moje dotychczasowe osiągnięcia to między innymi publikacja w Italian Vogue czy w Dark Beauty Magazine."
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
          font-weight: 600;
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
      padding: $verticalPadding $horizontalPadding $verticalPadding / 2
        $horizontalPadding;
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
      min-height: 50vh;
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
  @media (max-width: 850px) and (max-height: 450px) and (orientation: landscape) {
    .description__section {
      min-height: 80vh;
      .description__image {
        display: none;
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
      .description__container .description__wrapper {
        h1 {
          font-size: 2.5rem;
        }
        h3 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
    .photography .photography__container {
      .title__container {
        padding: 0 $horizontalPadding * 1.25;
      }
      .statistics__container {
        padding: $verticalPadding * 1.25 $horizontalPadding * 1.25 0
          $horizontalPadding * 1.25;
      }
    }
  }
}
</style>
