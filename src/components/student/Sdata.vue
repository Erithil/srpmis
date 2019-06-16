<template>
    <div>
        <button class="btn" type="submit" @click="smain">我的项目</button> 
        <table id="prodata">
        <tr>
            <th>项目ID</th>
            <th>项目名</th>
            <th>项目单位</th>
            <th>项目状态</th>
            <th>导师ID</th>
        </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'

export default {
    data() {
    },


    methods: {
        smain: function(){
            var url = 'api/smain';
            this.$http.post(url, {
                    stuname1: this.$route.params.uname,
                    stuname2: this.$route.params.uname,  
                    stuname3: this.$route.params.uname,               
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
                            var td6 = document.createElement('td')
                            td5.innerHTML = content[i].leader;
                            tr.appendChild(td6);
                            table.appendChild(tr);
                        }
                            console.log(content)                     
                    }else{                    
                        alert("失败！");
                    }
                },function(response){
                    console.log(response);
                });
        },
            
    }
}
</script>

<style lang="stylus" scoped>
#prodata{
    text-align left
    border-width 1px
    font-size 17px
    margin 20px
    tr{
        line-height 30px
    }

}
</style>
