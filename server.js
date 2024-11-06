// import express from 'express'
const express = require('express');

// create express app
const app = express();
const port = 3030;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/ephraim", (req, res) => {
    res.sendFile(__dirname + '/ephraim.html');
});

// listening on port 3030
app.listen(port, () => {
    console.log(`🚀🔥Server is running on port http://localhost:${port}`);
});