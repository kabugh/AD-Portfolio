<template>
  <div id="app">
    <!-- <TheNavbar v-if="$route.path !== '/'" /> -->
    <StaticNavbar />
    <router-view />
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
import TheNavbar from "./components/TheNavbar.vue";
import StaticNavbar from "@/components/StaticNavbar.vue";

@Component({
  components: { TheNavbar, StaticNavbar }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
</style>
