<template id="a">
    <div>
        <h3>A组件：{{name}}</h3>
        <button @click="send">将数据发送给C组件</button>
    </div>
</template>
<script>
// import Event from '../assets/js/event-bus.js';
export default {
    name: 'A',
    data(){
        return {
            name: 'Tom'
        }
    },
    methods: {
        send(){
            Event.$emit('data-a', this.name);
        }
    }
}
</script>
