<template>
  <div>
    <el-row>
      <el-col :span="4">
        <!--注意:default-active前有冒号-->
        <el-menu :default-active="this.$route.path" class="el-menu-vertical-demo" :router="true">
          <!--子菜单的index要填写一级路由的url，不然会导致浏览器地址栏输入二级路由地址时，子菜单不展开的问题-->
          <el-submenu index="/data">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/data/userList">用户列表</el-menu-item>
            <el-menu-item index="/data/userAdd">用户添加</el-menu-item>
          </el-submenu>
          <el-menu-item index="/data/bikes">
            <i class="el-icon-document"></i>
            <span slot="title">车辆管理</span>
          </el-menu-item>
          <el-menu-item index="/data/rider">
            <i class="el-icon-setting"></i>
            <span slot="title">行程管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      data(){
        return {};
      },
      methods: {},
      mounted(){

      }

    }
</script>

<style scoped>

</style>
