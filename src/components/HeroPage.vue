<template>
  <header class="hero">
    <div class="hero__container">
      <h1 data-aos="fade-up">{{ this.title }}</h1>
      <h2 class="highlighted" data-aos="fade-up" data-aos-delay="200">
        <span>{{ this.subTitle }}</span>
      </h2>
      <p data-aos="fade-up" data-aos-delay="300">
        {{ this.description }}
      </p>
    </div>
  </header>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  props: ["title", "subTitle", "description"]
})
export default class HeroPage extends Vue {}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
.hero {
  width: 100%;
  height: 100vh;
  @include backgroundDefault;
  background-image: url("../assets/images/bg.jpg");
  @include flex;
  .hero__container {
    @include flex;
    flex-direction: column;
    padding: $verticalPadding $horizontalPadding;
    h1 {
      font-size: 2rem;
      font-weight: 400;
    }
    h2 {
      margin: 2vh 0;
      font-size: 1.25rem;
      text-transform: uppercase;
      &.highlighted {
        text-align: center;
        > span {
          position: relative;
          display: inline-block;
          &:before,
          &:after {
            content: "";
            position: absolute;
            top: 50%;
            border-bottom: 1px solid;
            width: 20px;
            margin: 0 20px;
          }
        }
        > span:before {
          right: 100%;
        }
        > span:after {
          left: 100%;
        }
      }
    }
    p {
      text-align: center;
      font-size: 1rem;
      font-weight: 300;
      max-width: 60vw;
    }
  }
}
@media (min-width: 768px) and (min-height: 500px) {
  .hero .hero__container {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.25rem;
      margin-bottom: 4vh;
      &.highlighted > span &:before,
      &:after {
        width: 75px;
      }
    }
    p {
      font-size: 1.25rem;
      max-width: 50vw;
    }
  }
}
</style>
