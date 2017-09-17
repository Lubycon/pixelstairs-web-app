<template>
<div class="account-form">
    <ul>
        <li v-for="(opt,idx) in options">
            <h3>{{ opt.question.en }}</h3>
            <b-form-select
                :options="opt.answer"
                value-field="id"
                text-field="en"
                v-model="signdropData.answerIds[idx]"
            />
        </li>
    </ul>
    <button class="btn" @click="submit">Sign drop</button>
</div>
</template>

<style lang="scss" scoped>

</style>

<script>
import APIService from 'src/services/API.service';

export default {
    name: 'Signdrop-form',
    data () {
        return {
            options: [],
            signdropData: {
                answerIds: []
            }
        };
    },
    methods: {
        fetchOptions () {
            return APIService.resource('users.signdropSurvey')
            .get().then(res => {
                this.$set(this, 'options', res.result);
            });
        },
        submit () {
            this.$emit('submit', this.signdropData);
        }
    },
    created () {
        this.fetchOptions();
    }
};
</script>
