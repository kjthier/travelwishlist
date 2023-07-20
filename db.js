import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'countries',
    password: '',
    port: 5432,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    max: 1
})


