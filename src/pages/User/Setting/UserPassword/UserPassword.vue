<template>
<div class="container row">
    <div class="col-12 col-md-6 col-lg-4 card card--center-form">
        <div data-section="form-desc">
            <h1>We're ready for getting your new password!</h1>
        </div>
        <b-form @submit.prevent="submit">
            <b-form-group>
                <b-form-input
                    type="password"
                    placeholder="New Password"
                    v-model="password"
                />
            </b-form-group>
            <b-button type="submit">
                Change
            </b-button>
            <b-button type="button" class="btn-border" :to="{ name: 'home' }">
                Cancel
            </b-button>
        </b-form>
    </div>
</div>
</template>

<style lang="scss">
    @import './UserPassword';
</style>

<script>
    import UserPassword from './UserPassword';
    export default UserPassword;
</script>
