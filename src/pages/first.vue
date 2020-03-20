<template>
    <div>
        <p>{{msg}}</p>
        <test v-for="post in posts" :key="post.id" :post="post"></test>
        <test @anniu='cc' v-for="t in tts" :key="t.id" :post="t"></test>
    </div>
</template>

<script>
import test from '@/components/test.vue'
export default {
    components: {
        test
    },
    data() {
        return {
            msg: 'first',
            posts: [
                {'id':'01abd','title':'标题1','content':'文章内容1'},
                {'id':'02785','title':'标题2','content':'文章内容2'}
            ],
            tts: [
                {'id':'01nnn','title':'第二个组件标题1','content':'第二个组件文章内容1'},
                {'id':'02iuy','title':'第二个组件标题2','content':'第二个组件文章内容2'}
            ],
        }
    },
    created() {

    },
    methods: {
        cc() {
                console.log('hh')
            }
    }
}
</script>