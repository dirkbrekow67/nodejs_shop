const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const Parse = require('parse/node');

const errorController = require('./controllers/error');

const APP_ID = "TEvcqfS8FNapVkBw7D0DF9MjgBXJl6tc4weeWHli";

const JAVASCRIPT_ID = '6fOIeKdaErQmcnyum1XTRyf6LquauZgpAeAgsR3d';

Parse.initialize(APP_ID,JAVASCRIPT_ID);
Parse.serverURL = 'https://parseapi.back4app.com/'

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
