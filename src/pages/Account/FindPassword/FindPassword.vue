<template>
<div class="container">
    <h1>FindPassword</h1>
    <send-mail-form api="members.pwd.mail" />
</div>
</template>

<style lang="scss">
    @import './FindPassword';
</style>

<script>
    import FindPassword from './FindPassword';
    export default FindPassword;
</script>
