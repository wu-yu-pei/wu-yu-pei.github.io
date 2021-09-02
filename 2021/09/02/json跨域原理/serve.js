const express = require('express')
const app = express()

app.get('/text', (req, res) => {
    const data = {
        name: req.query.name,
        age: req.query.age
    }
    const result = 'fn(' + JSON.stringify(data) + ')'
    res.send(result)
})

app.listen('8000', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('http://127.0.0.1:8000');
    }
})