<template>
    <div id="app">
        <!-- <button-counter></button-counter>
        <button-counter></button-counter>
        <button-counter></button-counter> -->

        <!-- <blog-post title="My Journet with Vue"></blog-post>
        <blog-post title="Blogging with Vue"></blog-post>
        <blog-post title="Why Vue is so fun"></blog-post> -->

        <!-- <blog-post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:title="post.title"
            v-bind:content="post.content"
        ></blog-post> -->

        <blog-post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
        ></blog-post>
    </div>
</template>
<script>
// import ButtonCounter from './components/button-counter';
import BlogPost from './components/blog-post';
export default {
    name: 'App',
    data(){
        return {
            posts: [
                {
                    id: 1,
                    title: 'My Journet with Vue1',
                    content: 'blog content 1'
                },
                {
                    id: 2,
                    title: 'My Journet with Vue2',
                    content: 'blog content 2'
                },
                {
                    id: 3,
                    title: 'My Journet with Vue3',
                    content: 'blog content 3'
                }
            ]
        }
    },
    components: {
        // ButtonCounter
        BlogPost
    }
}
</script>
