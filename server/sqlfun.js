// sql语句
var sqlMap = {
    // 用户
    user: {
        login: 'SELECT userpsw, userroot FROM account WHERE username = ?;', //登录
        register: 'insert into account(username, userpsw, userroot) values ( ?, ?, ?);',  //注册
        search: 'SELECT * FROM project WHERE proname like ?;', //搜索
        add: 'insert into project(proid, prodep, proname, leader, prosta, lday) values (?, ?, ?, ?, ?, ?);',  //添加项目
        del: 'DELETE FROM project WHERE proid = ?;', //删除项目
        tmain: 'SELECT proid, proname, prodep, prosta, lday FROM project WHERE leader = ?;', //我的项目
        smain: 'SELECT proid, proname, prodep, prosta, leader FROM project WHERE prostu1 = ? OR prostu2 = ? OR prostu3 = ?;',
        myinfo: 'insert into member(username, myname, tel, email, major) values (?, ?, ?, ?, ?);' , //添加我的信息
        seekinfo: 'SELECT member.username, myname, tel, email, account.userroot FROM member, account WHERE account.username = member.username AND member.username = ?', //查询联系方式
        change: 'UPDATE project SET prosta = ? WHERE proid = ? ',  //修改项目进度

    }
}

module.exports = sqlMap;