import { pool } from '../../db.js'
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
    const { name, alpha2code, alpha3code } = req.body

    pool.query(`SELECT * FROM countries WHERE name='${name}'`, (error, results) => {
        if(error) throw error

        if(results.rows.length > 0) {
            res.status(400).send('Country already exists')
        } else {
            pool.query(createCountryQuery), [name, alpha2code, alpha3code], (error, results) => {
                if(error) throw error
                res.status(200).json('Country created successfully')
            }
        }
    })
}

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