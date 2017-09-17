/*
    @name: UserSetting.ts
    @desc: 유저 데이터 세팅 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.09
*/

import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';

import APIService from 'src/services/API.service';

export default {
    name: 'UserSetting',
    data () {
        return {
            newProfile: null,
            newProfileSrc: null,
            newUsername: null
        };
    },
    computed: {
        ...mapGetters({
            user: 'getUser',
            userProfileSrc: 'getUserProfileSrc',
            hasProfileSrc: 'hasProfileSrc'
        })
    },
    methods: {
        ...mapActions({
            setUser: 'setUser'
        }),
        uploadTrigger () {
            let $fileEl = $(this.$refs.fileinput.$el).find('input[type="file"]');
            $fileEl.trigger('click');
        },
        onChangedFile () {
            let reader = new FileReader();
            reader.onload = e => {
                this.newProfileSrc = e.target.result;
            };
            reader.readAsDataURL(this.newProfile);
        },
        postData () {
            // let data = { ...this.user };
            let data = this.user;
            data.nickname = this.newUsername;
            data.profileImg = {
                id: null,
                index: null,
                file: null,
                deleted: null,
                isPixelOwn: null
            };

            if (this.newProfileSrc) {
                data.profileImg.file = this.newProfileSrc;
            }

            APIService.resource('users.info', { id: data.id }).put(data)
            .then(res => {
                delete res.result.newsletterAccepted;
                delete res.result.gender;
                delete res.result.birthday;

                let user = res.result;
                this.setUser(user);
            });
        }
    },
    watch: {
        user (user) {
            this.$set(this, 'newUsername', user.nickname);
        }
    }
};
