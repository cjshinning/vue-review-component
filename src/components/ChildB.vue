<template>
    <div id="childA">
        <h1>我是B组件</h1>
        <button @click="transform">点我让A组件收到数据</button>
        <p>因为你点了A，所有我的信息发生了变化：{{AMessage}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            BMessage: 'Hello A组件，我是B组件'
        }
    },
    computed: {
        AMessage(){
            return this.$store.state.AMsg
        }
    },
    methods: {
        transform(){
            this.$store.commit('receiveBMsg', {
                BMsg: this.BMessage
            })
        }
    }
}
</script>
