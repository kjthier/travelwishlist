const express = require('express');
const router = express.Router();
const pool = require("./db")
const getCountry = (req, res) => {
    res.send('hello there' )
    // pool.query('SELECT * FROM countries ', (err, result) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     res.status(200).json(result.rows);
        
    // })
}
router.get('/api/countries', getCountry);

module.exports = router