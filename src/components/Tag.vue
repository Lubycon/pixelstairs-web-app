<template>
<div class="vue-tag-component" :class="{ 'readonly': readonly }">
    <ul class="form-control vue-tag-component--tags" :class="{ 'has-error': this.errors.has(name) }">
        <li class="vue-tag-component--tag" v-for="(tag, idx) in tags">
            <div class="vue-tag-component--tag-wrapper">
                <span>{{tag}}</span>
                <button v-if="!readonly" @click="removeTag(idx)">x</button>
            </div>
        </li>
        <input
            :name="name"
            type="text"
            v-if="!readonly"
            v-validate="'alpha_dash|max:255|duplicated_tag'"
            v-model.trim="currentTag"
            @keydown.enter="addTag"
            @keydown.space="addTag"
            @keydown.delete="onDeleteKey"
        >
    </ul>
    <small v-if="errors.has(name)" class="form-text is-invalid">{{ errors.first(name) }}</small>
</div>
</template>

<style lang="scss" scoped>
@import 'src/styles/utils/__module__';

.readonly {
    ul.form-control {
        padding: 0;
        border: none;
        background: transparent;
        li {
            padding: 6px 12px;
            * {
                cursor: default;
            }
        }
    }
}

ul.form-control {
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
        name: {
            type: String,
            default: 'tag'
        },
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
            this.$validator.validate(this.name, this.currentTag);
            if (this.errors.has(this.name) || !this.currentTag) {
                return false;
            }

            this.tags.push(this.currentTag);
            this.currentTag = null;
            this.$emit('update', this.tags);
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
        },
        isDuplicatedTag (tag = this.currentTag) {
            const IS_DUPLICATED = this.tags.some(v => v === tag);
            return IS_DUPLICATED;
        }
    },
    created () {
        // SET CUSTOM VALIDATOR
        this.$validator.extend('duplicated_tag', {
            getMessage: field => 'This tag is already added!',
            validate: value => {
                return !this.isDuplicatedTag(value);
            }
        });
    }
};
</script>
