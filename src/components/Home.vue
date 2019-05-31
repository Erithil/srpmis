<template>
    <div class="container">
        <div class="nav">
            <ul class="nav-list">
                <li><router-link :to="{name: 'Pinfo'}">项目信息</router-link></li>
                <li><router-link :to="{name: 'Pdata'}">项目数据</router-link></li>
                <li><router-link :to="{name: 'Userm'}">用户管理</router-link></li>
            </ul>
        </div>
        <router-view />
    </div>
</template>

<style lang="stylus" scoped>
.container{
    height 85%
    width 80%
    color #000000
    background-color rgba(255, 255, 255, .7)
    position absolute
    left 10%      
    top 100px
    border solid
}
.nav{
    width 150px
    height 100%
    background-color skyblue
    float left
}
.nav-list{
    list-style none
    margin-top 0
    
}   
.nav-list li{
    display block
    margin-bottom 40px
}
</style>
