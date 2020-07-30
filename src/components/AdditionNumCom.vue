<template>
    <div>
        <button @click="additionHandler">加法器</button>
    </div>
</template>
<script>
// 发送事件
import {EventBus} from '../assets/js/event-bus.js';
export default {
    data(){
        return {
            num: 1
        }
    },
    methods: {
        additionHandler(){
            EventBus.$emit('addition', {
                num: this.num++
            })
        }
    }
}
</script>