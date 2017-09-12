<template>
<div>
    <b-form @submit.prevent="submit">
        <b-form-group label="E-mail">
            <b-form-input
                type="email"
                v-model="email"
            />
        </b-form-group>
        <b-button type="submit">Submit</b-button>
    </b-form>
</div>
</template>

<style lang="scss" scoped>
    @import './SendMail.form';
</style>

<script>
    import SendMailForm from './SendMail.form';
    export default SendMailForm;
</script>
