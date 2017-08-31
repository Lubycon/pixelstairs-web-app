import { Vue, Component, Provide, Watch } from 'vue-property-decorator';
import { Artwork } from 'src/interfaces/Artwork.interface';

import APIService from 'src/services/API.service';

@Component({
    name: 'Home'
})
class Home extends Vue {
    @Provide() msg: string = 'Home: Welcome to Your Vue.js App';
    @Provide() pageIndex: number = 1;
    @Provide() artworks: Artwork[];

    created () {

    }

    mounted () {
        this.getContents(this.pageIndex);
    }

    @Watch('pageIndex')
    getContents(val: number): any {
        return APIService.resource('contents.list').get({
            pageIndex: this.pageIndex
        }).then(res => {
            console.log(res);
        });
    }
}
export default Home;
