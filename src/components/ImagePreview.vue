<template>
<div class="image-previewer" v-if="image" @click="onClick">
    <img :src="image" :alt="alt" :title="title">
    <div class="image-previewer--overlay" v-if="overlay">
        <div class="image-previewer--desc">
            <p>Click here and replace image</p>
            <i class="pxs-upload"></i>
        </div>
    </div>
</div>
</template>

<style lang="scss">
@import 'src/styles/utils/__module__';

.image-previewer {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    &:hover {
        .image-previewer--overlay {
            opacity: 1;
        }
    }
    .image-previewer--overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 0;
        z-index: 1;
        transition: opacity 0.3s ease-in;
    }
    .image-previewer--desc {
        @include floatToCenter;
        * {
            color: $white;
        }
        i {
            font-size: 20px;
        }
        p {
            font-size: 20px;
        }
    }
}
</style>

<script>
export default {
    name: 'ImagePreview',
    props: {
        image: {
            type: String,
            default: null
        },
        alt: {
            type: String,
            default: 'image-alt'
        },
        title: {
            type: String,
            default: 'image-title'
        },
        overlay: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onClick () {
            this.$emit('click');
        }
    }
};
</script>
