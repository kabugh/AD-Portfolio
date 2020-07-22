<template>
  <nav :class="{ fixed: $route.meta.navBarPosition === 'fixed' }">
    <div
      class="nav__container"
      v-if="
        this.$route.path === '/' ||
          this.$route.path === '/o-mnie' ||
          this.$route.path === '/historie'
      "
    >
      <div class="logo__container" data-aos="fade-down" data-aos-delay="200">
        <div class="logo" @click="$router.push('/')"></div>
      </div>
      <ul class="nav__items" data-aos="fade-down" data-aos-delay="400">
        <li
          class="item"
          v-scroll-to="'.introduction'"
          v-if="$route.path === '/'"
        >
          Oferta
        </li>
        <li class="item" @click="$router.push('/')" v-else>Start</li>
        <li
          @click="$router.push(item.link)"
          class="item"
          v-for="(item, i) in navItems"
          :key="i"
        >
          {{ item.title }}
        </li>
        <li class="item" v-scroll-to="'.contact'">Kontakt</li>
        <li class="item icons__container">
          <div
            class="icon__wrapper"
            @click="
              navigateOutside('https://instagram.com/alicjadebek_fotografia')
            "
          >
            <IconBase icon-name="instagram" :width="24" :height="24">
              <InstaIcon />
            </IconBase>
          </div>
          <div
            class="icon__wrapper"
            @click="
              navigateOutside('https://www.facebook.com/alicjadebekfotografia/')
            "
          >
            <IconBase icon-name="facebook" :width="24" :height="24">
              <FBIcon />
            </IconBase>
          </div>
        </li>
      </ul>
      <div class="burger__wrapper">
        <div
          class="nav-mobile"
          id="nav-icon"
          :class="{ open: isNavOpen }"
          @click="isNavOpen = !isNavOpen"
          v-if="
            $route.path !== '/historie/:id' && $route.path != '/uslugi/:name'
          "
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="nav__container" v-else-if="$route.meta.navBarPosition">
      <div
        class="back__button"
        :class="{ black__arrow: $route.meta.navBarColor === 'black' }"
        @click="$router.go(-1)"
        ref="arrow"
      ></div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import IconBase from "./IconBase.vue";
import InstaIcon from "./icons/InstaIcon.vue";
import FBIcon from "./icons/FBIcon.vue";

@Component({
  components: { IconBase, InstaIcon, FBIcon }
})
export default class TheNavbar extends Vue {
  navItems = [
    {
      title: "historie",
      link: "/historie"
    },
    {
      title: "o mnie",
      link: "/o-mnie"
    }
  ];

  navigateOutside(link: string) {
    window.open(link, "_blank");
  }

  get isNavOpen() {
    return this.$store.getters.isNavOpen;
  }
  set isNavOpen(value) {
    this.$store.commit("setNav", value);
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/global.scss";
@import "@/assets/scss/burgerNav.scss";

.vue-displacement-slideshow {
  position: relative;
}
nav {
  width: 100%;
  min-height: 12vh;
  position: absolute;
  background: transparent;
  font-family: "Crimson Text", serif;
  z-index: 2;
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  @media (min-width: 700px) and (min-height: 1024px) {
    min-height: 6vh;
  }

  .nav__container {
    width: 100%;
    height: 100%;
    padding: $verticalPadding / 2 $horizontalPadding / 2;
    display: grid;
    column-gap: 4vw;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 0.25fr 1fr 0.25fr;

    .logo__container {
      grid-column: 2;
      width: 100%;
      height: 12vh;
      .logo {
        width: 100%;
        height: 100%;
        @include backgroundDefault;
        background-size: contain;
        background-image: url("../assets/images/logo.png");
        &:hover {
          cursor: pointer;
        }
      }
    }
    .nav__items {
      display: none;
    }
    .back__button {
      @include backgroundDefault;
      background-image: url("../assets/images/icons/arrow.png");
      width: 32px;
      height: 32px;
      &:hover {
        cursor: pointer;
      }
      &.black__arrow {
        background-image: url("../assets/images/icons/arrow_black.png");
      }
      @media (min-width: 360px) {
        width: 48px;
        height: 48px;
      }
    }
    .burger__wrapper {
      grid-column: 3;
    }
  }

  &.fixed {
    height: 4vh;
    .nav__container {
      grid-template-columns: auto;
      padding-top: $verticalPadding / 4;
    }
  }

  @media (min-width: 768px) and (min-height: 500px) {
    &.fixed {
      position: fixed;
      .nav__container {
        padding-top: $verticalPadding;
      }
    }
    .nav__container {
      position: relative;
      grid-template-columns: minmax(20vw, 0.5fr) 1fr;
      justify-content: initial;

      .logo__container {
        grid-column: 1;
        min-width: 10vw;
        max-width: 20vw;
        height: 12vh;
      }
      .nav__items {
        grid-column: 2;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(auto-fit, minmax(6vw, 1fr));
        justify-content: center;
        align-items: center;
        column-gap: 2vw;
        .item {
          @include flex;
          transition: all 0.2s ease-in-out;
          white-space: nowrap;
          text-transform: capitalize;
          font-size: 1.25rem;
          position: relative;
          &:not(.icons__container):hover {
            cursor: pointer;
          }
          &:not(.icons__container) {
            &:hover:after {
              width: 100%;
            }
            &:after {
              content: "";
              display: block;
              position: absolute;
              left: 0px;
              background-color: white;
              height: 0.1em;
              margin-top: 0.8em;
              transition: width 0.5s cubic-bezier(0.76, 0, 0.24, 1);
              width: 0;
            }
          }
          &.icons__container {
            display: grid;
            grid-template-columns: repeat(2, minmax(1vw, 1fr));
            align-items: center;
            justify-items: center;
            .icon__wrapper {
              @include flex;
              &:hover svg {
                transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
                transform: scale(1.02);
              }
              svg:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
      .burger__wrapper {
        display: none;
      }
    }
  }
  @media (min-width: 1024px) and (min-height: 500px) {
    .nav__container {
      grid-template-columns: auto auto;
      .nav__items {
        grid-template-columns: repeat(auto-fit, minmax(2vw, 0.8fr));
        column-gap: 1vw;
      }
    }
  }
}
</style>
