<template>
  <section class="loading__overlay" ref="overlay">
    <div class="loading__overlay--container">
      <div
        class="logo"
        data-aos="fade-down"
        data-aos-duration="900"
        data-aos-delay="150"
        data-aos-easing="ease-in-out-quart"
        ref="logo"
      ></div>
      <div class="spinner" ref="spinner">
        <div class="mask">
          <div class="maskedCircle"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import slideAnimations from "@/utils/slideAnimations";
import { TimelineLite } from "gsap";

@Component
export default class LoadingOverlay extends Vue {
  beforeCreate() {
    document.body.style.overflowY = "hidden";
  }
  mounted() {
    window.addEventListener("load", () => {
      this.onLoadAnimation();
    });
  }

  onLoadAnimation() {
    const timeline1 = new TimelineLite();
    const timeline2 = new TimelineLite();
    timeline1.to(this.$refs.logo, { opacity: 0, y: -50 });
    timeline2.to(this.$refs.spinner, { opacity: 0 });
    slideAnimations.hideElement(this.$refs.overlay);
    setTimeout(() => (document.body.style.overflowY = "visible"), 500);
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/global.scss";
.loading__overlay {
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: black;
  @include flex;
  z-index: 100;
  .loading__overlay--container {
    @include flex;
    flex-direction: column;
    .logo {
      width: 360px;
      height: 240px;
      background-image: url("../assets/images/logo.png");
      @include backgroundDefault;
      background-size: contain;
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .maskedCircle {
      width: 20px;
      height: 20px;
      border-radius: 12px;
      border: 3px solid white;
    }
    .mask {
      width: 12px;
      height: 12px;
      overflow: hidden;
    }
    .spinner {
      width: 26px;
      height: 26px;
      animation: spin 1s infinite linear;
    }
  }
}
</style>
