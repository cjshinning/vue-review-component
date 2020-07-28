<template>
    <div id="app">
        <!-- <button
            v-for="tab in tabs"
            c
            v-bind:class="['tab-button', {active: currentTab === tab}]"
            v-on:click="currentTab=tab"
        >
            {{tab}}
        </button>
        <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive> -->
        <!-- <button v-on:click="show=!show">Toggle</button> -->
        <!-- <transition name="fade">
            <p v-if="show">hello</p>
        </transition> -->
        <!-- 自定义 -->
        <!-- <transition 
            name="custom-classes-transition"
            enter-active-class="enterClass"
            leave-active-class="leaveClass"
        >
            <p v-if="show">hello</p>
        </transition> -->
        <!-- <anchored-heading :level='1'>Hello world</anchored-heading>
        <anchored-heading :level='2'>Hello world</anchored-heading> -->
        <!-- <vnode></vnode> -->
        <!-- <a href="javascript:;" @click="showToast()">显示toast</a> -->
        <!-- <div class="container1"></div>
        <div class="image-cover1"></div>
        <div class="container2"></div>
        <div class="image-cover2"></div>
        <section class="wow slideInUp">1</section>
        <section class="wow lightSpeedIn">2</section>
        <section class="wow rollIn">3</section>
        <section class="wow pulse">4</section>
        <section class="wow bounceInRight">5</section>
        <section class="wow bounceInLeft">6</section>
        <section class="wow flipInX">7</section>
        <section class="wow swing">8</section> -->

        <!-- <div id="itany">
            <my-a></my-a>
            <my-b></my-b>
            <my-c></my-c>
        </div> -->

        <div class="front">
            <div class="increment">
                <IncrementCount />
            </div>
            <div class="show-front"> {{fontCount}} </div>
            <div class="decrement">
                <DecreaseCount />
            </div>
        </div>

        <!-- <div class="back">
            <div class="increment">
                <IncrementCount />
            </div>
            <div class="show-back"> {{backCount}} </div>
            <div class="decrement">
                <DecreaseCount />
            </div>
        </div>  -->
    </div>
</template>
<script>
import './assets/css/style.css';
// import TabPosts from './components/TabPosts';
// import TabArchive from './components/TabArchive';
// import AnchoredHeading from './components/AnchoredHeading';
// import Vnode from './components/Vnode';
import MyA from './components/A';
import MyB from './components/B';
import MyC from './components/C';
import IncrementCount from "./components/IncrementCount";
import DecreaseCount from "./components/DecreaseCount";
import { EventBus } from "./assets/js/event-bus.js";
import { WOW } from 'wowjs'
export default {
    name: 'App',
    data(){
        return {
            // currentTab: 'Posts',
            // tabs: ['Posts', 'Archive']
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
        // TabPosts,
        // TabArchive
        // AnchoredHeading
        // Vnode
        MyA,
        MyB,
        MyC,
        IncrementCount,
        DecreaseCount
    },
    computed: {
        currentTabComponent: function(){
            return 'tab-'+this.currentTab.toLowerCase();
        }
    },
    mounted(){
        const observe = (function(){
            let __message = {};
            return {
                // 注册消息接口
                on: function(type, fn){
                    // 如果消息不存在，创建一个该消息类型
                    if(typeof __message[type] === 'undefined'){
                        // 将执行方法推入该消息对应的执行队列中
                        __message[type] = [fn];
                    }else{
                        // 如果消息存在，直接将执行方法推入该消息的执行队列中
                        __message[type].push(fn);
                    }
                },
                // 发布消息接口
                subscribe: function(type, args){
                    // 如果消息没有注册，直接返回
                    if(!__message[type]) return;
                    // 定义消息信息
                    let events = {
                        type: type,
                        args: args || {}
                    },
                    i = 0,
                    len = __message[type].length;
                    // 遍历执行函数
                    for(i=0;i<len;i++){
                        // 依次执行注册消息对应的方法
                        __message[type][i].call(this, events);
                    }
                },
                // 移除消息接口
                off: function(type, fn){
                    if(__message[type] instanceof Array){
                        // 从最后一条依次遍历
                        let i = __message[type].length - 1;
                        for(;i>=0;i--){
                            // 如果存在该函数则移除相应的动作
                            __message[type][i] === fn && __message[type].splice(i, 1);
                        }
                    }
                }
            }
        })();

        // 订阅消息
        observe.on('say', function(data){
            console.log(data.args.text);
        })
        observe.on('success', function(){
            console.log('success');
        })

        // 发布消息
        observe.subscribe('say', {text: 'hello world'});
        observe.subscribe('success');





        EventBus.$on("incremented", ({num,deg}) => {
            this.fontCount += num
            this.$nextTick(()=>{
                this.backCount += num
                this.degValue += deg;
            })
        });
        EventBus.$on("decreased", ({num,deg}) => {
            this.fontCount -= num
            this.$nextTick(()=>{
                this.backCount -= num
                this.degValue -= deg;
            })
        });
        // var Event = new Vue();
        // //第一种写法，可以设置wow中属性
        // this.$nextTick(() => { // 在dom渲染完后,再执行动画
        //     var wow = new WOW({
        //     boxClass: 'wow',///动画元件css类（默认为wow）
        //     animateClass: 'animated',//动画css类（默认为animated） 
        //     offset: 0,//到元素距离触发动画（当默认为0） 
        //     mobile: true, //在移动设备上触发动画（默认为true） 
        //     live: true//对异步加载的内容进行操作（默认为true）
        //     })
        //     wow.init()
        // })
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


