import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'countries',
    password: '12345',
    port: 5432
})
 
// pool.query('SELECT * FROM countries', (error, results) => {
//     if(error) throw error
//     console.log(results.rows)

// })

