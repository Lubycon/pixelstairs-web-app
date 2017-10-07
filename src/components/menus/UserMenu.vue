<!-- @TODO 이미지 태그는 뷰 렌더시 한번만 렌더되기 때문에 v-if를 사용함 -->
<!-- 개선 방법이 있다면 수정할 것. 해당 태그만 rerender하는 방법을 찾아야함 -->

<template>
<b-dropdown class="user-menu--basic dropdown" right>
    <div slot="button-content">
        <img data-name="user-profile-image" v-if="!hasProfileSrc" :src="myProfileSrc">
        <img data-name="user-profile-image" v-else :src="myProfileSrc">
    </div>

    <no-ssr>
        <b-dropdown-item>
            <div data-name="user">
                <div data-name="user-profile">
                    <img data-name="user-profile-image" v-if="!hasProfileSrc" :src="myProfileSrc">
                    <img data-name="user-profile-image" v-else :src="myProfileSrc">
                </div>
                <div data-name="user-info">
                    <div data-name="user-name">
                        <h3>{{ me.nickname }}</h3>
                        <b-badge v-if="me.status === 'inactive'" pill class="inactive">{{ me.status }}</b-badge>
                    </div>
                    <h4 data-name="user-email">{{ me.email }}</h4>
                    <div data-name="user-control">
                        <b-button
                            size="sm"
                            :to="{ name: 'user-profile', params: { userId: me.id } }"
                        >
                            Profile
                        </b-button>
                    </div>
                </div>
            </div>
            <div data-name="control" class="row justify-content-between">
                <b-button
                    size="sm"
                    :to="{ name: 'user-setting', params: { userId: me.id } }"
                >
                    Setting
                </b-button>
                <b-button
                    size="sm"
                    class="btn-border signout-btn"
                    @click="signout"
                >
                    Sign out
                </b-button>
            </div>
        </b-dropdown-item>
    </no-ssr>
</b-dropdown>
</template>

<style lang="scss">
@import 'src/styles/utils/__module__';

.user-menu--basic.dropdown {
    .dropdown-toggle {
        $profile-image-size: 40px;

        border: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
        &:focus {
            box-shadow: none;
        }
        &:hover {
            img {
                box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
            }
        }
        &::after {
            display: none;
        }

        img[data-name="user-profile-image"] {
            @include circleFrame($profile-image-size);
        }
    }

    .dropdown-menu {
        $menu-padding: 20px;
        $profile-image-size: 70px;

        width: 350px;
        left: auto;
        right: 0;
        padding: $menu-padding $menu-padding;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        @include mq('sm') {
            width: 300px;
        }
        a.dropdown-item {
            box-shadow: none;
            background-color: $white;
            padding: 0;
            cursor: default;
        }
        .row {
            margin: 0;
        }
        div[data-name="user-profile"] {
            display: inline-block;
            vertical-align: middle;
            margin-right: $menu-padding;
            img[data-name="user-profile-image"] {
                @include circleFrame($profile-image-size);
                @include mq('sm') {
                    @include circleFrame($profile-image-size - 20px);
                }
            }
        }
        div[data-name="user-info"] {
            display: inline-block;
            vertical-align: middle;
            div[data-name="user-name"] {
                margin-bottom: $menu-padding / 3;
                h3 {
                    display: inline-block;
                    font-size: 18px;
                    font-weight: bold;
                    vertical-align: middle;
                    margin-bottom: 0;
                    @include mq('sm') {
                        font-size: 16px;
                    }
                }
                span {
                    margin-left: 10px;
                    vertical-align: middle;
                }
            }
            h4[data-name="user-email"] {
                font-size: 14px;
                color: $grey-500;
                margin-bottom: $menu-padding;
            }
        }

        div[data-name="control"] {
            margin-top: $menu-padding;
            padding-top: $menu-padding;
            border-top: 1px solid $grey-300;
            text-align: right;
            .signout-btn {
                font-size: 14px;
            }
        }
    }
}
</style>

<script>
import NoSSR from 'vue-no-ssr';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'UserMenu',
    components: {
        'no-ssr': NoSSR
    },
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
