export const getCountries = "SELECT * FROM countries"
export const getCountrybyIdQuery = "SELECT * FROM countries WHERE id = $1"
export const createCountryQuery = "INSERT INTO countries (name, alpha2code, alpha3code) VALUES ($2, $3, $4)" // id = 1?
export const deleteCountryQuery = "DELETE FROM countries WHERE id = $1"
export const updateCountryQuery = "UPDATE countries SET name = $2, alpha2code = $3, alpha3code = $4 WHERE id = $1"