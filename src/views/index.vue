<template>
  <div>
    <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="/home">主页</el-menu-item>
      <el-menu-item index="/data">管理</el-menu-item>
      <el-menu-item index="/status">统计</el-menu-item>
      <el-menu-item index="" class="pullright"><router-link to="/login">登录</router-link></el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
    export default {
      computed:{
        //解决子路由下，顶级导航栏不选中的问题
        defaultActive(){
          //判断反斜线/的个数
          let number = this.$route.path.match(/\//g).length;
          if(number>1){
            //个数为2表示有子路由，返回代表一级路由的url
            return this.$route.path.substring(0,this.$route.path.lastIndexOf("/"));
          }else{
            //个数为1直接返回一级路由的url
            return this.$route.path;
          }
        },
      }

    }
</script>

<style scoped>
  .pullright{
    float:right;
  }
</style>
