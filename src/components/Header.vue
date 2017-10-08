<template>
<nav class="row navbar fixed-top">
    <div class="col-4"></div>
    <div class="col-4 header--global-logo">
        <router-link to="/">
            <img :src="logoSrc" alt="pixelstairs-text-logo">
        </router-link>
    </div>
    <div class="col-4 header--user-menu">
        <div>
            <router-link 
                class="content-upload-btn btn btn-round"
                :to="{ name: 'artwork-upload' }"
            >
                File Upload
            </router-link>
        </div>
        <div v-if="isAuthorized">
            <user-menu></user-menu>
        </div>
        <div v-else>
            <router-link 
                class="btn btn-round"
                :to="{ name: 'signin' }"
            >
                Login
            </router-link>
        </div>
    </div>
</nav>
</template>

<style lang="scss" scoped>
@import 'src/styles/utils/__module__';

#app-header {
    margin: 0;
    height: $global-header-height;
    border-bottom: 1px solid $grey-400;
    background: {
        color: $white;
    }
    .col-4 {
        @include mq('sm') {
            padding: 0;
        }
    }
    .header--global-logo {
        text-align: center;
        img {
            width: 160px;
            @include mq('sm') {
                width: 100%;
            }
        }
    }
    .header--user-menu {
        text-align: right;
        > div{
            display:inline-block;
            &:nth-child(1){
                margin-right: 30px;   
            }
        }
        i {
            color: $white;
        }
    }
}
</style>

<script>
import { mapGetters } from 'vuex';
import { LOGOS } from 'src/constants';

import UserMenu from 'src/components/menus/UserMenu.vue';

export default {
    name: 'GlobalHeader',
    components: {
        UserMenu
    },
    data () {
        return {
            logoSrc: LOGOS.text
        };
    },
    computed: {
        ...mapGetters({
            isAuthorized: 'isAuthorized'
        })
    }
};
</script>
