<template>
<div data-form="artwork-tags">
    <div data-type="form-desc">
        <h1>Make the tags about your works!</h1>
        <p>
            Your artwork can be searched by these tags in <strong>Pixelstairs</strong><br>
            and ohter services like <strong>Google</strong>, <strong>Facebook</strong> or <strong>Twitter</strong>.
        </p>
    </div>
    <tag-input :tags="tags" :name="name"></tag-input>
    <small v-show="errors.has(name)" class="form-text is-invalid">{{ errors.first(name) }}</small>
</div>
</template>

<style lang="scss" scoped>
</style>

<script>
import TagInput from 'src/components/Tag.vue';

export default {
    name: 'ArtworkTagsStep',
    inject: [ '$validator' ],
    components: {
        TagInput
    },
    props: {
        tags: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            default: 'tag'
        }
    },
    watch: {
        tags (tags) {
            this.$validator.validate(this.name, this.tags);
        }
    },
    created () {
        this.$validator.extend('tagLength', {
            getMessage: field => `You have to enter the tag at least 1`,
            validate: value => {
                return !!this.tags.length;
            }
        });

        this.$validator.attach(this.name, 'tagLength');
    }
};
</script>
