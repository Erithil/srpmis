<template>
<form id="register-info">
	<span>
		<input class="balloon" id="account" type="text" placeholder="请输入账号、手机号或邮箱"/>
		<label for="account">账号</label>
	</span>
	<span>
		<input class="balloon" id="acode" type="text" placeholder="请输入密码"/>
		<label for="acode">密码</label>
	</span>
	<div class="click">
		<input type="submit" value="注册" name="register" />
	</div>		
</form>
</template>

<script>
</script>

<style lang="stylus" scoped>
#register-info{
	color #000
	background-color rgba(255,255,255,.7)
}
#register-info span {
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


</style>
