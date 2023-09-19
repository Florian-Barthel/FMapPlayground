<template>
  <div class="node fmap-node" :class="{ selected: data.selected }" :style="nodeStyles()" data-testid="node">
    <div class="title" data-testid="title">
        <span>{{ data.label }}</span>
    </div>
</div>
</template>
    
    
<script lang="ts">
  import { defineComponent } from 'vue'
  import { Ref } from 'rete-vue-plugin'
  
  export default defineComponent({
    props: ['data', 'emit', 'seed'],
    data() {
      return {
        isCollapsed: false
      }
    },
    methods: {
      nodeStyles() {
        return {
          width: Number.isFinite(this.data.width) ? `${this.data.width}px` : '',
          height: Number.isFinite(this.data.height) ? `${this.data.height}px` : ''
        }
      }
    },
    components: {
      Ref
    }
  })
</script>
    
<style lang="scss" scoped>
  @use "sass:math";
  @import "./custom-node-vars";
  
  .node {
    background: rgb(255,0, 0);
    //border: 2px solid #4e58bf;
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;
    width: $node-width;
    height: auto;
    padding-bottom: 6px;
    position: relative;
    user-select: none;
    line-height: initial;
    font-family: Arial;
  
    &:hover {
      background: lighten($node-color, 4%);
    }
  
    &.selected {
      background: $node-color-selected;
      border-color: #e3c000;
    }
  
    .title {
      color: white;
      font-family: sans-serif;
      font-size: 18px;
      padding: 8px;
    }
  
    .output {
      text-align: right;
      float:left;
    }

    .input {
      text-align: left;
      float:left;
    }
  
    .output-socket {
      text-align: right;
      margin-right: -(math.div($socket-size, 2) + $socket-margin);
      display: inline-block;
    }
  
    .input-socket {
      text-align: left;
      margin-left: -(math.div($socket-size, 2) + $socket-margin);
      display: inline-block;
    }

    .input-socket-internal {
      margin-left: -8px;
    }
    .output-socket-internal {
      margin-right: -8px;
    }
  
  
    .input-title,
    .output-title {
      vertical-align: middle;
      color: white;
      display: inline-block;
      font-family: sans-serif;
      font-size: 14px;
      margin: $socket-margin;
      line-height: $socket-size;
    }
  
    .input-control {
      z-index: 1;
      width: calc(100% - #{$socket-size + 2*$socket-margin});
      vertical-align: middle;
      display: inline-block;
    }
  
    .control {
      padding: $socket-margin math.div($socket-size, 2) + $socket-margin;
    }
  }

  .node.fmap-node {
    .title {
      display: flex;
      span {
        flex-grow: 1;
      }
    }
  }
</style>
    