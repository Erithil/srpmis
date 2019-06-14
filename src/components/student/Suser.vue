<template>
    <div class="data">
        <table id="myinfo">
        </table>
        <div class="search">
            <button class="btn" type="submit" @click="add">录入信息</button>          
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

    mounted(){
        this.now()
    },

    methods: {
        add: function(){
            this.$router.push({name: 'Suseradd'});
        }
    },
        now: function(){
            var url = 'api/nowinfo';
            this.$http.post(url, {
                    username: this.$route.params.uname,             
                },{})
                .then(function (data) {
                    var content=data.body;
                    var table = document.getElementById('myinfo');
                    if (content.length != 0) {                       
                        for(let i=0;i<content.length;i++){
                            var tr = document.createElement('tr');
                            //每一行
                            var td1 = document.createElement('td')
                            td1.innerHTML = select + content[i].username;
                            tr.appendChild(td1);
                            var td2 = document.createElement('td')
                            td2.innerHTML = content[i].myname;
                            tr.appendChild(td2);
                            var td3 = document.createElement('td')
                            td3.innerHTML = content[i].tel;
                            tr.appendChild(td3);
                            var td4 = document.createElement('td')
                            td4.innerHTML = content[i].email;
                            tr.appendChild(td4);   
                            var td5 = document.createElement('td')
                            td5.innerHTML = content[i].mayjor;
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
