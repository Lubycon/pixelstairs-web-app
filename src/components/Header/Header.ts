import { Vue, Component, Provide, Watch } from 'vue-property-decorator';

import { LOGOS } from '../../constants';

@Component({
    name: 'Header'
})
class Header extends Vue {
    public logoSrc: string = LOGOS.text;
}

export default Header;
