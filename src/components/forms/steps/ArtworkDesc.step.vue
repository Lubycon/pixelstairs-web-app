<template>
<div data-form="artwork-desc">
    <div data-type="form-desc">
        <h1>Describe about your artwork!</h1>
    </div>
    <b-form-textarea
        :class="{ 'error': hasError }"
        :rows="3"
        :max-rows="6"
        @input="update"
    ></b-form-textarea>
</div>
</template>

<style lang="scss" scoped>
textarea {
    resize: none;
}
</style>

<script>
export default {
    name: 'ArtworkDescStep',
    props: {
        hasError: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        update (value) {
            this.$emit('input', value);
        }
    }
};
</script>
