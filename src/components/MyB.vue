<template>
    <div>
        {{ demo }}
        <my-c></my-c>
    </div>
</template>
<script>
import MyC from './MyC';
export default {
    name: 'B',
    inject: ['for'],
    data(){
        return {
            demo: this.for
        }
    },
    components: {
        MyC
    }
}
</script>
