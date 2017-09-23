<template>
<div data-form="artwork-desc">
    <div data-type="form-desc">
        <h1>Describe about your artwork!</h1>
    </div>
    <b-form-textarea
        :name="name"
        :class="{ 'has-error': this.errors.has(name) }"
        :rows="3"
        :max-rows="6"
        v-validate="'required'"
        v-model="desc"
        @input="update"
    ></b-form-textarea>
</div>
</template>

<style lang="scss" scoped>
textarea {
    resize: none;
    background-color: transparent;
}
</style>

<script>
export default {
    name: 'ArtworkDescStep',
    inject: [ '$validator' ],
    props: {
        name: {
            type: String,
            default: 'description'
        }
    },
    data () {
        return {
            desc: null
        };
    },
    methods: {
        update (value) {
            this.$emit('input', value);
        }
    }
};
</script>
