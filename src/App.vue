<template>
    <div id="app">
        <!-- <div class="front">
            <div class="increment">
                <IncrementCount />
            </div>
            <div class="show-front"> {{fontCount}} </div>
            <div class="decrement">
                <DecreaseCount />
            </div>
        </div> -->
        <!-- <my-section></my-section> -->
        <!-- <m-a ref="mA"></m-a> -->
        <!-- <show-num-com></show-num-com>
        <addition-num-com></addition-num-com> -->
        <child-a></child-a>
        <child-b></child-b>
    </div>
</template>
<script>
import './assets/css/style.css';
import MyA from './components/A';
import MyB from './components/B';
import MyC from './components/C';
import IncrementCount from "./components/IncrementCount";
import DecreaseCount from "./components/DecreaseCount";
import { EventBus } from "./assets/js/event-bus.js";
import { WOW } from 'wowjs'

import MySection from './components/MySection';
import MA from './components/mA';

import ShowNumCom from './components/ShowNumCom';
import AdditionNumCom from './components/AdditionNumCom';

import ChildA from './components/ChildA';
import ChildB from './components/ChildB';

export default {
    name: 'App',
    data(){
        return {
            show: true,
            degValue:0,
            fontCount:0,
            backCount:0
        }
    },
    methods: {
        showToast(){
            this.$toast.show('注册失败,请重新输入', 1000);
        }
    },
    // 局部注册组件，在其子组件中不可复用
    components: {
        MyA,
        MyB,
        MyC,
        IncrementCount,
        DecreaseCount,
        MySection,
        MA,
        ShowNumCom,
        AdditionNumCom,
        ChildA,
        ChildB
    },
    computed: {
        currentTabComponent: function(){
            return 'tab-'+this.currentTab.toLowerCase();
        }
    },
    mounted(){
        // const mA = this.$refs.mA;
        // console.log(mA.name);
        // mA.sayHello();

        // const observe = (function(){
        //     let __message = {};
        //     return {
        //         // 注册消息接口
        //         on: function(type, fn){
        //             // 如果消息不存在，创建一个该消息类型
        //             if(typeof __message[type] === 'undefined'){
        //                 // 将执行方法推入该消息对应的执行队列中
        //                 __message[type] = [fn];
        //             }else{
        //                 // 如果消息存在，直接将执行方法推入该消息的执行队列中
        //                 __message[type].push(fn);
        //             }
        //         },
        //         // 发布消息接口
        //         subscribe: function(type, args){
        //             // 如果消息没有注册，直接返回
        //             if(!__message[type]) return;
        //             // 定义消息信息
        //             let events = {
        //                 type: type,
        //                 args: args || {}
        //             },
        //             i = 0,
        //             len = __message[type].length;
        //             // 遍历执行函数
        //             for(i=0;i<len;i++){
        //                 // 依次执行注册消息对应的方法
        //                 __message[type][i].call(this, events);
        //             }
        //         },
        //         // 移除消息接口
        //         off: function(type, fn){
        //             if(__message[type] instanceof Array){
        //                 // 从最后一条依次遍历
        //                 let i = __message[type].length - 1;
        //                 for(;i>=0;i--){
        //                     // 如果存在该函数则移除相应的动作
        //                     __message[type][i] === fn && __message[type].splice(i, 1);
        //                 }
        //             }
        //         }
        //     }
        // })();

        // // 订阅消息
        // observe.on('say', function(data){
        //     console.log(data.args.text);
        // })
        // observe.on('success', function(){
        //     console.log('success');
        // })

        // // 发布消息
        // observe.subscribe('say', {text: 'hello world'});
        // observe.subscribe('success');

        // EventBus.$on("incremented", ({num,deg}) => {
        //     this.fontCount += num
        //     this.$nextTick(()=>{
        //         this.backCount += num
        //         this.degValue += deg;
        //     })
        // });
        // EventBus.$on("decreased", ({num,deg}) => {
        //     this.fontCount -= num
        //     this.$nextTick(()=>{
        //         this.backCount -= num
        //         this.degValue -= deg;
        //     })
        // });
    }
}
</script>
<style lang="scss" scoped>
@mixin center() {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.container1{
    @include center();
}
.image-cover1 {
    @include center();
}
%center{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.container2 {
  @extend %center;
}
.image-cover2 {
  @extend %center;
}
section{
    width: 100px;
    height: 100px;
    background: #000;
    border-radius: 50%;
    margin: 30px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.enterClass{
    transition: color red;
}
.leaveClass{
    transform: scale(0);
}
</style>


