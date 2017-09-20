<template>
<div class="account-form">
    <b-form @submit.prevent="submit" autocomplete="off" novalidate>
        <b-form-group label="Email">
            <b-form-input
                type="email"
                name="email"
                v-model.trim="email"
                placeholder="ex) evan1125@pixelstairs.com"
                v-validate="'required|email'"
                :class="{ 'error': errors.has('email') }"
            />
            <b-form-text v-if="errors.has('email')" class="is-invalid">{{ errors.first('email') }}</b-form-text>
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input
                type="password"
                name="password"
                v-model.trim="password"
                v-validate="'required|security'"
                :class="{ 'error': errors.has('password') }"
            />
            <b-form-text v-if="errors.has('password')" class="is-invalid">{{ errors.first('password') }}</b-form-text>
            <b-form-text class="has-score" :class="passwordLevel">
                Security Level: {{ passwordLevel }}
            </b-form-text>
        </b-form-group>
        <b-form-group label="Name">
            <b-form-input
                type="text"
                name="name"
                v-model.trim="name"
                v-validate="{ rules: { regex: regex.name, required: true } }"
                :class="{ 'error': errors.has('name') }"
            />
            <b-form-text v-if="errors.has('name')" class="is-invalid">{{ errors.first('name') }}</b-form-text>
        </b-form-group>
        <small>If you press the button below, it is assumed that you have agreed to our Terms of service and Privacy policy.</small>
        <b-button type="submit">Join us!</b-button>
    </b-form>
</div>
</template>

<style lang="scss" scoped>
@import 'src/styles/utils/__module__';

.btn[type="submit"] {
    margin: 20px 0;
    width: 100%;
    background-color: $bluegrey-800;
}
</style>

<script>
import { PasswordMixin } from 'src/mixins/password.mixin';
import ValidateService from 'src/services/Validate.service';

export default {
    name: 'Signup-form',
    mixins: [ PasswordMixin ],
    data () {
        return {
            email: null,
            password: null,
            name: null,
            newsletter: true,
            regex: {
                name: ValidateService.getRegex('name')
            }
        };
    },
    methods: {
        submit () {
            this.$validator.validateAll();
            if (this.errors.any()) {
                console.log(this.errors);
            }
            else {
                this.$emit('submit', {
                    email: this.email,
                    password: this.password,
                    nickname: this.name,
                    newsletterAccepted: this.newsletter,
                    termsOfServiceAccepted: true
                });
            }
        }
    }
};
</script>
