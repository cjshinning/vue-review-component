<template id="a">
    <div>
        <h3>B组件：{{age}}</h3>
        <button @click="send">将数据发送给C组件</button>
    </div>
</template>
<script>
// import Event from '../assets/js/event-bus.js';
export default {
    name: 'B',
    data(){
        return {
            age: 20
        }
    },
    methods: {
        send(){
            Event.$emit('data-b', this.age);
        }
    }
}
</script>
