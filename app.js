import express from 'express'
import dotenv from 'dotenv'
import countriesRoutes from './src/countries/routes.js'

dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('<h2> <a href="/api/countries">Countries</h2>')
})

app.use('/api/countries', countriesRoutes)



// const getCountry = (req, res) => {
//     // res.send('hello there' )
//     pool.query('SELECT * FROM countries ', (err, result) => {
//         if (err) {
//             console.log(err)
//         }
//         res.status(200).send(countries)
//     })
// }

