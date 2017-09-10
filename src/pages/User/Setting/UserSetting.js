/*
    @name: UserSetting.ts
    @desc: 유저 데이터 세팅 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.09
*/

import $ from 'jquery';
// import { mapState, mapGetters } from 'vuex';

import APIService from 'src/services/API.service';

export default {
    name: 'UserSetting',
    computed: {
        // ...mapGetters({
        //     user: 'getUser',
        //     userProfileSrc: 'getUserProfileSrc',
        //     hasProfileSrc: 'hasProfileSrc'
        // })
    },
    methods: {
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

            APIService.resource('members.detail', { id: data.id }).put(data)
            .then(res => {
                delete res.result.newsletterAccepted;
                delete res.result.gender;
                delete res.result.birthday;

                let user = res.result;
                this.setUser(user);
            });
        }
    },

    created () {
        this.$set(this, 'newUsername', this.user.nickname);
    }
};

// @Component({
//     name: 'UserSetting'
// })
// class UserSetting extends Vue {
//     public $refs: {
//         fileinput: any;
//     }
//     @State('auth') AuthState
//     @Getter('getUser') user
//     @Getter('getUserProfileSrc') userProfileSrc
//     @Getter('hasProfileSrc') hasProfileSrc
//     @Action('setUser') setUser
//
//     @Provide() newProfile: File = null;
//     @Provide() newProfileSrc: string = null;
//     @Provide() newUsername: string = null;
//
//     public uploadTrigger (): void {
//         let $fileEl = $(this.$refs.fileinput.$el).find('input[type="file"]');
//         $fileEl.trigger('click');
//     }
//
//     public onChangedFile ():void {
//         let reader = new FileReader();
//         reader.onload = (e: any) => {
//             this.newProfileSrc = e.target.result;
//         }
//         reader.readAsDataURL(this.newProfile);
//     }
//
//     public postData ():void {
//         let data: UserSimple = { ...this.user };
//         data.nickname = this.newUsername;
//         data.profileImg = {
//             id: null,
//             index: null,
//             file: null,
//             deleted: null,
//             isPixelOwn: null
//         };
//
//         if(this.newProfileSrc) {
//             data.profileImg.file = this.newProfileSrc;
//         }
//
//         APIService.resource('members.detail', { id: data.id }).put(data)
//         .then(res => {
//             delete res.result.newsletterAccepted;
//             delete res.result.gender;
//             delete res.result.birthday;
//
//             let user: UserSimple = res.result;
//             this.setUser(user);
//         });
//     }
//
//     created () {
//         this.$set(this, 'newUsername', this.user.nickname);
//     }
// }
//
// export default UserSetting;
