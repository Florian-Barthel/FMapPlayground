<script lang="ts">
import {defineComponent} from 'vue';


export default defineComponent({
  props: ['node', 'fmap', 'info'],
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
    <h2 style="text-align: center">{{ node?.id }}</h2>
    <table class="info-box">

      <tr>
        <td style="width: 15%;"><img :src="fmap.in" class="featuremap-in"></td>
        <td style="width: 70%;" class="info-text">
          <h2>{{ info?.text?.description }}</h2>
          <p v-if="info?.text?.doc" class="info-doc" v-html="info.text.doc"></p>
        </td>
        <td style="width: 15%;"><img :src="fmap.out" class="featuremap-out"></td>
      </tr>
      <tr>
        <td style="text-align: center;">Input Feature Map</td>
        <td><a v-bind:href="info?.text?.file">{{ info?.text?.file }}</a></td>
        <td style="text-align: center;">Output Feature Map</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.node-viewer {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #29293f;
  position: absolute;
  bottom: 0;
  left: 0;
  width: auto;
  height: auto;
  right: 0;
  box-shadow: 0 0 20px rgba(34, 34, 34, 0.5);

  .featuremap-in {
    width: 100%;
    image-rendering: pixelated;
  }

  .featuremap-out {
    width: 100%;
    image-rendering: pixelated;
  }

  .info-doc {
    transition: max-height 1s;
    overflow-y: scroll;
    max-height: 200px;
    background: #e3e3e3;
    color: black;
    border-radius: 10px;
    padding: 10px;
  }

  .info-doc:hover {
    max-height: 500px;
  }

  .info-doc::-webkit-scrollbar {
    display: none;
  }

  .info-text {
    padding: 10px;
  }

  .info-box {
    width: 100%;
    table-layout: fixed;
  }
}

.node-viewer.hidden {
  left: -300px;
}
</style>
