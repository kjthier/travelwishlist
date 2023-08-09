import pg from 'pg';

const { Pool } = pg;

// local postgres database configuration
// export const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'countries',
//     password: '12345',
//     port: 5432,
//     connectionTimeoutMillis: 5000,
//     idleTimeoutMillis: 30000,
//     max: 1
// })

// elephantsql database configuration
export const pool = new Pool({
    user: 'zjvxmwne',
    host: 'snuffleupagus.db.elephantsql.com',
    database: 'zjvxmwne',
    password: 'rwO3xRZmu3s_XZmspCTLTz14bJbqM1S_',
    port: 5432,
});

 


