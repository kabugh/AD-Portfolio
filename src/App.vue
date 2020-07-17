<template>
  <div id="app">
    <LoadingOverlay />
    <StaticNavbar />
    <router-view />
    <Contact />
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
import LoadingOverlay from "./components/LoadingOverlay.vue";
import StaticNavbar from "./components/StaticNavbar.vue";
import Contact from "./components/Contact.vue";

@Component({
  components: { LoadingOverlay, StaticNavbar, Contact }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
</style>
