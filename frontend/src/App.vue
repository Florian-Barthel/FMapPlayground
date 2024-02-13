<script lang="ts">
import {defineComponent} from 'vue'
import {createEditor} from './rete'
import NodeViewer from './components/NodeViewer.vue'
import type {Node} from "@/rete/nodes";
import {getFeatureMapUrl} from './api'

export default defineComponent({
  components: {NodeViewer},
  data() {
    return {
      currentNode: "currentNode",
      featureMapIn: "",
      featureMapOut: "",
      info: {
        description: "",
        doc: "",
        file: ""
      }
    }
  },
  methods: {
    setCurrentNode(node: Node) {
      this.currentNode = node.label
      let featureMapUrl = getFeatureMapUrl(node.node_id)
      let insertPos = featureMapUrl.indexOf("/api/fmap") + 9
      this.featureMapIn = featureMapUrl.slice(0, insertPos) + "_in" + featureMapUrl.slice(insertPos)
      this.featureMapOut = featureMapUrl.slice(0, insertPos) + "_out" + featureMapUrl.slice(insertPos)
      this.info = node.node_info
      console.log(this.info)
    }
  },
  async mounted() {
    await createEditor(this.$refs.rete as HTMLElement, this.setCurrentNode)
  }
})
</script>

<template>
  <main class="rete" ref="rete"></main>
  <NodeViewer :node="{ id: currentNode }" :fmap="{in: featureMapIn, out: featureMapOut}" :info="info"/>
</template>

<style scoped>
.rete {
  height: 100vh;
  background-color: white;
}
</style>
