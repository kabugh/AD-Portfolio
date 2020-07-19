<template>
  <section ref="overlay" class="overlay">
    <div class="overlay__wrapper">
      <ul class="navItems">
        <li
          class="item"
          @click="$router.push(item.link)"
          v-for="(item, i) in filteredNavItems"
          :key="i"
        >
          {{ item.title }}
        </li>
        <li
          class="item"
          v-if="$route.path === '/'"
          v-scroll-to="'.introduction'"
        >
          Oferta
        </li>
        <li class="item" v-scroll-to="'.contact'">
          Kontakt
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavOverlay extends Vue {
  navItems = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Historie",
      link: "/historie"
    },
    {
      title: "O mnie",
      link: "/o-mnie"
    }
  ];

  get filteredNavItems() {
    const fitleredItems = [];
    this.navItems.forEach(item => {
      if (this.$route.path !== item.link) {
        fitleredItems.push(item);
      }
    });
    return fitleredItems;
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
// enter/leave overlay animation
.navOverlay-enter-active,
.navOverlay-leave-active {
  transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
}

.navOverlay-enter,
.navOverlay-leave-to {
  transform: translateY(100%);
}

.navOverlay-enter-to,
.navOverlay-leave {
  transform: translateX(0);
}

.overlay {
  position: fixed;
  bottom: 0;
  height: 100%;
  width: 100%;
  color: white;
  background-color: black;
  z-index: 1;
  .overlay__wrapper {
    padding: $verticalPadding * 3 4vh 4vh 4vh;
    @include flex;
    flex-direction: column;
    .navItems {
      padding: $verticalPadding / 2 0;
      display: grid;
      grid-template-columns: 1fr;
      row-gap: $verticalPadding;

      .item {
        font-size: 2.75rem;
        line-height: 1.5;
        text-align: center;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 850px) and (max-height: 450px) and (orientation: landscape) {
    .overlay__wrapper .navItems .item {
      font-size: 2.25rem;
    }
  }
  @media (max-width: 750px) and (max-height: 450px) and (orientation: landscape) {
    .overlay__wrapper .navItems .item {
      font-size: 2rem;
    }
  }
  @media (max-width: 650px) and (max-height: 450px) and (orientation: landscape) {
    .overlay__wrapper .navItems {
      row-gap: 4vh;
      .item {
        font-size: 1.75rem;
      }
    }
  }
}
</style>
