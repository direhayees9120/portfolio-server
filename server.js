// import express from 'express'
const express = require('express');

// create express app
const app = express();
const port = 3030;


// define a routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.get("/bami", (req, res) => {
  res.sendFile(__dirname + "/bami.html");
});


// listening on port 3030
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});





