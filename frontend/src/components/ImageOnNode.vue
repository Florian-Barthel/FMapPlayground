<template>
    <img :src="imgSrc">
</template>

<style scoped>
img {
  width: 100%;
}
</style>

<script lang="ts">
import {getFeatureMapUrl} from '../api'
export default {
  props: ['data'],
  computed: {
    imgSrc() {return getFeatureMapUrl(this.data.nodeId)}
  }
}
</script>
