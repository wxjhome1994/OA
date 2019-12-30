<template>
    <div class="perCenter">
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    width="180">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "PerCenter",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
       beforeRouteEnter(to,from,next){
           console.log(this);//=>也获取不到this
           console.log('beforeRoute Enter');
           next();1
       },
        beforeRouteUpdate(to,from,next){
            console.log('beforeRoute Update');
            next();
        },
        beforeRouteLeave(to,from,next){
            console.log(this);//=>可以获取到this
            console.log('beforeRoute Leave');
            next();
        },


    }
</script>

<style scoped lang="stylus">
.perCenter
    width: 100%
    height: 100%
    padding 25px 50px
    position relative
    left: 200px
    right: 0
    top:0
    bottom: 0
    text-align left

</style>
