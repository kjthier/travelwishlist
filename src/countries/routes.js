import express from 'express'

import { getCountries, getCountryById, createCountry, deleteCountry, updateCountry } from './controllers.js'

const router = express.Router()

router.get('/', getCountries)
router.get('/:id', getCountryById)
router.post('/', createCountry)
router.delete('/:id', deleteCountry)
router.put('/:id', updateCountry)

export default router