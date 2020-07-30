import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    // 初始化组件的数据
    AMsg: '',
    BMsg: ''
}

const mutations = {
    receiveAMsg(state, payload){
        state.AMsg = payload.AMsg;
    },
    receiveBMsg(state, payload){
        state.BMsg = payload.BMsg;
    }
}

export default new Vuex.Store({
    state,
    mutations
})