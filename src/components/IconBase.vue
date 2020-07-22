<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <!-- <title :id="iconName" lang="en">{{ iconName }} icon</title> -->
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class IconBase extends Vue {
  @Prop({ default: "box" }) iconName!: string;
  @Prop({ required: true }) width!: [number, string];
  @Prop({ required: true }) height!: [number, string];
  @Prop({ default: "white" }) iconColor!: string;
}
</script>

<style lang="scss" scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
