<template>
    <div class="container">
        <div class="nav">
            <ul class="nav-list">
                <li><router-link :to="{name: 'Pinfo'}" class="navs">项目信息</router-link></li>
                <li><router-link :to="{name: 'Pdata'}" class="navs">项目数据</router-link></li>
                <li><router-link :to="{name: 'Userm'}" class="navs">用户管理</router-link></li>
            </ul>
        </div>
        <router-view />
    </div>
</template>

<style lang="stylus" scoped>
.container{
    height 80%
    width 80%
    color #000000
    background-color rgba(255, 255, 255, .7)
    position absolute
    left 10%      
    top 130px
    border solid
    border-width 1px
}
.nav{
    width 130px
    height 100%
    background-color rgba(25, 170, 173, .1)
    float left
}
.nav-list{
    list-style none
    margin-top 20px
    
}   
.nav-list li{
    display block
    margin-bottom 40px
}
.navs{
    text-decoration none
    color #000000
}
.navs:active .nav-list li{
    background blue
}
</style>
