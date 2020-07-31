<template>
  <section class="contact">
    <div class="contact__container">
      <h1 data-aos="fade-up" data-aos-delay="300">
        Zobacz moje portfolio na
        <span
          @click="
            navigateOutside('https://instagram.com/alicjadebek_fotografia')
          "
          >@alicjadebek_fotografia</span
        >
      </h1>
      <Instagram />
      <Partners v-if="$route.path === '/'" />
      <img
        src="@/assets/images/logo_black.png"
        alt="logo_black"
        class="logo unselectable"
      />
      <section class="contact__items--container">
        <div class="socials__items">
          <div class="socials__item" v-for="(item, j) in socialsItems" :key="j">
            <img
              :src="require(`@/assets/images/icons/${item.icon}`)"
              :alt="item.icon"
              class="icon"
              @click="navigateOutside(item.link)"
            />
          </div>
        </div>
        <div class="contact__items">
          <div class="contact__item">
            <a href="mailto:kontakt@alicjadebek.pl">kontakt@alicjadebek.pl</a>
          </div>
          <div class="contact__item">
            <a href="tel:0048691242622">+48 691 242 622</a>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Instagram from "./Instagram.vue";
import Partners from "./Partners.vue";

@Component({
  components: { Instagram, Partners }
})
export default class Contact extends Vue {
  navigateOutside(link: string) {
    window.open(link, "_blank");
  }
  socialsItems = [
    {
      icon: "instagram.svg",
      link: "https://instagram.com/alicjadebek_fotografia"
    },
    { icon: "fb.svg", link: "https://www.facebook.com/alicjadebekfotografia/" },
    {
      icon: "messenger.svg",
      link: "https://www.messenger.com/t/alicjadebekfotografia"
    }
  ];
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
.contact {
  width: 100%;
  padding: $verticalPadding 0;
  .contact__container {
    color: black;
    padding: $verticalPadding / 4 $horizontalPadding;
    padding-bottom: 0;
    @include flex;
    flex-direction: column;
    h1 {
      font-size: 1.25rem;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      span {
        transition: color 0.5s ease-in-out;
        &:hover {
          cursor: pointer;
          color: $thirdColor;
        }
      }
    }
    .logo {
      margin-top: $verticalPadding / 2;
      max-width: 55vw;
    }
    .contact__items--container {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      row-gap: 4vh;
      padding: $verticalPadding 0 0 0;
      span {
        font-size: 1.5rem;
      }
      .contact__items {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        row-gap: 2vh;
        .contact__item {
          @include flex;
          text-align: center;
          a {
            font-size: 1.25rem;
            text-decoration: none;
            color: black;
            position: relative;
            transition: all 0.5s ease-in-out;
            &:after {
              content: "";
              display: block;
              position: absolute;
              left: 0px;
              background-color: black;
              height: 0.1em;
              margin-top: 0.2em;
              transition: width 0.5s cubic-bezier(0.76, 0, 0.24, 1);
              width: 0;
            }
            &:hover:after {
              width: 100%;
            }
          }
        }
      }
      .socials__items {
        @include flex;
        .socials__item {
          padding: 0 2vw;
          &:first-of-type {
            padding-left: 0;
          }
          &:last-of-type {
            padding-right: 0;
          }
          img {
            width: 48px;
            height: 48px;
            transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
            &:hover {
              cursor: pointer;
              transform: scale(1.01);
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (min-height: 500px) {
    .contact__container {
      .logo {
        margin-top: $verticalPadding / 2;
        max-width: 60vw;
      }
      h1 {
        font-size: 1.5rem;
      }

      .contact__items--container {
        padding-top: $verticalPadding / 2;
      }
    }
  }
  @media (max-width: 850px) and (max-height: 450px) and (orientation: landscape) {
    .contact__container {
      .logo {
        max-width: 35vw;
      }
    }
  }
  @media (max-width: 750px) and (max-height: 450px) and (orientation: landscape) {
    .contact__container {
      .logo {
        max-width: 25vw;
      }
    }
  }

  @media (min-width: 1024px) and (min-height: 500px) {
    .contact__container {
      .logo {
        max-width: 15vw;
      }
      .contact__items--container .contact__items .contact__item a {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
