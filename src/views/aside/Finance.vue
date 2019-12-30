<template>
    <div class="finance">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
        >
            <el-menu-item index="1">财务设置</el-menu-item>
            <el-menu-item index="2">记账管理</el-menu-item>
            <el-menu-item index="3">报销借还款</el-menu-item>
            <el-menu-item index="4">发票付款</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Finance"
    }
</script>

<style scoped lang="stylus">
.finance
    position absolute
    top:60px
    .el-menu
        width:200px
        text-align:left
</style>
