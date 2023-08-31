<template>
  <div class="node fmap-node" :class="{ selected: data.selected }" :style="nodeStyles()" data-testid="node">
    <div class="title" data-testid="title">
        <span>{{ data.label }}</span>
        <label for="collapse" style="color: white">Collapse</label>
        <!-- TODO: style the checkbox to make it look like a collapse button -->
        <input name="collapse" type="checkbox" v-model="isCollapsed" @pointerdown="(evt) => evt.stopPropagation()">
    </div>
    <div class="output" v-for="pair in outputPairs()" :key="pair.key">
      <Ref class="input-socket" :data="{ type: 'socket', side: 'input', key: `internal-${pair.key}`, nodeId: data.id, payload: pair.internal.socket }" :emit="emit" data-testid="input-socket"></Ref>
      <div class="output-title" data-testid="output-title">{{pair.outside.label}}</div>
      <Ref class="output-socket" :data="{ type: 'socket', side: 'output', key: pair.key, nodeId: data.id, payload: pair.outside.socket }" :emit="emit" data-testid="output-socket"></Ref>
    </div>

    <div class="input" v-for="pair in inputPairs()" :key="pair.key">
        <Ref class="input-socket" :data="{ type: 'socket', side: 'input', key: pair.key, nodeId: data.id, payload: pair.outside.socket }" :emit="emit" data-testid="input-socket"></Ref>
        <div class="input-title" v-show="!pair.outside.control || !pair.outside.showControl" data-testid="input-title">{{pair.outside.label}}</div>
        <Ref class="output-socket" :data="{ type: 'socket', side: 'output', key: `internal-${pair.key}`, nodeId: data.id, payload: pair.internal.socket }" :emit="emit" data-testid="output-socket"></Ref>
    </div>
</div>
</template>
    
    
<script lang="js">
  import { defineComponent } from 'vue'
  import { Ref } from 'rete-vue-plugin'
  
  function sortByIndex(entries) {
    entries.sort((a, b) => {
      const ai = a[1] && a[1].index || 0
      const bi = b[1] && b[1].index || 0
  
      return ai - bi
    })
    return entries
  }
  
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
      },
      controls() {
        return sortByIndex(Object.entries(this.data.controls))
      },
      inputPairs() {
        const preLen = "internal-".length
        const realInputs = Object.entries(this.data.inputs).filter(([key, skt]) => !key.startsWith("internal-"));
        const fakeOutputs = Object.entries(this.data.outputs).filter(([key, skt]) => key.startsWith("internal-"));
        return realInputs.map(([key, skt]) => ({
          key: key,
          outside: skt,
          internal: fakeOutputs.find(([iKey, iSkt]) => iKey.substr(preLen) === key)[1]
        }))
      },
      outputPairs() {
        const preLen = "internal-".length
        const realOutputs = Object.entries(this.data.outputs).filter(([key, skt]) => !key.startsWith("internal-"));
        const fakeInputs = Object.entries(this.data.inputs).filter(([key, skt]) => key.startsWith("internal-"));
        return realOutputs.map(([key, skt]) => ({
          key: key,
          outside: skt,
          internal: fakeInputs.find(([iKey, iSkt]) => iKey.substr(preLen) === key)[1]
        }))
      },
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
    background: $node-color;
    border: 2px solid #4e58bf;
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
    }
  
    .input {
      text-align: left;
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
    