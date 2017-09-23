<!-- @TODO 이미지 태그는 뷰 렌더시 한번만 렌더되기 때문에 v-if를 사용함 -->
<!-- 개선 방법이 있다면 수정할 것. 해당 태그만 rerender하는 방법을 찾아야함 -->

<template>
<b-dropdown class="user-menu--basic dropdown" right>
    <div slot="button-content">
        <img v-if="!hasProfileSrc" :src="myProfileSrc">
        <img v-else :src="myProfileSrc">
        <h3>{{ me.nickname }}</h3>
    </div>

    <b-dropdown-item :to="{ name: 'user-setting', params: { userId: me.id } }">
        Settings
    </b-dropdown-item>
    <b-dropdown-item :to="{ name: 'auth-password' }">
        Change password
    </b-dropdown-item>
    <b-dropdown-item @click="signout">Sign out</b-dropdown-item>
</b-dropdown>
</template>

<style lang="scss">
@import 'src/styles/utils/__module__';

.user-menu--basic.dropdown {
    &.show {
        .btn-secondary.dropdown-toggle {
            background-color: transparent;
        }
    }
    .dropdown-toggle {
        border: none;
        background-color: transparent;
        &:focus {
            box-shadow: none;
        }
        &::after {
            display: none;
        }
        img {
            @include circleFrame(30px);
            margin-right: 10px;
        }
        h3 {
            display: inline-block;
            font-size: 14px;
        }
    }

    .dropdown-menu.show {
        left: auto;
        right: 0;
    }
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'UserMenu',
    computed: {
        ...mapGetters({
            me: 'getAuthUser',
            myProfileSrc: 'getAuthUserProfileSrc',
            hasProfileSrc: 'hasProfileSrc'
        })
    },
    methods: {
        ...mapActions({
            destroyToken: 'destroyToken'
        }),
        signout () {
            this.destroyToken();
        }
    }
};
</script>
