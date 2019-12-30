import Vue from 'vue';
import Login from "./Login.vue"

import "../src/assets/reset.css"

/*导入ui库中所有的组件和对应的样式*/
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI);

Vue.config.productionTip=false;
new Vue({
    render:h=>h(Login)
}).$mount("#login");
