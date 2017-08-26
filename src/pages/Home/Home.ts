import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'Home',
})
class Home extends Vue {
    msg: string = 'Home: Welcome to Your Vue.js App';
    created (): void {
        console.log('From Server');
    }
    mounted (): void {
        console.log('From client');
    }
}
export default Home;
