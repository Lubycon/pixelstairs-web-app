<template>
<b-modal ref="modal" hide-footer="true">
    <signup-form @submit="postData"></signup-form>
</b-modal>
</template>

<style lang="scss">
</style>

<script>
import ModalChildMixin from 'src/mixins/modal-child.mixin';
import SignupForm from 'src/components/forms/Signup.form.vue';

export default {
    name: 'SignupModal',
    mixins: [ ModalChildMixin ],
    components: {
        SignupForm
    },
    methods: {
        postData () {

        }
    }
};
</script>
