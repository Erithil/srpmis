var models = require('./db');//数据库链接信息
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('./sqlfun');//sql语句

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 登录用户接口
router.post('/login', (req, res) => {
    var sql = $sql.user.login;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);
    conn.query(sql, [params.username], function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            jsonWrite(res, result);
            for(var i = 0; i < result.length; i++){
                console.log("请求回来！",result[i])
                console.log("请求结果！",typeof result[i],result[i].userpsw);
                console.log("请求结果！",typeof result[i],result[i].userroot);
                if (result[i].userpsw == params.userpsw && result[i].userroot == params.userroot ) {
                    res.send("seccuss");
                }
            }
            res.end('is over');
        }
    })
});

// 增加用户接口
router.post('/register', (req, res) => {
    var sql = $sql.user.register;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);
    conn.query(sql, [params.username,params.userpsw,params.userroot], 
        function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            jsonWrite(res, result);
            for(var i = 0; i < result.length; i++){
                console.log("请求回来！",result[i])
                console.log("请求结果！",typeof result[i],result[i].userpsw);
                if (result[i].userpsw == params.userpsw) {
                    res.send("success");
                }
            }
            res.end('is over');
        }
    })
});

//查询
router.post('/search', (req, res) => {
    var sql = $sql.user.search;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);
    conn.query(sql, 
        [params.sepname,], 
        function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            res.send(JSON.stringify(result));
        }
        res.end(JSON.stringify(result));
        })
});

//添加
router.post('/add', (req, res) => {
    var sql = $sql.user.add;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);
    conn.query(sql, 
        [params.pid, params.pdep, params.pname, params.plead, params.psta, params.plday,], 
        function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            jsonWrite(res, result);
            for(var i = 0; i < result.length; i++){
                console.log("请求回来！",result[i])
                console.log("请求结果！",typeof result[i],result[i].proname);
                if (result[i].proname == params.pname) {
                    res.send("success");
                }
            }
            res.end('is over');
        }
    })
});

//我的项目
router.post('/tmain', (req, res) => {
    var sql = $sql.user.tmain;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);
    conn.query(sql, 
        [params.plead,], 
        function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            res.send(JSON.stringify(result));
        }
        res.end(JSON.stringify(result));
    })
});


//修改


//删除
router.post('/del', (req, res) => {
    var sql = $sql.user.del;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);
    conn.query(sql, 
        [params.pid,], 
        function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            jsonWrite(res, result);
            for(var i = 0; i < result.length; i++){
                console.log("请求回来！",result[i])
                console.log("请求结果！",typeof result[i],result[i].proid);
                if (result[i].proid == params.id) {
                    res.send("success");
                }
            }
            res.end('is over');
        }
    })
});

//我的项目
router.post('/tmain', (req, res) => {
    var sql = $sql.user.tmain;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);
    conn.query(sql, 
        [params.plead,], 
        function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            res.send(JSON.stringify(result));
        }
        res.end(JSON.stringify(result));
    })
});


//用户信息
router.post('/myinfo', (req, res) => {
    var sql = $sql.user.myinfo;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);
    conn.query(sql, 
        [params.myid, params.myname, params.mytel, params.myem, params.mymay,], 
        function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            jsonWrite(res, result);
            for(var i = 0; i < result.length; i++){
                console.log("请求回来！",result[i])
                console.log("请求结果！",typeof result[i],result[i].username);
                if (result[i].username == params.myid) {
                    res.send("success");
                }
            }
            res.end('is over');
        }
    })
});

router.post('/nowinfo', (req, res) => {
    var sql = $sql.user.nowinfo;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);
    conn.query(sql, 
        [params.username,], 
        function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            res.send(JSON.stringify(result));
        }
        res.end(JSON.stringify(result));
    })
});

module.exports = router;
