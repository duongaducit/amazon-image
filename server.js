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

var whitelist = ['http://localhost:4200', 'http://34.84.149.232', 'http://listing.supportseller.com', 'https://listing.supportseller.com'];
var corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));
//basic route for homepage
app.get('/', (req, res) => {
    res.json('welcome to express app');
});

app.use('/product', productRouter);


const port = process.env.PORT || 3000;
const server = app.listen(port, (err) => {
    if (err)
        throw err;
});
server.timeout = 60000;


