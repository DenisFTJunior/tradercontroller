const express = require ("express")

const app = require('./app.js')

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Api running in ${PORT}...`)
});