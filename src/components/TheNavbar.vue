<template>
  <nav>
    <div class="nav__container">
      <div class="logo__container">
        <!-- <div class="logo"></div> -->
        <h1>Alicja Dębek</h1>
      </div>
      <ul class="nav__items">
        <li
          @click="$router.push(item.link)"
          class="item"
          v-for="(item, i) in filteredNavItems"
          :key="i"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TheNavbar extends Vue {
  navItems = [
    {
      title: "home",
      link: "/"
    },
    {
      title: "oferta",
      link: "/oferta"
    },
    {
      title: "historie",
      link: "/historie"
    },
    {
      title: "o mnie",
      link: "/o-mnie"
    },
    {
      title: "kontakt",
      link: "/kontakt"
    }
  ];

  filteredNavItems() {
    return this.navItems.filter(item => item.link !== this.$route.path);
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
nav {
  width: 100%;
  min-height: 12vh;
  position: fixed;
  background-color: white;
  z-index: 100;
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  @media (min-width: 700px) and (min-height: 1024px) {
    min-height: 6vh;
  }
  -webkit-box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.1);

  .nav__container {
    width: 100%;
    height: 100%;
    padding: $verticalPadding 6vw;
    display: grid;
    column-gap: 4vw;
    align-items: center;
    grid-template-columns: auto auto;
    .logo__container {
      min-width: 10vw;
      max-width: 20vw;
      height: 80%;
      h1 {
        font-size: 1.5rem;
        font-weight: 600;
        text-transform: uppercase;
        white-space: nowrap;
      }
      .logo {
        width: 100%;
        height: 100%;
        @include backgroundDefault;
        background-size: contain;
        background-image: url("../assets/images/logo.png");
      }
    }
    .nav__items {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(5, 1fr);
      justify-content: center;
      align-items: center;
      column-gap: 2vw;
      .item {
        @include flex;
        transition: all 0.2s ease-in-out;
        white-space: nowrap;
        text-transform: uppercase;
        &:hover {
          color: #eeeeee;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
