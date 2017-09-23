<template>
<div class="vue-tag-component" :class="{ 'readonly': readonly }">
    <ul class="form-control vue-tag-component--tags" :class="{ 'has-error': this.errors.any() }">
        <li class="vue-tag-component--tag" v-for="(tag, idx) in tags">
            <div class="vue-tag-component--tag-wrapper">
                <span>{{tag}}</span>
                <button v-if="!readonly" @click="removeTag(idx)">x</button>
            </div>
        </li>
        <input
            type="text"
            v-if="!readonly"
            v-validate="'required'"
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

.readonly {
    .form-control {
        padding: 0;
        border: none;
        background: transparent;
    }

    ul {
        li {
            padding: 6px 12px;
            * {
                cursor: default;
            }
        }
    }
}

ul {
    margin: 0;
    width: 100%;
    text-align: left;
    li {
        display: inline-block;
        padding: 6px 7px 6px 12px;
        background-color: $bluegrey-900;
        border-radius: 100px;
        margin: {
            top: 3px;
            bottom: 3px;
            right: 8px;
        }
        transition: background-color 0.2s ease-in;
        vertical-align: middle;

        &:hover {
            background-color: lighten($grey-800, 20);
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
            this.$validator.validateAll();
            if (this.errors.any()) {
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
