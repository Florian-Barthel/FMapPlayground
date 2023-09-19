<template>
  <div class="node fmap-node" :class="{ selected: data.selected }" :style="nodeStyles()" data-testid="node">
    <div class="title" data-testid="title">
      <span>{{ data.label }}</span>
      <!-- TODO: style the checkbox to make it look like a collapse button -->
      <label>
        <input
            name="collapse"
            type="checkbox"
            v-model="isCollapsed"
            @change="(evt: any) => data.collapse(evt.currentTarget.checked)"
            @pointerdown="(evt) => evt.stopPropagation()"
        >
      </label>
    </div>
    <div v-if="isCollapsed">
      <div class="output" v-for="[key, output] in outputs()" :key="key">
        <div class="output-title" data-testid="output-title">{{ output.label }}</div>
        <Ref
            class="output-socket"
            :data="{ type: 'socket', side: 'output', key: key, nodeId: data.id, payload: output.socket }"
            :emit="emit"
            data-testid="output-socket"
        ></Ref>
      </div>
    </div>

    <div v-if="isCollapsed">
      <div class="input" v-for="[key, input] in inputs()" :key="key">
        <Ref
            class="input-socket"
            :data="{ type: 'socket', side: 'input', key: key, nodeId: data.id, payload: input.socket }"
            :emit="emit"
            data-testid="input-socket"
        ></Ref>
        <div
            class="input-title"
            v-show="!input.control || !input.showControl"
            data-testid="input-title"
        >{{ input.label }}
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import {Ref} from 'rete-vue-plugin'

function sortByIndex<T>(entries: [T, any][]) {
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
    inputs() {
      return sortByIndex(Object.entries(this.data.inputs))
    },
    outputs() {
      return sortByIndex(Object.entries(this.data.outputs))
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
  transition: background 0.2s;
  background: $node-color;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  width: $node-width;
  height: auto;
  padding-bottom: 6px;
  position: relative;
  user-select: none;
  line-height: initial;
  font-family: Arial;

  &:hover {
    background: lighten($node-color, 10%);
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
    