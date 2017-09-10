<template>
<div class="account-form">
    <b-form @submit.prevent="callbackSubmit" autocomplete="off">
        <b-form-group label="Email">
            <b-form-input
                type="email"
                v-model.trim="email"
                required
                placeholder="ex) john1125@pixelstairs.com"
            />
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input
                type="password"
                v-model.trim="password"
                required
            />
        </b-form-group>
        <b-form-group label="Name">
            <b-form-input
                type="text"
                v-model.trim="name"
                required
            />
        </b-form-group>

        <!-- <b-form-checkbox v-model="newsletter">
            뉴스레터를 구독하겠습니다.(현재 사용 안함)
        </b-form-checkbox> -->

        <small>
            If you press the button below, it is assumed that you have agreed to our Terms of service and Privacy policy.
        </small>

        <b-button type="submit" variant="primary">
            Join us!
        </b-button>
    </b-form>
</div>
</template>

<style lang="scss" scoped>
    @import './Signup.form';
</style>

<script>
    import SignupForm from './Signup.form';
    export default SignupForm;
</script>
