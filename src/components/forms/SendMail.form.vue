<template>
<div>
    <b-form @submit.prevent="submit">
        <b-form-group>
            <b-form-input
                type="email"
                v-model="email"
                placeholder="ex) john0102@pixelstairs.com"
            />
        </b-form-group>
        <b-button type="submit">Submit</b-button>
    </b-form>
</div>
</template>

<style lang="scss" scoped>

</style>

<script>
import APIService from 'src/services/API.service';

export default {
    name: 'SendMailForm',
    props: {
        api: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            email: null
        };
    },
    methods: {
        submit () {
            return APIService.resource(this.api).post({
                email: this.email
            }).then(res => {
                this.$emit('submit', res);
            });
        }
    }
};
</script>
