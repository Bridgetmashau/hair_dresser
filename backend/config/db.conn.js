const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'hair_dresser',
    password: 'Letsdoit!', 
    port: 5432,
})


module.exports =  pool