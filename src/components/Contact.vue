<template>
  <section class="contact">
    <div class="contact__container">
      <h1 data-aos="fade-up" data-aos-delay="300">
        So how can I make you shine?
      </h1>
      <h2 data-aos="fade-up" data-aos-delay="400">black logo here</h2>
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

@Component
export default class Contact extends Vue {
  navigateOutside(link: string) {
    window.open(link, "_blank");
  }
  socialsItems = [
    {
      icon: "instagram.svg",
      link: "https://instagram.com/alicjadebek_fotografia"
    },
    { icon: "fb.svg", link: "https://www.facebook.com/alicjadebekfotografia/" }
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
    padding: $verticalPadding $horizontalPadding;
    padding-bottom: 0;
    @include flex;
    flex-direction: column;
    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
    }
    h2,
    .logo {
      margin-top: 4vh;
    }
    .contact__items--container {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      row-gap: 4vh;
      padding: 3/2 * $verticalPadding 0 0 0;
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
      h1 {
        font-size: 2.5rem;
      }
    }
  }
}
</style>
