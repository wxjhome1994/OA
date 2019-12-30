<template>
    <div class="flow">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
        >
            <router-link to="/flow/apply/123"><el-menu-item index="1">流程申请</el-menu-item></router-link>
            <router-link to="/flow/myApply"><el-menu-item index="2">我的申请</el-menu-item></router-link>
            <router-link to="/flow/dispose"><el-menu-item index="3">经我处理</el-menu-item></router-link>
            <router-link to="/flow/draft"><el-menu-item index="4">草稿待提交</el-menu-item></router-link>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Flow"
    }
</script>

<style scoped lang="stylus">
.flow
    position absolute
    top:60px
    .el-menu
        width:200px
        text-align:left
</style>
