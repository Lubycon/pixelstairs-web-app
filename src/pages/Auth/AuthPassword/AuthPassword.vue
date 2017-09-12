<template>
<div class="container">
    <h1>Password check page</h1>
    <b-form @submit.prevent="submit">
        <b-form-group label="Password">
            <b-form-input
                type="password"
                placeholder="password"
                v-model="password"
            />
        </b-form-group>
        <b-button type="submit" variant="primary">
            Submit
        </b-button>
    </b-form>
</div>
</template>

<style lang="scss">
    @import './AuthPassword';
</style>

<script>
    import AuthPassword from './AuthPassword';
    export default AuthPassword;
</script>
