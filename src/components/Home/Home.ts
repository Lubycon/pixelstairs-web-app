import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: "Home",
})
class Home extends Vue {
    msg: string = "Welcome to Your Vue.js App";
    created (): void {
        console.log('From Server', this.msg);
    }
    mounted (): void {
        console.log('From client', this.msg);
    }
}
export default Home;
