import Toast from './toast';
const obj = {};

obj.install = function(Vue){
    // 1、创建构造器
    const ToastConstructor = Vue.extend(Toast);
    
    const toast = new ToastConstructor();
    toast.$mount(document.createElement('div'));
    document.body.appendChild(toast.$el);
    
    Vue.prototype.$toast = toast;
}

export default obj;