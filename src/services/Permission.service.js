/*
    @name: Permission.service.js
    @desc: router Permission 서비스
    @author: Evan Moon
    @created_at: 2017.09.30
*/

class PermissionService {
    constructor () {
        this.permissions = {
            'user': {
                authorized: true,
                grade: 'all'
            },
            'user:inactive': {
                authorized: true,
                grade: 'inactive'
            },
            'user:active': {
                authorized: true,
                grade: 'active'
            },
            'not_user': {
                authorized: false
            }
        };
    }


}

const instance = new PermissionService();
export default instance;
