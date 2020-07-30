<template>
    <ul>
        <li v-for="(item,index) in articles" :key="index" @click="emitIndex(index)">{{item}}</li>
    </ul>
</template>
<script>
export default {
    props: ['articles'],
    methods: {
        emitIndex(index){
            this.$emit('onEmitIndex', index)
        }
    }
}
</script>

