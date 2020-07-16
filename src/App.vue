<template>
  <div id="app">
    <LoadingOverlay />
    <!-- <TheNavbar v-if="$route.path !== '/'" /> -->
    <router-view />
    <Contact />
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
import LoadingOverlay from "./components/LoadingOverlay.vue";
import TheNavbar from "./components/TheNavbar.vue";
import Contact from "./components/Contact.vue";

@Component({
  components: { LoadingOverlay, TheNavbar, Contact }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
</style>
