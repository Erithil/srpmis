<template>
    <div class="addform">
        <span>
            <input class="clean-slide" type="text" v-model="pdata.pid" />
            <label>项目ID</label>
        </span>
        <span>
            <input class="clean-slide" type="text" v-model="pdata.pdep" />
            <label>项目单位</label>
        </span>
        <span>
            <input class="clean-slide" type="text" v-model="pdata.pname" />
            <label>项目名称</label>
        </span>
        <span>
            <input class="clean-slide" type="text" v-model="pdata.plead" />
            <label>导师ID</label>
        </span>
        <div class="row">
            <p>项目状态：</p>
			<label>
				<input type="radio" name="radio" value="未开始" checked="checked" />未开始
			</label>
			<label>
				<input type="radio" name="radio" value="进行中"  />进行中
			</label>
            <label>
				<input type="radio" name="radio" value="已结题"  />已结题
			</label>
		</div>
        <div class="ctrl">
            <button class="btn" type="submit" @click="add">提交</button>           
            <button class="btn" type="button" @click="back">返回</button>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'

export default {
    data(){
		return {
			pdata: {
			}
		}
    },
    
    methods: {
        back: function(){
            this.$router.push({name: 'Tdatam'});
        },

        add: function(){
            if(this.pdata.pid=='' || this.pdata.pdep=='' || this.pdata.pleader=='' || this.pdata.pname==''){
                alert("不能有空值")
            } else {
                var radio = document.getElementsByName('radio');
                var status = null;
                for(let i=0; i<radio.length; i++){
                    if(radio[i].checked==true) {
                        status = radio[i].value;
                        break;
                    }
                }
                //获取时间
                var nowday = new Date();
                var lday = nowday.toLocaleDateString();
                console.log(lday);
                //传值
                var url = '/api/add'
                this.$http.post(url, {
                    pid: this.pdata.pid,                
                    pdep: this.pdata.pdep, 
                    pname: this.pdata.pname,
                    plead: this.pdata.plead,
                    psta: status,
                    plday: lday,                   
                },{})
                .then(function (data) {
                    var content=data.body;
                    if (content.length != 0) {
                        alert("添加成功")
                    }else{
                        alert("添加失败！");
                    }
                },function(response){
                    console.log(response);
                });
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.addform span {
    position: relative;
    display: block;
    margin: 55px 185px;
  }
.row{
	width 100%
	margin-left 20%
	margin-bottom 20px
	label{
		display inline-block
	}
}
.ctrl{
    margin-left 20%
    button{
        margin 10px
    }
}
</style>
