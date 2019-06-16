<template>
    <div class="data">
        <table id="myinfo">
        </table>
        <div class="search">
            <button class="btn" type="submit" @click="add">录入信息</button>
            <button class="btn" type="submit" @click="seek">查找用户</button>              
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
        add: function(){
            this.$router.push({name: 'Tuseradd'});
        },
        seek: function(){
            this.$router.push({name: 'Tseek'});
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


</template>
