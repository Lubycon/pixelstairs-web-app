<template>
<div>
    <div v-if="isLoading">Loading....</div>
    <div v-else>
        id: {{ artId }}
        title: {{ artworkData.title }}
    </div>
</div>
</template>

<style lang="scss" scoped>
@import './ArtworkDetail';
</style>

<script lang="ts">
import ArtworkDetail from './ArtworkDetail';
export default ArtworkDetail;
</script>
