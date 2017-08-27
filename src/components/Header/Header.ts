import Vue from 'vue';
import Component from 'vue-class-component';

import { LOGOS } from '../../constants';

@Component({
    name: 'Header'
})
class Header extends Vue {
    public logoSrc: string = LOGOS.text;
}

export default Header;
