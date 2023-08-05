export const getCountriesQuery = "SELECT * FROM countries"
export const getCountryByIdQuery = "SELECT * FROM countries WHERE id = $1"
export const createCountryQuery = "INSERT INTO countries (name, alpha2code, alpha3code) VALUES ($1, $2, $3)";
export const deleteCountryQuery = "DELETE FROM countries WHERE id = $1"
export const updateCountryQuery = "UPDATE countries SET name = $2, alpha2code = $3, alpha3code = $4 WHERE id = $1"