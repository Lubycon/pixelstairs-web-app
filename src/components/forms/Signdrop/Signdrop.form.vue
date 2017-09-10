<template>
<div class="account-form">
    <ul>
        <li v-for="(opt,idx) in options">
            <h3>{{ opt.question.en }}</h3>
            <b-form-select
                :options="opt.answer"
                value-field="id"
                text-field="en"
                v-model="signdropData.answerIds[idx]"
            />
        </li>
    </ul>
    <button class="btn" @click="submit">Sign drop</button>
</div>
</template>

<style lang="scss" scoped>
    @import './Signdrop.form.scss';
</style>

<script>
    import SigndropForm from './Signdrop.form';
    export default SigndropForm;
</script>
