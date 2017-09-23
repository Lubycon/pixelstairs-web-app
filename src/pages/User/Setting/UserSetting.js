/*
    @name: UserSetting.js
    @desc: 유저 데이터 세팅 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.09
*/

import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';
import ImageCropModal from 'src/components/modals/ImageCropModal.vue';
import APIService from 'src/services/API.service';

export default {
    name: 'UserSetting',
    components: {
        ImageCropModal
    },
    data () {
        return {
            newProfile: null,
            newProfileRaw: null,
            croppedNewProfileRaw: null,
            newUsername: null
        };
    },
    computed: {
        ...mapGetters({
            me: 'getAuthUser',
            myProfileSrc: 'getAuthUserProfileSrc',
            hasProfileSrc: 'hasProfileSrc'
        })
    },
    methods: {
        showModal () {
            this.$refs.cropModal.show();
        },
        hideModal () {
            this.$refs.cropModal.hide();
        },
        uploadTrigger () {
            let $fileEl = $(this.$refs.fileinput.$el).find('input[type="file"]');
            $fileEl.trigger('click');
        },
        onChangedFile () {
            let reader = new FileReader();
            reader.onload = e => {
                this.$set(this, 'newProfileRaw', e.target.result);
                this.showModal();
            };
            reader.readAsDataURL(this.newProfile);
        },
        setThumbnail (data) {
            this.$set(this, 'croppedNewProfileRaw', data);
        },
        postData () {
            let data = { ...this.me };
            data.nickname = this.newUsername;
            data.profileImg = {
                id: null,
                index: null,
                file: null,
                deleted: null,
                isPixelOwn: null
            };

            if (this.newProfile) {
                data.profileImg.file = this.croppedNewProfileRaw;
            }

            APIService.resource('users.info', { id: data.id }).put(data)
            .then(res => {
                delete res.result.newsletterAccepted;
                delete res.result.gender;
                delete res.result.birthday;

                let me = res.result;
                this.setUser(me);
            });
        },
        ...mapActions({
            setUser: 'setUser'
        })
    },
    watch: {
        me (me) {
            this.$set(this, 'newUsername', me.nickname);
        }
    }
};
