<template>
  <section class="service">
    <div class="service__container" v-if="currentService">
      <div class="image__container" :class="orientationClass(currentService)">
        <div
          :style="{
            backgroundImage: `url(${image}`
          }"
          :alt="currentService.title"
          class="image unselectable"
          ref="image"
        ></div>
        <div class="overlay" ref="overlay"></div>
      </div>
      <article class="service__article">
        <h1 ref="title">{{ currentService.title }}</h1>
        <div class="article__content" ref="content">
          <p v-if="currentService.shortIntro">
            {{ currentService.shortIntro }}
          </p>
          <p>{{ currentService.description }}</p>
          <p v-if="currentService.additionalDescription">
            {{ currentService.additionalDescription }}
          </p>
          <div class="story__teaser" v-if="currentService.storyPhoto">
            <img :src="currentService.storyPhoto.fields.file.url" alt="story" />
            <p>Sprawdź przykładową sesję tego rodzaju klikając poniżej</p>
            <button
              type="button"
              class="dark thin"
              @click="$router.push(`/historie/${currentService.storyLink}`)"
            >
              Sprawdź
            </button>
          </div>
        </div>
      </article>
    </div>
    <div class="service__container" v-else></div>
    <div class="back__button" @click="$router.go(-1)" ref="arrow"></div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { TimelineLite } from "gsap";

@Component({
  props: ["service"]
})
export default class Service extends Vue {
  overlayDelay = false;
  mounted() {
    if (this.$props.service !== undefined) {
      if (this.$props.service.slug === this.$route.params.name) {
        this.currentService = this.$props.service;
        this.overlayDelay = false;
        this.startAnimation(this.overlayDelay);
      }
    } else if (
      this.$props.service === undefined &&
      this.currentService.image !== undefined
    ) {
      this.overlayDelay = false;
      this.startAnimation(this.overlayDelay);
    } else {
      this.overlayDelay = true;
      this.$store
        .dispatch("fetchService", this.$route.params.name)
        .then(() => this.startAnimation(this.overlayDelay));
    }
  }

  set currentService(value) {
    this.$store.commit("setCurrentService", value);
  }

  get currentService() {
    return this.$store.getters.currentService;
  }

  get image() {
    if (this.currentService.image)
      return this.currentService.image.fields.file.url;
    else return null;
  }

  startAnimation(overlayDelay: boolean) {
    const image = this.$refs.image;
    const overlay = this.$refs.overlay;
    const title = this.$refs.title;
    const content = this.$refs.content;
    const arrow = this.$refs.arrow;

    const timeline1 = new TimelineLite();
    const timeline2 = new TimelineLite();

    const initialDelay = overlayDelay ? 1.5 : 0;
    timeline1.from(overlay, {
      duration: 1.5,
      opacity: 0,
      ease: "power4",
      y: -100,
      delay: initialDelay
    });
    timeline2
      .from(image, {
        duration: 2.5,
        delay: 1 + initialDelay,
        opacity: 0,
        ease: "power4",
        y: -100
      })
      .to(image, { y: 0 });
    timeline1
      .from(title, { duration: 1.5, opacity: 0, y: -20, ease: "power4" })
      .to(title, { y: 0 })
      .from(
        arrow,
        { duration: 1.5, opacity: 0, y: -20, ease: "power4" },
        "-=1.5"
      )
      .to(arrow, { y: 0 });

    timeline2
      .from(
        content,
        { duration: 1, opacity: 0, y: -20, ease: "power4" },
        "-=1.8"
      )
      .to(content, { y: 0 });
  }

