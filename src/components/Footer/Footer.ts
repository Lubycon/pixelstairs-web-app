/*
    @name: Footer.ts
    @desc: 글로벌 푸터 컴포넌트
    @author: Evan Moon
    @created_at: 2017.08.26
*/

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'GlobalFooter'
})
class Footer extends Vue {
    msg: string = 'This is Global Footer';
}

export default Footer;
