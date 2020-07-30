<template>
    <div id="childA">
        <h1>我是A组件</h1>
        <button @click="transform">点我让B组件收到数据</button>
        <p>因为你点了B，所有我的信息发生了变化：{{BMessage}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            AMessage: 'Hello B组件，我是A组件'
        }
    },
    computed: {
        BMessage(){
            return this.$store.state.BMsg
        }
    },
    methods: {
        transform(){
            this.$store.commit('receiveAMsg', {
                AMsg: this.AMessage
            })
        }
    }
}
</script>
