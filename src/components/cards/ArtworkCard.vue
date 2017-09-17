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
@import 'src/styles/utils/__module__';

.artwork-card--image {
    position: relative;
    height: 300px;
    overflow: hidden;
    img {
        width: 100%;
        @include floatToCenter;
    }
}

.card-body {
    .card-title {
        font-size: 20px;
        @include ellipsis;
    }
}
</style>

<script>
export default {
    name: 'Artwork-card',
    props: {
        artId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        authorName: {
            type: String,
            required: true
        },
        authorProfile: {

        },
        image: {

        }
    },
    data () {
        return {
            thumbnail: null
        };
    },

    created () {
        let thumbnail;

        if (this.image.isPixelOwn) {
            thumbnail = this.image.file + '30';
            this.$set(this.image, 'file', this.image.file + '640');
        }
        else {
            thumbnail = this.image.file;
        }

        this.$set(this, 'thumbnail', thumbnail);
    }
};
</script>
