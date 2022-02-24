const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send('Hello UIT');
});

app.get('/UIT_LAB', (req, res) => {
    res.render('UIT_LAB');
})

app.get('/UIT_LAB_2', (req, res) => {
    res.render('UIT_LAB_2');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})