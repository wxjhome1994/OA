<template>
  <div class="hello">
    <el-container>
      <Header></Header>
      <el-container>

      </el-container>,
    </el-container>
  </div>
</template>

<script>
  import Header from "./header/Header"
  /*import Aside from "./aside/Aside"
  import Content from "./content/Content"*/
export default {
  name: 'Frame',
  components:{
    Header,
    /*Aside,
    Content*/
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">


</style>
