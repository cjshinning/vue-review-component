<template>
    <div>
        {{ name }}
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: 'vue.js'
        }
    },
    methods: {
        sayHello(){
            console.log('hello');
        }
    }
}
</script>
