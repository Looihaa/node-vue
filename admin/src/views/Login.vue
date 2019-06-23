<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" size="medium" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async login () {
      const res = await this.$http.post('login', this.model)
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功'
      })
    }
  }
}
</script>

<style>
/* body {
  background: #000;
} */
/* .login-card {
  position: relative;
  width: 25rem;
  margin: 5rem auto;
  overflow: visible;
  background: #000;
  color: skyblue;
  font-weight: 700;
}
.el-card {
  border: none;
}
.el-input.el-input__inner {
  background-color: #000;
}
.el-button {
  background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);

}
.el-button--primary:hover, .el-button--primary:focus {
    background: linear-gradient(125deg, #89ff00, #060c21, #00bcd4);
    border-color: linear-gradient(125deg, #89ff00, #060c21, #00bcd4);
    color: #FFFFFF;
}

.login-card:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
}

.login-card:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -2;
    
    filter: blur(40px);
}

.login-card::before,
.login-card:after {
    background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
} */
</style>
