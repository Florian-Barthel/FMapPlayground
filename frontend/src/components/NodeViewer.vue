<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: ['node'],
  computed: {
    topLevelClasses() {
      if (this.node) {
        return 'node-viewer'
      }
      return 'node-viewer hidden'
    }
  }
})
</script>

<template>
  <div :class="topLevelClasses">
    <button>Close</button>
    <h2>{{ node?.id }}</h2>
    <h3>Feature Map</h3>
    <img class="featuremap" src="/seehorse.jpg">
  </div>
</template>

<style lang="scss" scoped>
  .node-viewer {
    background-color: wheat;
    color: black;
    position: absolute;
    top: 16px;
    left: 16px;
    width: 200px;

    .featuremap {
      width: 100%;
    }
  }
  .node-viewer.hidden {
    left: -300px;
  }
</style>
