const express = require('express');
const cors = require('cors');
const dataRouter = require('./routes/data');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use('/data', dataRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
