import VueRouter from 'vue-router'


import First from './pages/first.vue'
import Second from './pages/second.vue'

var router = new VueRouter({
    routes: [
        {
            path: '/first',
            name: 'First',
            component: First
        },
        {
            path: '/second',
            name: 'Second',
            component: Second
        }
    ]
});

export default router;