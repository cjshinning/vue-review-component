import Vue from 'vue';
import App from './App';

// 全局注册组件：在其子组件中可以复用
// Vue.component('component-a', {
//     template: `<h1>组件A</h1>`
// })
// Vue.component('component-b', {
//     template: `<h1>组件B</h1>`
// })

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
})