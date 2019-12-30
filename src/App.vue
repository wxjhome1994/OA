<template>
  <div id="app">
    <frame>
  </div>
</template>
<script>
  import Frame from "./views/Frame"
  export default {
    name: "Header",
    components:{
      Frame,
    },
  }
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50


</style>
