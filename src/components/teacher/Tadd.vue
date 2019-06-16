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
        <span>
            <input class="clean-slide" type="text" v-model="pdata.pstu1" />
            <label>组长ID</label>
        </span>
        <span>
            <input class="clean-slide" type="text" v-model="pdata.pstu2" />
            <label>组员ID</label>
        </span>
        <span>
            <input class="clean-slide" type="text" v-model="pdata.pstu3" />
            <label>组员ID</label>
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
                    pstu1: this.pdata.pstu1,
                    pstu2: this.pdata.pstu2, 
                    pstu3: this.pdata.pstu3,                    
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
    margin: 35px 30%;
  }
.row{
	width 100%
	margin-left 30%
	margin-bottom 5px
	label{
		display inline-block
	}
}
.ctrl{
    margin-left 30%
    button{
        margin 10px
    }
}
</style>
