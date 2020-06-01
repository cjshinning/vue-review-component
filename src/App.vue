<template>
    <div id="app">
        <!-- <button
            v-for="tab in tabs"
            v-bind:key="tab"
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
        <anchored-heading :level='1'>Hello world</anchored-heading>
        <anchored-heading :level='2'>Hello world</anchored-heading>
    </div>
</template>
<script>
import './assets/css/style.css';
import TabPosts from './components/TabPosts';
import TabArchive from './components/TabArchive';
import AnchoredHeading from './components/AnchoredHeading'
export default {
    name: 'App',
    data(){
        return {
            // currentTab: 'Posts',
            // tabs: ['Posts', 'Archive']
            show: true
        }
    },
    methods: {
    },
    // 局部注册组件，在其子组件中不可复用
    components: {
        // TabPosts,
        // TabArchive
        AnchoredHeading
    },
    computed: {
        currentTabComponent: function(){
            return 'tab-'+this.currentTab.toLowerCase();
        }
    }
}
</script>
<style>
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


