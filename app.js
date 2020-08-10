const express = require('express')
const app = express();

//routing

app.get('/', function(req, res) {

    res.send('hello world')
})

app.get('/alien', function(req, res) {
        const id = req.query.id
        res.send('welcome back alien ' + id)

    })
    //portfetch
app.listen(9000, function(req, res) {
    console.log('Running..')
});

app.get('/alien/:id', function(req, res) {
    const id = req.params.id
    res.send('hey Amit ' + id)
})