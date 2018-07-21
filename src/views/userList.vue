<template>
  <div>
    <el-table
      :data="usersData"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="用户ID"
        width="80" property="id">
      </el-table-column>
      <el-table-column
        label="姓名"
        width="100" property="name">
      </el-table-column>
      <el-table-column
        label="邮箱"
        width="180" property="email">
      </el-table-column>
      <el-table-column
        label="手机号"
        width="120" property="phone">
      </el-table-column>
      <el-table-column
        label="地址"
        width="180" property="address">
      </el-table-column>
      <el-table-column
        label="注册日期"
        width="120" property="register_date">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--<el-pagination-->
      <!--@size-change="handleSizeChange"-->
      <!--@current-change="handleCurrentChange"-->
      <!--:current-page="this.pagination.currentPage"-->
      <!--:page-sizes="[100, 200, 300, 400]"-->
      <!--:page-size="this.pagination.page_size"-->
      <!--layout="total, sizes, prev, pager, next, jumper"-->
      <!--:total="this.pagination.total">-->
    <!--</el-pagination>-->
  </div>
</template>

<script>
    import {queryUsersUrl} from '../api/api'
    export default {
      data(){
        return {
          usersData:[],
          pagination: {
            current_page: 1,
            page_size: 10,
            total: 0
          }
        };
      },
      methods: {
        handleEdit(index, row) {

        },
        handleDelete(index, row) {

        },
        queryUsers(){
          let params = {
              current_page: this.pagination.current_page,
              page_size: this.pagination.page_size,
          };
          queryUsersUrl(params).then(res => {
            this.usersData = res.data.users;
            this.pagination = res.data.pagination;
          });
        }
      // getUsers(){
      //   let params = {
      //       current_page: this.pagination.current_page,
      //       page_size: this.pagination.page_size,
      //   };
      //   queryUsersUrl(params).then(res => {
      //     this.usersData = res.data.users;
      //     this.pagination = res.data.pagination;
      //   })
      // },
      // handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
      // },
      // handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
      // }
      },
      mounted(){
        this.queryUsers();
      }

    }
</script>

<style scoped>

</style>
