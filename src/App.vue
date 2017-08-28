<template>
<div id="app">
    <router-view id="app-header" name="header" />
    <div id="app-body">
        <router-view name="content" />
    </div>
    <router-view id="app-footer" name="footer" />
</div>
</template>

<style lang="scss">
    @import './app.scss';
</style>
