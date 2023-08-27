<template>
  <div class="node fmap-node" :class="{ selected: data.selected }" :style="nodeStyles()" data-testid="node">
    <div class="title" data-testid="title">
        <span>{{ data.label }}</span>
        <label for="collapse" style="color: white">Collapse</label>
        <!-- TODO: style the checkbox to make it look like a collapse button -->
        <input name="collapse" type="checkbox" v-model="isCollapsed" @pointerdown="(evt) => evt.stopPropagation()">
    </div>
    <div class="output" :key="'output' + 'output' + seed" :data-testid="'output-'+'output'">
        <Ref class="input-socket" :data="{ type: 'socket', side: 'input', key: 'internalOutput', nodeId: data.id, payload: fmapInternalOutput().socket }" :emit="emit" data-testid="input-socket"></Ref>
        <div class="output-title" data-testid="output-title">{{fmapOutput().label}}</div>
        <Ref class="output-socket" :data="{ type: 'socket', side: 'output', key: 'output', nodeId: data.id, payload: fmapOutput().socket }" :emit="emit" data-testid="output-socket"></Ref>
    </div>
    <!-- <div class="output" :key="'output' + 'internalInput' + seed" :data-testid="'output-'+'internalInput'">
        <div class="output-title" data-testid="output-title">{{fmapInternalInput().label}}</div>
        <Ref class="output-socket" :data="{ type: 'socket', side: 'output', key: 'internalInput', nodeId: data.id, payload: fmapInternalInput().socket }" :emit="emit" data-testid="output-socket"></Ref>
    </div> -->

    <div class="input" :key="'input' + 'input' + seed" :data-testid="'input-'+'input'">
        <Ref class="input-socket" :data="{ type: 'socket', side: 'input', key: 'input', nodeId: data.id, payload: fmapInput().socket }" :emit="emit" data-testid="input-socket"></Ref>
        <div class="input-title" v-show="!fmapInput().control || !fmapInput().showControl" data-testid="input-title">{{fmapInput().label}}</div>
        <Ref class="output-socket" :data="{ type: 'socket', side: 'output', key: 'internalInput', nodeId: data.id, payload: fmapInternalInput().socket }" :emit="emit" data-testid="output-socket"></Ref>
    </div>
    <!-- <div class="input" :key="'input' + 'internalOutput' + seed" :data-testid="'input-'+'internalOutput'">
        <Ref class="input-socket" :data="{ type: 'socket', side: 'input', key: 'internalOutput', nodeId: data.id, payload: fmapInternalOutput().socket }" :emit="emit" data-testid="input-socket"></Ref>
        <div class="input-title" v-show="!fmapInternalOutput().control || !fmapInternalOutput().showControl" data-testid="input-title">{{fmapInternalOutput().label}}</div>
    </div> -->
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
      inputs() {
        return sortByIndex(Object.entries(this.data.inputs))
      },
      controls() {
        return sortByIndex(Object.entries(this.data.controls))
      },
      outputs() {
        return sortByIndex(Object.entries(this.data.outputs))
      },
      fmapInput() {
        return this.data.inputs.input
      },
      fmapInternalInput() {
        return this.data.outputs.internalInput
      },
      fmapOutput() {
        return this.data.outputs.output
      },
      fmapInternalOutput() {
        return this.data.inputs.internalOutput
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
    