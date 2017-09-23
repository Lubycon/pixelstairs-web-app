<template>
<div data-form="artwork-title">
    <div data-type="form-desc">
        <h1>What is the title of your artwork?</h1>
    </div>
    <b-form-input
        :name="name"
        :class="{ 'has-error': this.errors.has(name) }"
        type="text"
        v-model="title"
        v-validate="'required'"
        @input="update"
    ></b-form-input>
</div>
</template>

<style lang="scss" scoped>
.form-control {
    background-color: transparent;
    padding: 12px 12px;
    font-weight: bold;
    text-align: center;
    font-size: 24px;
}
</style>

<script>
export default {
    name: 'ArtworkTitleStep',
    inject: [ '$validator' ],
    props: {
        name: {
            type: String,
            default: 'title'
        }
    },
    data () {
        return {
            title: null
        };
    },
    methods: {
        update (value) {
            this.$emit('input', value);
        }
    }
};
</script>
