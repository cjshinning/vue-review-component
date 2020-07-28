<template id="a">
    <div>
        <h3>C组件：{{name}}，{{age}}</h3>
    </div>
</template>
<script>
// import Event from '../assets/js/event-bus.js';
export default {
    name: 'C',
    data(){
        return {
            name: '',
            age: ''
        }
    },
    mounted(){
        Event.$on('data-a', name => {
            this.name = name;
        })
        Event.$on('data-b', age => {
            this.age = age;
        })
    }
}
</script>
