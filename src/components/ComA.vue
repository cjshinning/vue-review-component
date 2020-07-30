<template>
    <div class="com-a">
        <span>{{messageA}}</span>
        <p>获取父组件的值：{{parentValue}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            messageA: 'this is old'
        }
    },
    computed: {
        parentValue(){
            return this.$parent.msg;
        }
    }
}
</script>

