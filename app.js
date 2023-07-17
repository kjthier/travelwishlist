const express = require('express')
const app = express()
const port = 3000
const pool = require('./db')
const  countries = require('./countries.json')

// const route = require('./route')

const getCountry = (req, res) => {
    // res.send('hello there' )
    pool.query('SELECT * FROM countries ', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.status(200).send(countries)
        
    })
}


app.get('/', (req, res) => {
    res.send('<h2> <a href="/api/countries">Countries</h2>')
})
app.get('/api/countries', getCountry)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// app.use('/api/countries', route);