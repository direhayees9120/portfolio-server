// import express from 'express'
const express = require('express');

// create express app
const app = express();
const port = 3030;

// listening on port 3030
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});