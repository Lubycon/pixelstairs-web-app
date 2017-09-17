/*
    @name: Signdrop.js
    @desc: 회원탈퇴 폼 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.11
*/
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
