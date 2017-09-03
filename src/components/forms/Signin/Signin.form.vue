<template>
<div class="account-form">
    <b-form @submit.prevent="callbackSubmit">
        <b-form-group label="Email">
            <b-form-input
                type="email"
                v-model.trim="email"
                required
                placeholder="ex) john123@pixelstairs.com"
            />
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input
                type="password"
                v-model.trim="password"
                required
            />
        </b-form-group>
        <b-button type="submit" variant="primary">
            Log in
        </b-button>
    </b-form>
</div>
</template>

<style lang="scss">
    @import './Signin.form';
</style>

<script lang="ts">
    import SigninForm from './Signin.form';
    export default SigninForm;
</script>
