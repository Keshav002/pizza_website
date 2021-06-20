require('dotenv').config();

const express = require('express'); //It will return a function
const app = express();  //It will give an object
const PORT = process.env.PORT || 3000; //If environment variables have port variable then it will take that otherwise it will take 3000
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo');


//database connection
const url = 'mongodb://localhost/pizza';

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database connected...');    
}).catch(err => {
    console.log('Connection failed...');
});


//Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: MongoDbStore.create({
        client: connection.getClient()
    }),
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } //24 hrs
}))

app.use(flash());

//assets
app.use(express.static('public')); //used to tell where is our assets eg. css
app.use(express.json());

//Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
})

// set template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', 'ejs');


require('./routes/web')(app);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    
})
