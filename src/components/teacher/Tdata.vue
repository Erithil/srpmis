<template>
    <div class="data">
        <div class="search">
            <button class="btn" type="submit" @click="tmain">我的项目</button>
            <button class="btn" type="submit" @click="addjm">添加</button>          
        </div>
        <div>
            <router-view />
        </div>
    </div>

</template>
<script>

export default {
    data(){
        return{
            
        }
    },

    methods: {
        addjm: function(){
            this.$router.push({name: 'Tadd'});
        },
        tmain: function(){
            this.$router.push({name: 'Tdatam'});
        }
    }

}
</script>

<style lang="stylus" scoped>
.data{
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

