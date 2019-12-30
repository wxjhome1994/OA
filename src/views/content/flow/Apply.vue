<template>
    <div class="apply">
        <div>流程申请=={{this.queryApply}}</div>
        <div>流程申请</div>
        <div>流程申请</div>
        <div>流程申请</div>
        <div>流程申请</div>
    </div>
</template>

<script>
    export default {
        name: "Apply",
        data(){
            return{

            }
        },

        computed:{
            queryApply() {
//获取路由切换时传递的参数信息
                return console.log(this.$route)
            }
        }
    }
</script>

<style scoped lang="stylus">
.apply
    width: 100%
    padding 25px 50px
    position absolute
    left: 200px
    right: 0
    top:0
    bottom: 0
</style>
