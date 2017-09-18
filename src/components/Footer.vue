<template>
<nav class="row navbar">
    <ul>
        <li v-for="menu in navMenus">{{ menu.name }}</li>
    </ul>
</nav>
</template>

<style lang="scss" scoped>
@import 'src/styles/utils/__module__';

$footer-margin: 20px;
$menu-margin: $footer-margin / 2;

#app-footer {
    margin: {
        top: $footer-margin;
        right: $footer-margin;
        left: $footer-margin;
    }
}

ul {
    li {
        display: inline-block;
        margin-right: $menu-margin;
        padding-right: $menu-margin;
        text-align: center;
        font-size: 14px;
        border-right: 1px solid $grey-1;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>

<script>
export default {
    name: 'GlobalFooter',
    data () {
        return {
            navMenus: [{
                name: 'About us'
            }, {
                name: 'Contact us'
            }, {
                name: 'Privacy policy'
            }, {
                name: 'Terms of service'
            }]
        };
    }
};
</script>
