<template>
<div class="container">
	<div class="header">
			<span id="h-register">注册</span>
	</div>
<form id="register-info">
		<span>
	  	<input class="clean-slide" type="text" v-model="registerform.user" placeholder="请输入账号、手机号或邮箱"/>
	  	<label for="account">账号</label>
	  </span>
	  <span>
	  	<input class="clean-slide" type="password" v-model="registerform.pass" placeholder="请输入密码"/>
	  	<label for="acode">密码</label>
	  </span>
		<span>
	  	<input class="clean-slide" type="password" v-model="registerform.pass" placeholder="请再次输入密码"/>
	  	<label for="acode">确认密码</label>
	  </span>
	  <div class="click">
			<div class="row">
					<label>
						<input type="radio" name="radio" value="student"  checked="checked" />学生
					</label>
					<label>
						<input type="radio" name="radio" value="teacher" />教师
					</label>
			</div>
	  	<button class="btn" value="注册" name="register" @click="register">注册</button>
  	</div>		
	</form>
</div>
</template>

<script>
import axios from 'axios'

export default {
	
	data(){
		return {
			registerform: {
				user: '',
				pass: ''
			}
		}
	},

	methods: {
		register(){
			axios.post('/static/saccount.json', {
				"username": this.registerform.user,
				"password": this.registerform.pass
			})
			.then(function (response) {
				alert('success');
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
	background rgba(0, 0, 0, .6)
	margin-bottom: 15px;
	padding: 0;
	text-align center
	line-height 50px
}
#register-info{
	color #000
	background-color rgba(255,255,255,.7)
}

#register-info span {
    position: relative;
    display: block;
    margin: 40px 185px;
  }
.click button{
	margin-left 43%
}
.click span{
	text-align center	
	margin-top 10px
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
