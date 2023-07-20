import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'countries',
    password: '12345',
    port: 5432
})

// Test the connection
pool.query('SELECT * FROM countries', (err, res) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database at:', res.rows[0].now);
    }
  });

