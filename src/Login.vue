<template>
<div class="container" id="login">
    <main class="mainBox">
        <h1 class="title">OA管理系统</h1>
        <p class="tip">为保护企业的数据安全，请妥善保管密码</p>
        <section class="loginBox">
            <div class="form">
                <i class="iconfont icon-icon-"></i>
                <input v-model="account" type="text" class="userName" placeholder="请输入用户名/手机号/邮箱" />
            </div>
            <div class="form">
                <i class="iconfont icon-suo"></i>
                <input v-model="password" type="password" class="userPass" placeholder="请输入与登录密码" />
            </div>
            <button class="submit" @click="handleLogin">登录</button>
        </section>
    </main>
    <footer class="footerBox">
        <span>xxxxxxxxxxx科技有限公司</span>
    </footer>
</div>
</template>

<script>
    import md5 from "blueimp-md5"
    import * as API from "../src/api/login"
    export default {
        data(){
            return{
                account:'',
                password:""
            }
        },
        methods:{
            checkAccount(){
                //用户名、手机、邮箱
                let argArr=[
                    /^((\w{2,20})|([\u4e00-\u9FA5]{2,10}(·[\u4e00-\u9FA5]{2,10}){0,2}))$/,
                    /^1\d{10}$/,
                    /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
                ];
                return argArr.some(item=>{
                    return item.test(this.account)
                })
            },
            checkPassword(){
              return /^\w{6,16}$/.test(this.password)
            },
            handleLogin(){
                //1.防止xss攻击，先做表单校验
                if (!this.checkAccount()||!this.checkPassword()) {
                    this.$message.error("系统提示：请输入合法的账号和密码");
                    return
                }
                //2.把状态中的密码进行MD5加密（不能修改原始状态，因为一旦修改，视图中的内容也变了）
                let password=md5(this.password);
                console.log(password);
                //3.发送给服务器校验
                API.handleLogin(this.account,password).then(power=>{
                    this.$alert("登陆成功，即将跳转到首页！","系统提示",{
                        callback:action => {
                            location.href=location.origin;//默认找index.html
                        }
                    })
                }).catch(reason => {
                    this.$alert("登陆成功，即将跳转到首页！","系统提示",{
                        callback:action => {
                            location.href=location.origin;//默认找index.html
                        }
                    })
                })
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
            padding: 5px 16px
            background-color white
            margin-top:30px
            margin-left:50%
            left:-175px
            box-shadow 1px 2px 5px #5a8b87
            .form
                width: 280px
                height: 50px
                i
                    font-size 18px
                    color #798087
                    position relative
                    left -113px
                    top 30px
                .icon-suo
                    font-size 17px
                input
                    text-align left
                    padding-left 30px
                    width 300px
                    height 40px
                    margin-left:10px
                    border:1px solid #c5c5c5
            .submit
                width 300px
                height 40px
                margin-top:30px
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
