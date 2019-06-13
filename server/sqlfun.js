// sql语句
var sqlMap = {
    // 用户
    user: {
        login: 'SELECT userpsw, userroot FROM account WHERE username = ?;',
        register: 'insert into account(username, userpsw, userroot) values ( ?, ?, ?);',  
        search: 'SELECT * FROM project WHERE proname like %?%;',
        add: 'insert into project(proid, prodep, proname, leader, prosta, lday) values (?, ?, ?, ?, ?, ?);', 
        tmain: 'SELECT proid, prodep, proname, prosta, lday FROM project WHERE leader = ?;',
        myinfo: 'insert into member(username, myname, tel, email, major, grade) values (?, ?, ?, ?, ?, ?);'   
    }
}

module.exports = sqlMap;