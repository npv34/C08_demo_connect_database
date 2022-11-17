const mysql = require('mysql');


const connection = mysql.createConnection({
    user: 'admin',
    host: '127.0.0.1',
    password: '123456@Abc',
    database: 'app-backend'
})

connection.connect((err, res) => {
    if (err) {
        console.log('connect database error' + err.message);
        return;
    }
    console.log('connect database success')
})

let sql = `SELECT * FROM users`;

function querySQL(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, res) => {
            if (err) {
                reject(err.message);
                return
            }
            resolve(res)
        })
    })
}

async function main() {
    let users =  await querySQL(sql)
    console.log(users)
}

main().catch(err => console.log(err.message));
