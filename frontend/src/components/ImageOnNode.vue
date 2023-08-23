<template>
    <img :src="`http://localhost:5000/api/fmap?node_id=${data.nodeId}`">
</template>

<script lang="ts">
export default {
  props: ['data'],
  created() {
    console.log(this.data)
  },
}
</script>
