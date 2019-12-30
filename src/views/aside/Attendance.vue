<template>
    <div class="attend">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
        >
            <el-menu-item index="1">人事档案</el-menu-item>
            <el-menu-item index="2">人事管理</el-menu-item>
            <el-menu-item index="3">考核管理</el-menu-item>
            <el-menu-item index="4">薪资管理</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Attendance"
    }
</script>

<style scoped lang="stylus">
.attend
    position absolute
    top:60px
    .el-menu
        width:200px
        text-align:left
</style>
