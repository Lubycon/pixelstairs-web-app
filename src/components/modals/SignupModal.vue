<template>
<b-modal class="signin-modal" ref="modal" :hide-footer="true">
    <div data-name="form-title">
        <h2>Is this your first time here?</h2>
        <p>Simply proceed to sign up and continue uploading your work!</p>
    </div>
    <signup-form @submit="postData"></signup-form>
    <div data-name="form-signin">
        <b-button class="btn-border" :to="{ name: 'signin' }">
            I am not new here!
        </b-button>
    </div>
</b-modal>
</template>

<style lang="scss" scoped>
.signin-modal {
    .modal-header {
        border: none;
    }
}
div[data-name="form-title"] {
    * {
        text-align: center;
    }
    h2 {
        font-size: 20px;
        font-weight: bold;
    }
    p {
        font-size: 14px;
    }
}
div[data-name="form-signin"] {
    text-align: right;
}
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
