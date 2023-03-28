const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { json } = require('express');
const hbs = require('hbs');
const path = require('path');
const partialsPath = path.join(__dirname, './views/partials');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
hbs.registerPartials(partialsPath);

app.use('/patient', require('./routes/patient'));

app.get('/', (req, res) => {
    res.render('./homePage');
})

app.listen(PORT, () => {
    console.log('Server started at: ' + PORT);
})