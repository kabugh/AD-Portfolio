<template>
  <nav>
    <div class="nav__container">
      <div class="logo__container" data-aos="fade-down" data-aos-delay="200">
        <div class="logo"></div>
      </div>
      <ul class="nav__items" data-aos="fade-down" data-aos-delay="400">
        <li class="item" v-scroll-to="'.offer'">Oferta</li>
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
          <img
            v-for="socialItem in socialsItems"
            :key="socialItem.icon"
            :src="require(`@/assets/images/icons/${socialItem.icon}`)"
            :alt="socialItem.icon"
            @click="navigateOutside(socialItem.link)"
          />
        </li>
      </ul>
      <div class="icons__container" data-aos="fade-left"></div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class StaticNavbar extends Vue {
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

  socialsItems = [
    {
      icon: "insta_white.png",
      link: "https://instagram.com/alicjadebek_fotografia"
    },
    {
      icon: "fb_white.png",
      link: "https://www.facebook.com/alicjadebekfotografia/"
    }
  ];

  navigateOutside(link: string) {
    window.open(link, "_blank");
  }

  filteredNavItems() {
    return this.navItems.filter(item => item.link !== this.$route.path);
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/global.scss";
.vue-displacement-slideshow {
  position: relative;
}
nav {
  width: 100%;
  min-height: 12vh;
  position: absolute;
  background: transparent;
  font-family: "Crimson Text", serif;
  z-index: 99;
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
    padding: $verticalPadding $horizontalPadding / 2;
    display: grid;
    column-gap: 4vw;
    align-items: center;
    grid-template-columns: auto auto;
    .logo__container {
      min-width: 10vw;
      max-width: 20vw;
      height: 12vh;
      .logo {
        width: 100%;
        height: 100%;
        @include backgroundDefault;
        background-size: contain;
        background-image: url("../assets/images/logo.png");
      }
    }
    .nav__items {
      display: none;
    }
  }

  @media (min-width: 768px) and (min-height: 500px) {
    .nav__container {
      position: relative;
      .nav__items {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(5, minmax(2vw, 0.8fr));
        justify-content: center;
        align-items: center;
        column-gap: 1vw;
        .item {
          @include flex;
          transition: all 0.2s ease-in-out;
          white-space: nowrap;
          text-transform: capitalize;
          font-size: 1.25rem;
          &:hover {
            color: #eeeeee;
            cursor: pointer;
          }
          &.icons__container {
            display: grid;
            grid-template-columns: repeat(2, minmax(1vw, 1fr));
            align-items: center;
            justify-items: center;
          }
          img {
            width: 24px;
            height: 24px;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
