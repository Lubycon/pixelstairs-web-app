<template>
<button
    class="btn like-btn"
    :class="{ 'active': likeValue }"
    @click="submit"
>
    <slot><i class="pxs-heart"></i></slot>
</button>
</template>

<style lang="scss" scoped>
@import 'src/styles/utils/__module__';
.btn {
    background-color: $bluegrey-300;
    &.active {
        background-color: $red;
    }
    i {
        color: $white;
        vertical-align: middle;
    }
}
</style>

<script>
export default {
    name: 'like-button',
    props: {
        artId: {
            type: String,
            required: true
        },
        likeValue: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        submit () {
            this.$emit('submit', !this.likeValue);
        }
    }
};
</script>
