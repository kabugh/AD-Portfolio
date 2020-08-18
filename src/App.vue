<template>
  <div id="app">
    <LoadingOverlay />
    <TheNavbar v-if="$route.name !== 'service'" />
    <transition name="navOverlay">
      <NavOverlay v-if="isNavOpen"></NavOverlay>
    </transition>
    <transition name="fade" appear>
      <keep-alive include="Home">
        <router-view />
      </keep-alive>
    </transition>
    <Contact />
    <div id="fb-root"></div>
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="168432936633504"
      theme_color="#a695c7"
      logged_in_greeting="Hej, jak mogę pomóc? 😇"
      logged_out_greeting="Hej, jak mogę pomóc? 😇"
      greeting_dialog_display="fade"
      greeting_dialog_delay="60"
      minimalised="true"
    ></div>
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

  created() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    (window as any).fbAsyncInit = function() {
      /* eslint-disable prefer-const */
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      // eslint-disable-next-line no-undef
      FB.init({
        appId: "316128209570764",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v7.0"
      });
    };
    (function(d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      (js as any).src =
        "https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js";
      (fjs as any).parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
</style>
