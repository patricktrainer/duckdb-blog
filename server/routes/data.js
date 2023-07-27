const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT count(*) FROM sample_data.hn.hacker_news');
        res.json(result);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

module.exports = router;
