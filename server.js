const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Blood-Bank-App"
    })
})

const port = 8080;

app.listen(port, () => {
    console.log('App is listening');
})