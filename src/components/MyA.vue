<template>
    <div>
        <my-b></my-b>
    </div>
</template>
<script>
import MyB from './MyB';
export default {
    name: 'A',
    provide: {
        for: 'demo123'
    },
    components: {
        MyB
    }
}
</script>

