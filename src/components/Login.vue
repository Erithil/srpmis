<template>
<div class="container">
  <div class="header">
	  	<span id="h-login">登录</span>
	</div>
	<form id="login-info">
		<span>
	  	<input class="clean-slide" type="text" v-model="loginform.user" placeholder="请输入账号、手机号或邮箱"/>
	  	<label for="account">账号</label>
	  </span>
	  <span>
	  	<input class="clean-slide" type="password" v-model="loginform.pass" placeholder="请输入密码"/>
	  	<label for="acode">密码</label>
	  </span>
	  <div class="click">
	  	<a id="fg" href="#">忘记密码?</a>
			<div class="row">
					<label>
						<input type="radio" name="radio" value="student"  checked="checked" />学生
					</label>
					<label>
						<input type="radio" name="radio" value="teacher" />教师
					</label>
			</div>
	  	<button class="btn" value="登录" name="login" @click="login">登录</button>
			<span>没有账号？点击<a href="home.html">注册</a></span>	
  	</div>		
	</form>
</div>

</template>

<script>
import axios from 'axios'


export default {

	data(){
		return {
			loginform: {
				user: '',
				pass: ''
			}
		}
	},

  methods: {
		login(){
			
			axios.get('@/@/static/saccount.json', {})
			.then(function (response) {
				this.account = JSON.parse(response.data);
				alert(this.account);
			})
			.catch(function (error) {
					alert(error.response);
			});
		}
	}
}
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
	height 50px
	font-size 25px
	font-weight 20px
	color #ffffff
	background #000000
	margin-bottom: 15px;
	padding: 0;
	text-align center
	line-height 50px
}
#login-info{
	color #000
	background-color rgba(255,255,255,.7)
}

#login-info span {
    position: relative;
    display: block;
    margin: 55px 185px;
  }
.click button{
	margin-left 43%
}
.click span{
	text-align center	
	margin-top 10px
}


#fg{
	font-size 14px
	position absolute
	left 58%
	top 250px
}

.row{
	width 100%
	margin-left 40%
	margin-bottom 20px
	label{
		display inline-block
	}
}

</style>

