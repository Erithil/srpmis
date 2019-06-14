// sql语句
var sqlMap = {
    // 用户
    user: {
        login: 'SELECT userpsw, userroot FROM account WHERE username = ?;',
        register: 'insert into account(username, userpsw, userroot) values ( ?, ?, ?);',  
        search: 'SELECT * FROM project WHERE proname like ?;',
        add: 'insert into project(proid, prodep, proname, leader, prosta, lday) values (?, ?, ?, ?, ?, ?);', 
        del: 'DELETE FROM project WHERE proid = ?;',
        tmain: 'SELECT proid, proname, prodep, prosta, lday FROM project WHERE leader = ?;',
        myinfo: 'insert into member(username, myname, tel, email, major) values (?, ?, ?, ?, ?);' ,
        nowinfo: 'SELECT * FROM member WHERE username = ?;'

    }
}

module.exports = sqlMap;