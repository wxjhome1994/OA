<template>
<div class="container" id="login">
    <main class="mainBox">
        <h1 class="title">融汇测绘oa管理系统</h1>
        <p class="tip">为保护企业的数据安全，请妥善保管密码</p>
        <section class="loginBox">
            <div class="form">
                <i class="icon">@</i>
                <input v-model="account" type="text" class="userName" placeholder="请输入用户名/手机号/邮箱" />
            </div>
            <div class="form">
                <i class="icon">@</i>
                <input v-model="password" type="password" class="userPass" placeholder="请输入与登录密码" />
            </div>
            <button class="submit" @click="handleLogin">登录</button>
        </section>
    </main>
    <footer class="footerBox">
        <span>天津市融汇测绘科技有限公司</span>
    </footer>
</div>
</template>

<script>
    export default {
        data(){
            return{
                account:'',
                password:""
            }
        },
        methods:{
            handleLogin(){
                console.log(this);
            }
        }
    }
</script>

<style scoped lang="stylus">
.container
    position absolute
    width 100%
    height: 50%
    background-color darkcyan
    .mainBox
        text-align center
        .title
            color white
            font-size 24px
            margin-top 140px
        .tip
            color #c5c5c5
            margin-top 30px
        .loginBox
            position absolute
            width 350px
            height: 200px
            padding: 15px 16px
            background-color white
            margin-top:30px
            margin-left:50%
            left:-175px
            box-shadow 1px 2px 5px #5a8b87
            .form
                width: 280px
                height: 50px
                i
                    position relative
                    left -113px
                    top 30px
                input
                    text-align left
                    padding-left 30px
                    width 300px
                    height 40px
                    margin-left:10px
            .submit
                width 300px
                height 40px
                margin-top:20px
                background-color darkcyan
                border none
                color white
                cursor pointer
    .footerBox
        color #6f7c80
        width 100%
        text-align center
        position absolute
        bottom -90%
</style>
