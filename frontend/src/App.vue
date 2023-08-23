<script lang="ts">
import { defineComponent } from 'vue'
import { createEditor } from './rete'

export default defineComponent({
  components: {},
  async mounted() {
    await createEditor(this.$refs.rete as HTMLElement)
  }
})
</script>

<template>
  <main class="rete" ref="rete"></main>
</template>

<style scoped>
.rete {
  height: 100vh;
  background-color: white;
}
</style>
