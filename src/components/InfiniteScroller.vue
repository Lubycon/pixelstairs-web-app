<template>
<div>
    <slot></slot>
</div>
</template>

<style lang="scss" scoped>
</style>

<script>
import $ from 'jquery';

export default {
    name: 'InfiniteScroller',
    props: {
        delay: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        },
        trigger: {
            type: Function,
            default: null
        }
    },
    methods: {
        scrollTrigger () {
            console.log(this.$el);
        }
    },
    mounted () {
        $(document).scroll(() => {
            this.scrollTrigger();
        });
    }
};
</script>
