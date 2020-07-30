<template>
    <div>计算和：{{count}}</div>
</template>
<script>
// 接收事件
import {EventBus} from '../assets/js/event-bus.js';
export default {
    data(){
        return {
            count: 0
        }
    },
    mounted(){
        EventBus.$on('addition', param => {
            this.count = this.count + param.num;
        })
    }
}
</script>

