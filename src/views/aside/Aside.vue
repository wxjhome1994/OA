<template>
<div>
    <el-aside width="200px">Aside</el-aside>
</div>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>
    .el-aside {
        position: absolute;
        top:60px;
        bottom: 0px;
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
