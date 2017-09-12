<template>
<div class="container">
    <h1>User Password Change</h1>
    <b-form @submit.prevent="submit">
        <b-form-group label="New Password">
            <b-form-input
                type="password"
                placeholder="New Password"
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
    @import './UserPassword';
</style>

<script>
    import UserPassword from './UserPassword';
    export default UserPassword;
</script>
