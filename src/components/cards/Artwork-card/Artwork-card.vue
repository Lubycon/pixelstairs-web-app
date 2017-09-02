<template>
<div class="card artwork-card" router-link="">
    <div
        class="card-img-top artwork-card--image"
        :style="{ 'background-color': thumbnail }"
    >
        <img :src="image.file" :alt="`artwork-${image.id}`">
    </div>
    <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <p><small>{{ authorName }}</small></p>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import './Artwork-card';
</style>

<script lang="ts">
import ArtworkCard from './Artwork-card';
export default ArtworkCard;
</script>
