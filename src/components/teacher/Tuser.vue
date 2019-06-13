<template>
<div class="myform">
        <div class="header">我的信息</div>
        <span>
            <input class="clean-slide" type="text" v-model="mydata.myid" />
            <label>账号ID</label>
        </span>
        <span>
            <input class="clean-slide" type="text" v-model="mydata.myname" />
            <label>姓名</label>
        </span>
        <span>
            <input class="clean-slide" type="text" v-model="mydata.mytel" />
            <label>手机号码</label>
        </span>
        <span>
            <input class="clean-slide" type="text" v-model="mydata.myem" />
            <label>e-mail</label>
        </span>
        <span>
            <input class="clean-slide" type="text" v-model="mydata.mymay" />
            <label>学院</label>
        </span>
         <div class="ctrl">
            <button class="btn" type="submit" @click="addinfo">提交</button>           
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
			mydata: {
			}
		}
    },

    methods: {
        addinfo: function(){
            if(this.mydata.myid =='' || this.mydata.myname=='' || this.mydata.mytel=='' || this.mydata.myem=='' || this.mydata.mymay==''){
                alert("不能有空值")
            } else {
                //传值
                var url = '/api/myinfo'
                this.$http.post(url, {
                    myid: this.mydata.myid,                
                    myname: this.mydata.myname, 
                    mytel: this.mydata.mytel,
                    myem: this.mydata.myem,
                    mymay: this.mydata.mymay,                
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
.header{
    text-align center
    font-size 18px
    margin-right 10%
    margin-top 5%
}
.myform span {
    position: relative;
    display: block;
    margin: 55px 40%;
  }
.row{
	width 100%
	margin-left 40%
	margin-bottom 20px
	label{
		display inline-block
	}
}
.ctrl{
    margin-left 45%
    button{
        margin 10px
    }
}
</style>
