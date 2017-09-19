<template>
<div class="account-form">
    <b-form @submit.prevent="callbackSubmit">
        <b-form-group>
            <b-form-input
                type="email"
                v-model.trim="email"
                placeholder="Email"
                required
            />
        </b-form-group>
        <b-form-group>
            <b-form-input
                type="password"
                v-model.trim="password"
                placeholder="Password"
                required
            />
        </b-form-group>
        <b-button type="submit">
            Sign in
        </b-button>
    </b-form>
    <b-button class="btn-border signup-btn" :to="{ name: 'signup' }">
        Create an account
    </b-button>
</div>
</template>

<style lang="scss">
@import 'src/styles/utils/__module__';

.btn[type="submit"] {
    margin: 20px 0;
    width: 100%;
    background-color: $bluegrey-800;
}
.signup-btn {
    float: right;
    color: $bluegrey-800;
}
</style>

<script>
export default {
    name: 'Signin-form',
    data () {
        return {
            email: null,
            password: null
        };
    },
    computed: {

    },
    methods: {
        callbackSubmit () {
            this.$emit('submit', {
                email: this.email,
                password: this.password
            });
        }
    }
};
</script>
