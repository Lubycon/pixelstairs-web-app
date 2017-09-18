<template>
<nav class="row navbar fixed-top">
    <div class="col"></div>
    <div class="col header--global-logo">
        <router-link to="/">
            <img :src="logoSrc" alt="pixelstairs-text-logo">
        </router-link>
    </div>
    <div class="col header--user-menu">
        <div v-if="isAuthorized">
            <user-menu></user-menu>
        </div>
        <div v-else>
            <router-link :to="{ name: 'signin' }">
                <button class="btn btn-round">
                    Login
                </button>
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
    border-bottom: 1px solid $grey-1;
    background: {
        color: $white;
    }
    .header--global-logo {
        text-align: center;
        img {
            width: 160px;
        }
    }
    .header--user-menu {
        text-align: right;

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
