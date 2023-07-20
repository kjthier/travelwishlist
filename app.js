import express from 'express'
import dotenv from 'dotenv'
import countriesRoutes from './src/countries/routes.js'

dotenv.config();

const app = express()
const port = process.env.port || 3001

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('<h2> <a href="/api/countries">Countries</h2>')
})

app.use('/api/countries', countriesRoutes)


