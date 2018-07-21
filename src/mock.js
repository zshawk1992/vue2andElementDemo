const Mock = require('mockjs')
const Random = Mock.Random;
const loginUser = {
  username:'zs',
  password:'123',
  type:'admin'
}
Mock.mock("http://localhost:8080/api/admin/login",'post',function (options) {
  let params = JSON.parse(options.body);
  // console.log(`参数是${params}`);
  if(params.username==loginUser.username&&params.password==loginUser.password){
    return "success";
  }else{
    return "failed";
  }
})

const resultData = function() {
  //动态生成用户数据
  let result = Mock.mock({
    'users|10': [{
      // id编号
      'id|+1': 100,
      // 中文姓名
      'name' :'@cname',
      // 邮箱
      'email': '@email',
      // 头像图片
      'head_image': Random.dataImage('50x50', '个人头像'),
      // 注册时间
      'register_date': '@date("yyyy-MM-dd")',
      // 地址
      'address': '@province' + '@city' + '@county',
      // 手机号
      'phone': /^1[385][1-9]\d{8}/

    }]
  });
  return {
    users: result.users
  }
}
Mock.mock("http://localhost:8080/api/admin/queryUsers",'post',function (options) {
  console.log(options.body);
  return resultData();
})
