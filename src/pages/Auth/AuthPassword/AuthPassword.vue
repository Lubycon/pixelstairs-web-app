<template>
<div class="container row">
    <div class="col-12 col-md-6 col-lg-4 card card--center-form">
        <h1>Please enter your password</h1>
        <b-form @submit.prevent="submit">
            <b-form-group>
                <b-form-input
                    type="password"
                    placeholder="Password"
                    v-model="password"
                />
            </b-form-group>
            <b-button type="submit" variant="primary">
                Next
            </b-button>
        </b-form>
    </div>
</div>
</template>

<style lang="scss">
    @import './AuthPassword';
</style>

<script>
    import AuthPassword from './AuthPassword';
    export default AuthPassword;
</script>
