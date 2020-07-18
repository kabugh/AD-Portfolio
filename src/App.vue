<template>
  <div id="app">
    <LoadingOverlay />
    <TheNavbar v-if="$route.name !== 'service'" />
    <transition name="navOverlay">
      <NavOverlay v-if="isNavOpen"></NavOverlay>
    </transition>
    <router-view />
    <Contact />
  </div>
</template>
<script lang="ts">
import { Vue, Watch, Component } from "vue-property-decorator";
import LoadingOverlay from "./components/LoadingOverlay.vue";
import TheNavbar from "./components/TheNavbar.vue";
import NavOverlay from "./components/NavOverlay.vue";

import Contact from "./components/Contact.vue";

@Component({
  components: { LoadingOverlay, TheNavbar, NavOverlay, Contact }
})
export default class App extends Vue {
  get isNavOpen(): boolean {
    return this.$store.getters.isNavOpen;
  }

  @Watch("isNavOpen")
  blockOverflow() {
    this.isNavOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
</style>
