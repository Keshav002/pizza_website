const express = require('express'); //It will return a function
const app = express();  //It will give an object
const PORT = process.env.PORT || 3000; //If environment variables have port variable then it will take that otherwise it will take 3000
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const { E2BIG } = require('constants');

//assets
app.use(express.static('public')); //used to tell where is our assets eg. css
app.get('/', (req, res) => {
    res.render('home');
})

// set template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    
})
