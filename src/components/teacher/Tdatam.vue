<template>
    <div>
        <div>{{mydata}}</div>
        <button class="btn" type="submit">修改</button>
        <button class="btn" type="submit">删除</button>
    </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'

export default {
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
                    if (content.length != 0) {
                        var mydata = content;
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
