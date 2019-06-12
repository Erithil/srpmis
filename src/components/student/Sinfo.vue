<template>
    <div class="info">
        <div class="search">
         <input class="search__input" type="text" placeholder="Search">
         <button class="btn" type="submit">搜索</button>
        </div>
        <div class="content">
             <ul class="content-list">
                <li>项目名称</li>
                <li>负责人</li>
                <li>状态</li>
                <li>创立日期</li>
             </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="stylus" scoped>
.info{
    float left
    margin-left 20px
    margin-top 10px
    width 85%
    height 95%
}
.Search{
    margin-top 100px
}
.content{
    border solid
    border-width 1px
    width 80%
    height 90%
    margin-top 20px
    margin-left 40px
}
.content-list{
    list-style none
}
.content-list li{
    display inline-block
    margin-right 20px    
}
</style>

