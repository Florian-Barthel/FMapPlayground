<template>
    <img :src="`http://localhost:5000/api/fmap?node_id=${data.nodeId}`">
    <!-- <img src="http://placedog.net/256/256"> -->
</template>

<style scoped>
img {
  width: 100%;
}
</style>

<script lang="ts">
export default {
  props: ['data'],
  created() {
    console.log(this.data)
  },
}
</script>
