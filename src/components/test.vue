<template>
    <div>
        <h3>{{post.title}}</h3>
        <div v-html="post.content"></div>
        <button @click="handleButton">按钮</button>
    </div>
</template>

<script>
export default {
    name: 'test',
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            
        }
    },
    watch: {

    },
    created() {

    },
    methods: {
        handleButton() {
            this.$emit('anniu')
        }
    },
}
</script>