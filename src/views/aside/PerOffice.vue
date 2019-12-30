<template>
    <div class="per-office">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                >
            <router-link to="/perOffice/perCenter"><el-menu-item index="1">个人中心</el-menu-item></router-link>
            <router-link to="/perOffice/email"><el-menu-item index="2">邮件</el-menu-item></router-link>
            <router-link to="/perOffice/inform"><el-menu-item index="3">通知公告</el-menu-item></router-link>
            <router-link to="/perOffice/schedule"><el-menu-item index="4">日程</el-menu-item></router-link>
        </el-menu>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "PerOffice"
    }
</script>

<style scoped lang="stylus">
.per-office
    position absolute
    top:60px
    .el-menu
        position absolute
        top:0
        bottom 0
        width:200px
        text-align:left
</style>
