<script lang="ts">
import { defineComponent } from 'vue'
import { createEditor } from './rete'
import NodeViewer from './components/NodeViewer.vue'

export default defineComponent({
  components: { NodeViewer },
  async mounted() {
    await createEditor(this.$refs.rete as HTMLElement)
  }
})
</script>

<template>
  <main class="rete" ref="rete"></main>
  <NodeViewer :node="{ id: 'nodeid' }"/>
</template>

<style scoped>
.rete {
  height: 100vh;
  background-color: white;
}
</style>
