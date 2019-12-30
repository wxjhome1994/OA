<template>
    <div class="admin">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
        >
            <el-menu-item index="1">会议管理</el-menu-item>
            <el-menu-item index="2">邮件</el-menu-item>
            <el-menu-item index="3">通知公告</el-menu-item>
            <el-menu-item index="4">日程</el-menu-item>
        </el-menu>
    </div>
</template>


<script>
    export default {
        name: "Administrative"
    }
</script>

<style scoped lang="stylus">
    .admin
        position absolute
        top:60px
    .el-menu
        width:200px
        text-align:left
</style>
