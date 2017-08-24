<template>
<div>
    {{msg}}
</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'Header'
    })
    class Header extends Vue {
        msg: string = 'This is Global Header';
    }

    export default Header;
</script>
