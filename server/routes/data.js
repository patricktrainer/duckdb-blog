const express = require('express');
const router = express.Router();
const db = require('../db');  // the DuckDB connection

router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM your_table');  // Your query here
        res.json(result);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

module.exports = router;
