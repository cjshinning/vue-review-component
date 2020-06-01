<template>
    <div>
        <span>
            <slot v-bind:user="user">{{user.lastName}}</slot>
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: {
                firstName: 'Chen',
                lastName: 'Jenny'
            }
        }
    }
}
</script>
