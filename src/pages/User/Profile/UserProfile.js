/*
    @name: UserProfile.js
    @desc: 유저 프로필 페이지 컴포넌트
    @author: Evan Moon
    @created_at: 2017.09.09
*/
import { mapGetters } from 'vuex';
import APIService from 'src/services/API.service';

export default {
    name: 'UserProfile',
    computed: {
        ...mapGetters({
            user: 'getUser'
        })
    },
    watch: {
        user (user) {
            this.fetchUsersContents(user.id);
        }
    },
    methods: {
        fetchUsersContents (userId) {
            return APIService.resource('contents.list')
            .get({
                filter: `userId:${userId}`
            }).then(res => {
                console.log(res);
            });
        }
    }
};
