<!-- @TODO 이미지 태그는 뷰 렌더시 한번만 렌더되기 때문에 v-if를 사용함 -->
<!-- 개선 방법이 있다면 수정할 것. 해당 태그만 rerender하는 방법을 찾아야함 -->

<template>
<b-dropdown class="user-menu--basic dropdown" right>
    <div slot="button-content">
        <img v-if="!hasProfileSrc" :src="userProfileSrc">
        <img v-else :src="userProfileSrc">
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
