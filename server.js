const express = require('express');
const mysql = require('mysql2')

PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`App server listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('hello world')
});