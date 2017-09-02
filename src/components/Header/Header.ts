/*
    @name: Header.ts
    @desc: 글로벌 헤더 컴포넌트
    @author: Evan Moon
    @created_at: 2017.08.26
*/

import { Vue, Component, Provide, Watch } from 'vue-property-decorator';

import { LOGOS } from '../../constants';

@Component({
    name: 'GlobalHeader'
})
class Header extends Vue {
    public logoSrc: string = LOGOS.text;
}

export default Header;
