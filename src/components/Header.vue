<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/images/logo.jpg" alt="logo" />
    </div>
    <div class="content">
      <p class="zh">华南师范大学科研项目信息管理系统</p>
      <p class="en">MIS of Scientific Research Project for SCNU</p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus" scoped>
.header{
  width 100%
  height 80px
  color #000000
  background-color rgba(160, 238, 225, .2)
  float left
}
.logo{
  float left
  margin-left 10px
  margin-right 10px
}
.content{
  margin-left 30px
  line-height 10px
}
.zh{
  font-size 21px
  font-weight bold
}
.en{
  margin-left 30px
  font-size 14px
}
</style>