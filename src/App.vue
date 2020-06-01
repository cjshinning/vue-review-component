<template>
    <div id="app">
        <button
            v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab-button', {active: currentTab === tab}]"
            v-on:click="currentTab=tab"
        >
            {{tab}}
        </button>
        <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
    </div>
</template>
<script>
import './assets/css/style.css';
import TabPosts from './components/TabPosts';
import TabArchive from './components/TabArchive';
export default {
    name: 'App',
    data(){
        return {
            currentTab: 'Posts',
            tabs: ['Posts', 'Archive']
        }
    },
    methods: {
    },
    // 局部注册组件，在其子组件中不可复用
    components: {
        TabPosts,
        TabArchive
    },
    computed: {
        currentTabComponent: function(){
            return 'tab-'+this.currentTab.toLowerCase();
        }
    }
}
</script>

