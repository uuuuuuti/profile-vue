<template>
  <Row class="vm-login vm-panel">
   <Col span="10" class="login-form">
     <div class="login-header">
       <img src="../assets/img/logo.png" height="80" alt="">
       <p><span>SCHOLAT</span>PROFILE</p>
     </div>
     <Form
      class="login-form"
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      inline>
      <Form-item prop="username">
          <Input v-model="loginForm.username" placeholder="请输入账号"></Input>
        </Form-item>
        <Form-item prop="password">
          <Input
            type="password"
            v-model="loginForm.password"
            @on-enter="handleSubmit"
            placeholder="请输入密码">
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="handleSubmit()">登录</Button>
        </Form-item>
        <Spin fix v-if="loginLoading">登录中 ...</Spin>
     </Form>
     <!--<div class="login-form">
        <Input v-model="loginForm.username" placeholder="请输入账号"></Input>
        <Input v-model="loginForm.password" type="password" placeholder="请输入密码"></Input>
        <Button type="primary" @click="handleSubmit()">登录</Button>
     </div>-->
     <!--<div class="login-footer">
       <Checkbox v-model="remenber">记住账号</Checkbox>
       <span class="forget"><a href="#">Forget Password</a></span>
     </div>-->
   </Col>
   <Col span="14" class="login-ad">
     <span class="photo-author">Photo: Jure Kravanja</span>
   </Col>
  </Row>
</template>
<script>
  import Apis from '@/apis/apis'
  export default {
    name: 'VmLogin',
    data () {
      return {
        loginRules: {
          username: [
          {required: true, message: '用户名不能为空！', trigger: 'blur'},
          {message: '用户名长度必须在5~50位之间！', trigger: 'blur', min: 5, max: 50}
          ],
          password: [
          {required: true, message: '密码不能为空！', trigger: 'blur'},
          {message: '密码长度必须在5~50位之间！', trigger: 'blur', min: 5, max: 50}
          ]
        },
        loginForm: {
          username: '',
          password: ''
        },
        loginLoading: false
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.logingLoading = true
            this.$store.dispatch('loginByUsername', this.loginForm).then(response => {
              this.loginLoading = false
              let obj = response.data
              if (obj.success) {
                this.$router.push('/')
              } else {
                this.$Message.error(obj.msg)
                this.loginLoading = false
              }
            }).catch(err => {
              this.$Message.error({
                content: err.msg
              })
              this.loginLoading = false
            })
          }
        })
      },
      doRefresh (index) {
        if (!sessionStorage.getItem('Authorization')) {
          clearInterval(index)
        } else {
          this.$http.get(Apis.sys.tokens.refresh).then((response) => {
            let token = response.data.data.tokenType + ' ' + response.data.data.accessToken
            sessionStorage.setItem('Authorization', token)
          })
        }
      }
    }
  }
</script>
