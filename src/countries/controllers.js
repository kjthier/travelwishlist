// import { pool } from '../../db.js'
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'countries',
    password: '12345',
    port: 5432
})
import { getCountriesQuery, getCountryByIdQuery, createCountryQuery, deleteCountryQuery, updateCountryQuery } from './queries.js'

export const getCountries = (req, res) => {
    pool.query(getCountriesQuery, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
    // res.send('hello there' )
}

export const getCountryById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(getCountryByIdQuery, [id], (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}



export const createCountry = (req, res) => {
const name = `'${req.body.name}'`
  const alpha2code =`'${req.body.alpha2code}'`
  const alpha3code = `'${req.body.alpha3code}'`
  console.log(name ,  alpha2code, alpha3code)
  if (!name || name.trim() === '') {
    return res.status(400).send('Country name cannot be empty');
  }

  pool.query('SELECT * FROM countries WHERE name = $1', [name], (error, results) => {
    if (error) throw error;

    if (results.rows.length > 0) {
      return res.status(400).send('Country already exists');
    } else {
      pool.query(createCountryQuery, [name, alpha2code, alpha3code], (error, results) => {
        if (error) throw error;
        res.status(200).json('Country created successfully');
      });
    }
  });
};





  
   
   
        

export const deleteCountry = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(deleteCountryQuery, [id], (error, results) => {
        if(error) throw error
        res.status(200).json('Country was removed')
    })
}

export const updateCountry = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, alpha2code, alpha3code } = req.body

    pool.query(updateCountryQuery, [id, name, alpha2code, alpha3code], (error, results) => {
        if(error) throw error
        res.status(201).json('Country updated successfully')
    })
}