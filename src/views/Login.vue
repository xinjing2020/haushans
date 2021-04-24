<template>
  <div>
      <el-form ref="form" :model="loginForm">
        <h3>系统登录</h3>
        <el-form-item>
            <el-input type="text" v-model="loginFrom.username" placeholder="请输入用户名">
            </el-input>
        </el-form-item>
      </el-form>


  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style>


</style>
