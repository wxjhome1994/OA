<template>
    <div class="email">
        <div>邮件</div>
        <div>邮件</div>
        <div>邮件</div>
        <div>邮件</div>
        <div>邮件</div>
        <div>邮件</div>
    </div>
</template>

<script>
    export default {
        name: "Email",
        beforeRouteEnter(to,from,next){
            console.log('beforeRoute Enter');
            next();
        },
        beforeRouteUpdate(to,from,next){
            console.log('beforeRoute Update');
            next();
        },
        beforeRouteLeave(to,from,next){
            console.log('beforeRoute Leave');
            next();
        },

    }
</script>

<style scoped lang="stylus">
.email
    width: 100%
    padding:25px 50px
    position relative
    left: 200px
    right: 0
    top:0
    bottom: 0
    text-align left
</style>
