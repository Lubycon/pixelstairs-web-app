<template>
<div class="container row">
    <div class="col-12 col-md-6 col-lg-4 card card--center-form">
        <div data-section="form-desc">
            <h1>Why!!!!!</h1>
            <p>Your opinion</p>
        </div>
        <signdrop-form @submit="postData"></signdrop-form>
    </div>

</div>
</template>

<style lang="scss">
    @import './Signdrop';
</style>

<script>
    import Signdrop from './Signdrop';
    export default Signdrop;
</script>
