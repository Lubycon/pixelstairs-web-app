<template>
<div data-form="artwork-tags">
    <div data-type="form-desc">
        <h1>Make the tags about your works!</h1>
        <p>
            Your artwork can be searched by these tags in <strong>Pixelstairs</strong><br>
            and ohter services like <strong>Google</strong>, <strong>Facebook</strong> or <strong>Twitter</strong>.
        </p>
    </div>
    <tag-input :tags="tags"></tag-input>
</div>
</template>

<style lang="scss" scoped>
</style>

<script>
import TagInput from 'src/components/Tag.vue';

export default {
    name: 'ArtworkTagsStep',
    components: {
        TagInput
    },
    props: {
        tags: {
            type: Array,
            required: true
        }
    }
};
</script>
