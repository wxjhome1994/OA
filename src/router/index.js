import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/perOffice/perCenter'
},
    {
        path: '/perOffice',
        name: 'perOffice',
        /*
        * component:可以是一个组件
        * components:{}可以是对象（多命名视图）
        * component:函数，只有路由匹配成功才引入和加载当前模块，也可以在函数中做点事情，例如权限校验
        */
        component: () => import("../views/aside/PerOffice"),
        children: [
            //可以简写  但不能加斜杠，否则认为是根目录下访问
            {path: "/perOffice/perCenter", component: () => import("../views/content/perOffice/PerCenter")},
            {path: "/perOffice/email", component: () => import("../views/content/perOffice/Email")},
            {path: "/perOffice/inform", component: () => import("../views/content/perOffice/Inform")},
            {path: "/perOffice/schedule", component: () => import("../views/content/perOffice/Schedule")}],
    },
    {
        path: '/flow',
        name: 'flow',
        component: () => import('../views/aside/Flow'),
        children: [
            {path: "apply/:id", component: () => import("../views/content/flow/Apply")},
            {path: "myApply", component: () => import("../views/content/flow/MyApply")},
            {path: "dispose", component: () => import("../views/content/flow/Dispose")},
            {path: "draft", component: () => import("../views/content/flow/Draft")}],
    },
    {
        path: '/attendance',
        name: 'attendance',
        component: () => import('../views/aside/Attendance')
    },
    {
        path: '/administrative',
        name: 'administrative',
        component: () => import('../views/aside/Administrative')
    },
    {
        path: '/finance',
        name: 'finance',
        component: () => import('../views/aside/Finance')
    },
    /* {
       /!*
       * 每一次地址改变，都会到路由表中自上而下逐一匹配
       * 匹配到一级成功，再匹配二级。。。，在某及中没有则跳出来继续向下匹配
       * 直到找到一个完全匹配的，则渲染对应的组件（不再向下匹配了）
       * *!/
       path:'*',
       redirect:"/"
       //component:Error
     }*/
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    //=>将要跳转到的路由对象（query/params）
    //=>from:从哪个路由来，存储的也是这个路由对象
    console.log('beforeEach');
    //=>进入下一个钩子函数（下一项任务）：不写next当前操作到此结束
    next();
});
router.afterEach(() => {
    console.log('afterEach');
})
export default router
