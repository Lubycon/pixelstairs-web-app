<template>
<div class="vue-tag-component">
    <ul class="form-control vue-tag-component--tags">
        <li class="vue-tag-component--tag" v-for="(tag, idx) in tags">
            <div class="vue-tag-component--tag-wrapper">
                <span>{{tag}}</span>
                <button v-if="!readonly" @click="removeTag(idx)">x</button>
            </div>
        </li>
        <input
            type="text"
            v-if="!readonly"
            v-model.trim="currentTag"
            @keydown.enter="addTag"
            @keydown.space="addTag"
            @keydown.delete="onDeleteKey"
        >
    </ul>
</div>
</template>

<style lang="scss" scoped>
@import 'src/styles/utils/__module__';

ul {
    width: 100%;
    text-align: left;
    li {
        display: inline-block;
        padding: 6px 7px 6px 12px;
        background-color: $grey-4;
        border-radius: 100px;
        margin: {
            top: 3px;
            bottom: 3px;
            right: 8px;
        }
        transition: background-color 0.2s ease-in;
        vertical-align: middle;

        &:hover {
            background-color: lighten($grey-4, 20);
        }
        * {
            cursor: pointer;
        }
        .vue-tag-component--tag-wrapper {
            display: table;
        }
        span {
            display: table-cell;
            color: $white;
            vertical-align: middle;
        }
        button {
            display: table-cell;
            border: none;
            background-color: transparent;
            color: $white;
            vertical-align: middle;
        }
    }
    input {
        border: none;
        background: transparent;
    }
}
</style>

<script>
export default {
    name: 'tag-input',
    props: {
        tags: {
            type: Array,
            required: true
        },
        readonly: {
            type: Boolean
        }
    },
    data () {
        return {
            currentTag: null
        };
    },
    methods: {
        addTag () {
            if (!this.currentTag) {
                return;
            }
            this.tags.push(this.currentTag);
            this.currentTag = null;
            this.$emit('update');
        },
        removeTag (idx) {
            if (idx < 0) {
                return;
            }
            this.tags.splice(idx, 1);
            this.$emit('delete');
        },
        onDeleteKey () {
            if (!this.currentTag) {
                const IDX = this.tags.length - 1;
                this.removeTag(IDX);
            }
        }
    }
};
</script>
