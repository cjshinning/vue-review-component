import Vue from 'vue';
import App from './App';
import toast from './components/toast/index';
import store from './vuex/store';

Vue.use(toast);
import 'animate.css';

new Vue({
    el: '#app',
    components: {App},
    store,
    template: '<App/>'
})