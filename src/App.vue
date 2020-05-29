<template>
    <div id="app">
        <button-counter></button-counter>
        <button-counter></button-counter>
        <button-counter></button-counter>
    </div>
</template>
<script>
import ButtonCounter from './components/button-counter';
export default {
    name: 'App',
    components: {
        ButtonCounter
    }
}
</script>
