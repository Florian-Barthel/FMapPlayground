<script lang="ts">
import {defineComponent} from 'vue'
import {createEditor} from './rete'
import NodeViewer from './components/NodeViewer.vue'

export default defineComponent({
  components: {NodeViewer},
  data() {
    return {
      currentNode: "currentNode",
      featureMap: "featureMap"
    }
  },
  methods: {
    setCurrentNode(label: string, featureMap: any) {
      this.currentNode = label
      this.featureMap = featureMap
    }
  },
  async mounted() {
    await createEditor(this.$refs.rete as HTMLElement, this.setCurrentNode)
  }
})
</script>

<template>
  <main class="rete" ref="rete"></main>
  <NodeViewer :node="{ id: currentNode }" :fmap="{src: featureMap}"/>
</template>

<style scoped>
.rete {
  height: 100vh;
  background-color: white;
}
</style>
