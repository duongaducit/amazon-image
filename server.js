const cors = require('cors');
let express = require('express');
//setup express app 
const request = require('request');
let app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
let http = require('https');
const productRouter = require('./router.product');
const { head } = require('./router.product');

var whitelist = [];
var corsOptions = {
    origin: function (origin, callback) {
        callback(null, true)
    }
}
app.use(cors(corsOptions));
//basic route for homepage
app.get('/', (req, res) => {
    res.json('welcome to express app');
});
app.post('/', (req, res) => {
    res.json('test post');
});
app.use('/product', productRouter);


const port = process.env.PORT || 3000
const server = app.listen(port, (err) => {
    if (err)
        throw err;
});


