<template>
<div class="container">
    <signdrop-form @submit="postData"></signdrop-form>
</div>
</template>

<style lang="scss">
    @import './Signdrop';
</style>

<script>
    import Signdrop from './Signdrop';
    export default Signdrop;
</script>
