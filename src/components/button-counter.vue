<template>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
</template>
<script>
export default {
    name: 'button-counter',
    data(){
        return {
            count: 0
        }
    }
}
// 一个组件的data选项必须是一个函数，因此每个示例可以维护一份被返回对象的独立的拷贝
</script>

