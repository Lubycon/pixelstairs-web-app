<template>
<b-dropdown class="user-menu--basic dropdown" right>
    <div slot="button-content">
        <img :src="getUserProfile()">
        <h3>{{ user.nickname }}</h3>
    </div>

    <b-dropdown-item :to="{ name: 'user-setting', params: { userId: user.id } }">
        Settings
    </b-dropdown-item>
    <b-dropdown-item>Change password</b-dropdown-item>
    <b-dropdown-item @click="signout">Sign out</b-dropdown-item>
</b-dropdown>
</template>

<style lang="scss">
    @import './UserMenu';
</style>

<script lang="ts">
    import UserMenu from './UserMenu';
    export default UserMenu;
</script>
