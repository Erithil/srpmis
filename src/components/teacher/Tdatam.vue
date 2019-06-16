<template>
    <div> 
        <table id="prodata">
        <tr>
            <th>项目ID</th>
            <th>项目名</th>
            <th>项目单位</th>
            <th>项目状态</th>
            <th>修改时间</th>
        </tr>
        </table>

 
        <button class="btn" type="submit" @click="changeSta">修改状态</button>
        <select id="select">
            <option value="未开始">未开始</option>
            <option value="进行中">进行中</option>
            <option value="已结题">已结题</option>
        </select>
        <div id="delete">
            <button class="btn" type="submit" @click="del">删除</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'

export default {
    data() {
    },

    mounted() {
        this.mypro()
    },

    methods: {
        mypro: function(){
            var url = 'api/tmain';
            this.$http.post(url, {
                    plead: this.$route.params.uname,             
                },{})
                .then(function (data) {
                    var content=data.body;
                    var table = document.getElementById('prodata');
                    if (content.length != 0) {                       
                        for(let i=0;i<content.length;i++){
                            var select = '<input type="checkbox" class="sel" />'
                            var tr = document.createElement('tr');
                            //每一行
                            var td1 = document.createElement('td')
                            td1.innerHTML = select + content[i].proid;
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
                        var sel = document.getElementsByClassName('sel');
                        for(let j=0;j<sel.length;j++){                           
                            sel[j].value = content[j].proid;
                        }

                            console.log(content)                     
                    }else{                    
                        alert("失败！");
                    }
                },function(response){
                    console.log(response);
                });
        },

        del: function(){
            var sel = document.getElementsByClassName('sel');
            var whi =  null;  
            for(let k=0; k<sel.length; k++){
                if(sel[k].checked==true) {
                    whi = sel[k].value;
                }
            }
            var url="/api/del";
			this.$http.post(url, {
				pid: whi,
			},{})
			.then(function (data) {
				var content=data.body;
                if (content.length != 0) {
                    alert("删除成功，请刷新")
                }else{
                    alert("错误！");
                }
            },function(response){
                console.log(response);
            });

        },
        
        changeSta: function(){
            //获取修改的项目id
            var sel = document.getElementsByClassName('sel');
            var whi =  null;  
            for(let k=0; k<sel.length; k++){
                if(sel[k].checked==true) {
                    whi = sel[k].value;
                }
            }
            //获取修改
            var select = document.getElementById('select');
            var index = select.selectedIndex;
            var changetext = select.options[index].text
            console.log(changetext)
            var url="/api/change";
			this.$http.post(url, {
                pid: whi,
                psta: changetext,
			},{})
			.then(function (data) {
				var content=data.body;
                if (content.length != 0) {
                    alert("修改成功，请刷新")
                }else{
                    alert("错误！");
                }
            },function(response){
                console.log(response);
            });
        }
            
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

#delete{
    margin-top 20px
}
</style>
