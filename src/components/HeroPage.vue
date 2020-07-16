<template>
  <header
    class="hero"
    :style="{
      backgroundImage: 'url(' + require(`@/assets/images/${this.image}`) + ')'
    }"
  >
    <div class="hero__container">
      <h1 ref="title">{{ this.title }}</h1>
      <h2 ref="subtitle" class="highlighted">
        <span>{{ this.subTitle }}</span>
      </h2>
      <p ref="desc">
        {{ this.description }}
      </p>
      <button
        type="button"
        ref="button"
        class="thin"
        v-scroll-to="'.content__container'"
      >
        Zobacz więcej
      </button>
    </div>
  </header>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { TimelineLite } from "gsap";

@Component({
  props: ["title", "subTitle", "description", "image"]
})
export default class HeroPage extends Vue {
  mounted() {
    const title = this.$refs.title;
    const subtitle = this.$refs.subtitle;
    const desc = this.$refs.desc;
    const button = this.$refs.button;

    const timeline1 = new TimelineLite();
    const timeline2 = new TimelineLite();

    timeline1
      .from(title, {
        delay: 0.5,
        duration: 1.5,
        opacity: 0,
        y: -100,
        ease: "power4"
      })
      .to(title, { y: 0 })
      .from(
        subtitle,
        {
          delay: 1,
          duration: 1.5,
          opacity: 0,
          y: 100,
          ease: "power4"
        },
        "-=2.5"
      )
      .to(subtitle, { y: 0 });
    timeline2
      .from(desc, {
        delay: 1.5,
        duration: 1.5,
        opacity: 0,
        y: 100,
        ease: "power4"
      })
      .to(desc, { y: 0 })
      .from(button, { duration: 1, opacity: 0, y: 50, ease: "power4" }, "-=1.5")
      .to(button, { y: 0 });
  }
}
</script>
<style lang="scss" scoped>
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
    button {
      margin-top: 5vh;
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
