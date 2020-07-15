<template>
  <nav>
    <div class="nav__container">
      <div class="logo__container" data-aos="fade-down" data-aos-delay="200">
        <!-- <div class="logo"></div> -->
        <h1>Alicja Dębek</h1>
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
      </ul>
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
  filteredNavItems() {
    return this.navItems.filter(item => item.link !== this.$route.path);
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/global.scss";
nav {
  position: absolute;
  background: transparent;
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  color: white;
}
.vue-displacement-slideshow {
  position: relative;
}
</style>
