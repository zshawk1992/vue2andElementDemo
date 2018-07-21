<template>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户登录</span>
        </div>
        <el-form :model="loginForm" ref="loginFormRef" label-width="100px" class="demo-dynamic">
          <el-form-item
            prop="username"
            label="用户名"
            :rules="[
      { required: true, message: '用户名不能为空', trigger: 'blur' }
    ]"
          >
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            label="密码"
            :rules="[
      { required: true, message: '密码不能为空', trigger: 'blur' }
    ]"
          >
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginFormRef')">提交</el-button>
            <el-button @click="resetForm('loginFormRef')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>

<script>
    import axios from 'axios';
    import {loginUserUrl} from '../api/api'
    export default {
      data() {
        return {
          loginForm: {
            username:'',
            password: ''
          }
        };
      },
      methods:{
        resetForm(formName){
          this.$refs[formName].resetFields();
        },
        submitForm(formName){
          this.$refs[formName].validate(valid => {
              if(valid){
                const params = {
                  username: this.loginForm.username,
                  password: this.loginForm.password,
                  type:'admin'
                };
                loginUserUrl(params).then(res=>{
                  if(res.data=='success'){
                    this.$router.push({path:'/home'});
                  }else{
                    //todo 登录失败弹出提示
                    console.error("登录失败");
                    this.$notify.error({
                      title: '错误',
                      message: '密码或用户名错误，登录失败'
                    });
                  }
                })
              }
          })
        }
      }
    }
</script>

<style scoped>
  .box-card {
    width: 480px;
    margin: 150px auto;
  }
</style>
