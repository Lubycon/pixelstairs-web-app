<template>
<div class="card artwork-card">
    <router-link :to="{ name: 'artwork-detail', params: { artId } }">
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
    </router-link>
</div>
</template>

<style lang="scss" scoped>
    @import './ArtworkCard';
</style>

<script>
    import ArtworkCard from './ArtworkCard';
    export default ArtworkCard;
</script>
