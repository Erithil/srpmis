// sql语句
var sqlMap = {
    // 用户
    user: {
        login: 'SELECT userpsw, userroot FROM account WHERE username = ?;',
        register: 'insert into account(username, userpsw, userroot) values ( ?, ?, ?);'
    }
}

module.exports = sqlMap;