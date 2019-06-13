<template>
    <div class="info">
        <div class="search">
         <input class="search__input" type="text" placeholder="输入项目名字查询" v-model="seek.sear"/>
         <button class="btn" type="submit" @click="lookfor">搜索</button>
        </div>
        <div class="main">
        </div>

        
    </div>
</template>
<script>

export default {
    data(){
        return{
            seek: {}
        }
    },

    methods: {
        lookfor: function(){
            var url = 'api/search';
            this.$http.post(url, {
                sepname: this.seek.sear,             
                },{})
                .then(function (data) {
                    var content=data.body;
                    if (content.length != 0) {
                        var result = content;
                        var para=document.createElement('div');
                        var node=document.createTextNode('result');//创建一个文本节点
                        para.appendChild(node);//追加此文本节点

                    }else{
                        alert("失败！");
                    }
                },function(response){
                    console.log(response);
                });
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

