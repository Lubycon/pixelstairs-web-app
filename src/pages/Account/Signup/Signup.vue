<template>
<div class="container">
    <router-link :to="{ name: 'home' }">
        <img :src="logo" alt="">
    </router-link>

    <signup-form @submit="postData"></signup-form>
</div>
</template>

<style lang="scss">
@import './Signup';
</style>

<script lang="ts">
import Signup from './Signup';
export default Signup;
</script>
