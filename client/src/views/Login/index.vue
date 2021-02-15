<template>
  <el-form ref="form" :model="form" label-width="80px" size="small">
    <el-form-item label="用户名称">
      <el-input v-model="form.userName" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询是否含有账号</el-button>
      <el-button @click="register">注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { login, register } from '@/api/login'
// import { setToken } from '@/utils/auth'
export default {
  data() {
    return {
      form: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      // console.log('submit!')
      login(this.form).then(res => {
        console.log(res)
        if (res.errno === 0) {
          this.$message({
            message: '登录成功!',
            type: 'success'
          })
          this.$store.commit('user/SET_TOKEN', res.data)
          this.$router.push({
            path: '/Home'
          })
        }
      })
    },
    login,
    register() {
      register(this.form).then(res => {
        console.log(res)
        if (res.errno === 0) {
          this.$message({
            message: '注册成功!',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>