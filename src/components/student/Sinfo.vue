<template>
    <div class="info">
        <div class="search">
         <input class="search__input" type="text" placeholder="输入项目名字查询" v-model="seek.sear"/>
         <button class="btn" type="submit" @click="lookfor">搜索</button>
        </div>
        <table id="prodata">
            <tr>
                <th>项目ID</th>
                <th>项目名</th>
                <th>项目单位</th>
                <th>项目状态</th>
                <th>修改时间</th>
            </tr>
        </table>
        <div class="main">
        </div>

        
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    data(){
        return{
            seek: {}
        }
    },

    methods: {
        lookfor: function(){
            $('tr').not(":first").remove(); 
            var url = 'api/search';
            this.$http.post(url, {
                sepname: '%' + this.seek.sear + '%',             
                },{})
                    .then(function (data) {
                    var content=data.body;
                    var table = document.getElementById('prodata');
                    if (content.length != 0) {
                        for(let i=0;i<content.length;i++){
                            var tr = document.createElement('tr');
                            //每一行
                            var td1 = document.createElement('td')
                            td1.innerHTML = content[i].proid;
                            tr.appendChild(td1);
                            var td2 = document.createElement('td')
                            td2.innerHTML = content[i].proname;
                            tr.appendChild(td2);
                            var td3 = document.createElement('td')
                            td3.innerHTML = content[i].prodep;
                            tr.appendChild(td3);
                            var td4 = document.createElement('td')
                            td4.innerHTML = content[i].prosta;
                            tr.appendChild(td4);   
                            var td5 = document.createElement('td')
                            td5.innerHTML = content[i].lday;
                            tr.appendChild(td5);
                            table.appendChild(tr); 
                            }                           
                            console.log(content)
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

