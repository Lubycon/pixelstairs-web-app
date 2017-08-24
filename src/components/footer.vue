<template>
<div>
    {{msg}}
</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'Footer'
    })
    class Footer extends Vue {
        msg: string = 'This is Global Footer';
    }

    export default Footer;
</script>