  orientationClass(item: { orientation: string }) {
    return {
      horizontal: item.orientation === "horizontal",
      vertical: item.orientation === "vertical"
    };
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/global.scss";
.service {
  width: 100%;
  position: relative;
  .service__container {
    color: black;
    @include flex;
    flex-direction: column;
    width: 100%;
    padding: 3/2 * $verticalPadding $horizontalPadding / 2 0 $horizontalPadding /
      2;
    .image__container {
      max-width: 100%;
      max-height: 60vh;
      width: 100%;
      height: 60vh;
      position: relative;
      .image {
        width: 100%;
        height: 100%;
        @include backgroundDefault;
      }
      .overlay {
        // display: none;
        position: absolute;
        display: block;
        top: 0;
        width: 100%;
        height: 100%;
        // transform: translate(5%, -5%);
        background-color: black;
        z-index: -1;
      }
    }
    .service__article {
      padding: $verticalPadding 0 $verticalPadding / 4 0;
      @include flex;
      flex-direction: column;
      h1,
      h2 {
        margin: $verticalPadding / 2 0;
        font-size: 2rem;
        text-align: center;
        font-weight: 600;
        text-transform: uppercase;
      }
      h2 {
        font-size: 1.25rem;
      }
      p {
        margin: $verticalPadding / 2 0;
        text-align: left;
        font-size: 1.125rem;
      }
      ul {
        margin: $verticalPadding / 4 0;
        display: grid;
        row-gap: $verticalPadding / 2;
        li {
          font-size: 1.125rem;
        }
      }
      .story__teaser {
        max-width: 100%;
        min-height: 30vh;
        margin: $verticalPadding * 3 / 2 auto 0 auto;
        @include flex;
        flex-direction: column;
        p {
          text-align: center;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        button {
          margin-top: $verticalPadding / 2;
        }
      }
    }
  }
  .back__button {
    top: $verticalPadding / 4;
    left: $verticalPadding / 2;
    position: absolute;
    @include backgroundDefault;
    background-image: url("../assets/images/icons/arrow_black.png");
    width: 32px;
    height: 32px;
    &:hover {
      cursor: pointer;
    }
    @media (min-width: 360px) {
      width: 48px;
      height: 48px;
    }
  }
  @media (min-width: 500px) and (min-height: 500px) {
    .service__container .image__container.vertical {
      max-width: 70%;
    }
    .service__article .article__content {
      .story__teaser {
        max-width: 80%;
        min-height: 30vh;
        button {
          font-size: 14px;
        }
      }
    }
    .back__button {
      top: $verticalPadding / 2;
      left: $verticalPadding;
    }
  }
  @media (min-width: 768px) and (min-height: 500px) {
    .service__container {
      padding: 3 / 2 * $verticalPadding $horizontalPadding * 3 / 2;
      .image__container {
        &.vertical {
          max-width: 90%;
        }
        .overlay {
          position: absolute;
          display: block;
          top: 0;
          width: 100%;
          height: 100%;
          transform: translate(5%, -5%);
          background-color: black;
          z-index: -1;
        }
      }
      .service__article {
        h1 {
          font-size: 2rem;
          margin: $verticalPadding / 4 0;
        }
        .story__teaser button {
          margin-top: 0;
        }
      }
    }

    .back__button {
      position: fixed;
      top: $verticalPadding;
      left: $verticalPadding;
    }
  }
  @media (min-width: 768px) and (min-height: 500px) and (max-height: 900px) {
    .service__container .image__container.vertical {
      max-width: 60%;
    }
  }
  @media (min-width: 768px) and (min-height: 500px) and (max-height: 1024px) and (orientation: landscape) {
    .service__container .image__container.vertical {
      max-width: 60%;
    }
  }
  @media (max-width: 800px) and (max-height: 450px) and (orientation: landscape) {
    .service__container .image__container {
      max-width: 70%;
      &.vertical {
        max-width: 50%;
      }
    }
    .service__article .article__content {
      .story__teaser {
        max-width: 60%;
        min-height: 30vh;
      }
    }
  }
  @media (min-width: 1024px) and (min-height: 500px) {
    .service__container {
      padding: 3 / 2 * $verticalPadding $horizontalPadding * 2;
      .service__article {
        h1 {
          font-size: 2.5rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media (min-width: 1450px) and (min-height: 500px) {
    .service__container {
      padding: 3 / 2 * $verticalPadding $horizontalPadding * 5 / 2;
      .service__article {
        padding: $verticalPadding / 2 0;
        h1 {
          font-size: 2.75rem;
        }
        h2 {
          font-size: 1.75rem;
        }
        p,
        li {
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>
