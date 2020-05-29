<template>
    <div class="blog-post">
        <h3>{{post.title}}</h3>
        <!-- <button v-on:click="$emit('enlarge-text')">Enlarge text</button> -->
        <button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
        <div v-html="post.content"></div>
    </div>
</template>
<script>
export default {
    // props: ['title', 'content']
    props: ['post']
}
// 通过props向子元素传递数据
// 点击放大按钮，要告诉父元素组件放大所有的文本；Vue实例提供了一个自定义事件系统来解决这个问题，父组件可以像处理native DOM一样通过v-on监听子组件实例的任意事件
// 父组件->子组件：使用props
// 子组件->父组件：父组件自定义一个事件，使用v-on绑定比如v-on:my-event，赋予一个表达式或者方法，在方法里面操作想改变的内容。子组件上在v-on:click里面加上$emit('my-event')即可</script>
