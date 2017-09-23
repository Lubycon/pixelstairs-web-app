<template>
<div data-form="artwork-desc">
    <div data-type="form-desc">
        <h1>Describe about your artwork!</h1>
    </div>
    <b-form-textarea
        name="description"
        :class="{ 'has-error': this.errors.any() }"
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
}
</style>

<script>
export default {
    name: 'ArtworkDescStep',
    inject: [ '$validator' ],
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
