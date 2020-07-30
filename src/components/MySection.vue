<template>
    <div>
        <!-- <com-article :articles="articleList" @onEmitIndex="onEmitIndex"></com-article>
        <p>{{currentInex}}</p> -->
        <!-- <div>{{msg}}</div>
        <com-a></com-a>
        <button @click="changeA">点击改变子组件的值</button> -->
        <my-a></my-a>
    </div>
</template>
<script>
import ComArticle from './ComArctile';
import ComA from './ComA';
import MyA from './MyA';
export default {
    data(){
        return {
            currentInex: -1,
            articleList: ['红楼梦', '三国演义', '西游记'],
            msg: 'Welcome'
        }
    },
    methods: {
        onEmitIndex(index){
            this.currentInex = index;
        },
        changeA(){
            this.$children[0].messageA = 'this is new';
        }
    },
    components: {
        ComArticle,
        ComA,
        MyA
    }
}
</script>

