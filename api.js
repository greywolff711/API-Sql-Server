const dboperations = require('./dboperations');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//middleware
router.use((request,response,next)=>{
    console.log('middleware');
    next();
 })

 router.route('/users').get((request,response)=>{
    dboperations.getOrders().then(result => {
       response.json(result[0]);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('USERS API is runnning at ' + port);