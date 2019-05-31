<template>
<div class="container">
  <div class="header">
	  	<span id="h-login">登录</span>
	</div>
	<form id="login-info">
		<span>
	  	<input class="balloon" type="text" v-model="loginForm.username" placeholder="请输入账号、手机号或邮箱"/>
	  	<label for="account">账号</label>
	  </span>
	  <span>
	  	<input class="balloon password" type="password" v-model="loginForm.password" placeholder="请输入密码"/>
	  	<label for="acode">密码</label>
	  </span>
	  <div class="click">
	  	<a id="fg" href="#">忘记密码?</a>
	  	<input type="submit" value="登录" name="login" @click="login" />
			<span>没有账号？点击<a href="home.html">注册</a></span>	
  	</div>		
	</form>
</div>

</template>

<script>

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userToken: ''
    };
  },
 
  methods: {
    login () {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        if(this.loginForm.username === 'mis' && this.loginForm.password === 'mis') {
          this.$router.push({path: '/home'})
        }else{alert('账户或密码错误');}
      }
    }
  }
};
</script>


<style lang="stylus" scoped>
.container{
	width 600px
	height 450px
	border solid
	border-width 1px
	color rgba(0, 0, 0, .1)
	background-color #ffffff
	position absolute
	top 150px
	left 50%
	margin-left -300px
}
.header{
	font-size 21px
	font-weight bold
	color #ffffff
	background #134A46
	margin-bottom: 15px;
	padding: 0;
	list-style: none;
	border-bottom: 2px solid #d9d9d9;
}
#login-info{
	color #000
	background-color rgba(255,255,255,.7)
	border-top-style none
}

#login-info span {
    position: relative;
    display: block;
    margin: 50px 170px;
  }
.click span{
	margin-left 38%
}
.click input{
	-web-kit-appearance:none;
  	-moz-appearance: none;
  	display: block;
  	margin: 0 auto;
  	font-size:15px;
  	width: 240px;
  	margin-top: 25px;
	height: 35px;
	background: #357eb8;
	color: #fff;
	font-weight: bold;
	font-size: 16px;
}
.click input:hover{
background: #0e62a3;
	cursor: pointer;
}

#fg{
	font-size 14px
	position absolute
	left 60%
	top 225px
}



</style>

