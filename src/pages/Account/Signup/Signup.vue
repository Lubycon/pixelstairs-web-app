<template>
<div class="container">
    <router-link :to="{ name: 'home' }">
        <img :src="logo" alt="">
    </router-link>

    <b-form @submit.prevent="postData">
        <b-form-group
            label="Email"
            description="We'll never share your email with anyone else."
        >
            <b-form-input
                type="email"
                v-model.trim="form.email"
                :required="true"
                :state="emailState"
                placeholder="ex) evan@lubycon.com"
            />
            <b-form-feedback>이메일은 필수 입력 사항입니다</b-form-feedback>
        </b-form-group>
        <b-form-group
            label="Password"
            description="We'll never share your email with anyone else."
        >
            <b-form-input
                type="password"
                v-model.trim="form.password"
                required
            />
        </b-form-group>
        <b-button type="submit" variant="primary">
            회원가입
        </b-button>
    </b-form>
</div>
</template>

<style lang="scss">
@import './Signup';
</style>

<script lang="ts">
import Signup from './Signup';
export default Signup;
</script>
