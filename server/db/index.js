const duckdb = require('duckdb');
const db = new duckdb.Database('md:');


module.exports = db;
