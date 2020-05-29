<template>
    <div class="blog-post">
        <h3>{{post.title}}</h3>
        <div v-html="post.content"></div>
    </div>
</template>
<script>
export default {
    // props: ['title', 'content']
    props: ['post']
}
// 通过props向子元素传递数据
</script>
