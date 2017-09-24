<template>
<div class="container row">
    <div class="col-12 col-md-6 col-lg-4 card card--center-form">
        <div data-section="form-desc">
            <h1>Please enter your Email</h1>
            <p>The verification email will be sent to your address</p>
        </div>
        <send-mail-form api="members.pwd.mail" />
    </div>
</div>
</template>

<style lang="scss">
    @import './FindPassword';
</style>

<script>
    import FindPassword from './FindPassword';
    export default FindPassword;
</script>
