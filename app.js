import express from 'express'
import dotenv from 'dotenv'
import countriesRoutes from './src/countries/routes.js'

dotenv.config();

const app = express()
const host = 3001

app.use(express.json())

app.listen(host, () => {
    console.log(`Example app listening on port ${host}`)
})

app.get('/', (req, res) => {
    res.send('<h2> <a href="/api/countries">Countries</h2>')
})


app.use('/api/countries', countriesRoutes)





