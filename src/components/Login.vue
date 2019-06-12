<template>
<div class="container">
  <div class="header">
	  	<span id="h-login">登录</span>
	</div>
	<form id="login-info">
		<span>
	  	<input class="clean-slide" type="text" v-model="loginForm.username" placeholder="请输入账号、手机号或邮箱"/>
	  	<label for="account">账号</label>
	  </span>
	  <span>
	  	<input class="clean-slide" type="password"  v-model="loginForm.userpsw" placeholder="请输入密码"/>
	  	<label for="acode">密码</label>
	  </span>
	  <div class="click">
	  	<a id="fg" href="#">忘记密码?</a>
			<div class="row">
					<label>
						<input type="radio" name="radio" value="student" checked="checked" />学生
					</label>
					<label>
						<input type="radio" name="radio" value="teacher"  />教师
					</label>
			</div>
	  	<button class="btn" value="登录" name="login" @click="verify">登录</button>
			<span>没有账号？点击<router-link :to="{name: 'Register'}">注册</router-link></span>	
  	</div>		
	</form>
</div>

</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'

export default {

	data(){
		return {
			loginForm: {
			}
		}
	},

  methods: {

		verify: function(){	
			var radio = document.getElementsByName('radio');
			var userroot = null;
			for(let i=0; i<radio.length; i++){
				if(radio[i].checked==true) {
					userroot = radio[i].value;
					break;
                }
			}
			console.log(this.loginForm);
			var url="/api/login";
			this.$http.post(url, {
				username: this.loginForm.username, 
				userpsw: this.loginForm.userpsw,
				userroot: this.userroot
			},{})
			.then(function (data) {
                var content=data.body;
                if (content.length != 0) {
					if(userroot == 'student')
					{
						this.$router.push({name: 'Pinfo', params:{uname: this.loginForm.username,uroot: userroot}});
					}else if(userroot == 'teacher') {
						this.$router.push({name: 'Tinfo', params:{uname: this.loginForm.username,uroot: userroot}});
					}
                }else{
                    alert("账户密码错误！");
                }
            },function(response){
                console.log(response);
            });
		},


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

