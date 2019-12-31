<template>
    <div>
        <el-header>
            <h1 class="title">融汇测绘OA系统</h1>
            <div class="nav">
                <ul>
                    <router-link to="/perOffice"> <li>个人办公</li></router-link>
                    <router-link to="/flow"><li>流程</li></router-link>
                    <router-link to="/attendance"><li>人事考勤</li></router-link>
                    <router-link to="/administrative"><li>行政</li></router-link>
                    <router-link to="/finance"><li>财务</li></router-link>
                </ul>
            </div>

            <div class="login"><a href="./login.html"><i class="iconfont icon-icon-"></i> 登录</a></div>
        </el-header>
            <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .el-header
        position: absolute;
        left: 0;
        right: 0;
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
        .title
            width: 180px;
            color #fff
            background darkcyan
            position absolute
        .nav>ul
            width 600px
            display flex
            position absolute
            left: 200px
            padding-left:20px
            a
                height 59px
                flex :auto
                &:hover
                    background rgba(111, 124, 128, 0.34)
                    border-bottom 2px solid #008b8b
        .login
            position: absolute
            right: 30px
            line-height:56px
</style>
