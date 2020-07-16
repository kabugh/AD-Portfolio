<template>
  <nav>
    <div class="nav__container">
      <div class="logo__container">
        <div class="logo"></div>
      </div>
      <ul class="nav__items">
        <li v-scroll-to="'.offer'">Oferta</li>
        <li
          @click="$router.push(item.link)"
          class="item"
          v-for="(item, i) in filteredNavItems"
          :key="i"
        >
          {{ item.title }}
        </li>
        <li v-scroll-to="'.contact'">Kontakt</li>
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
