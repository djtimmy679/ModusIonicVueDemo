import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'
const home = () => import('@/components/Home.vue')
const hello = () => import('@/components/HelloWorld.vue')
const history = createWebHistory();
const router = createRouter({
   history,
   routes: [
       {path:"/", component: home},
       {path:"/hello", component: hello, props: {msg: "You are on the hello page"}}
   ]
})
export default router;
