const express = require('express');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req,res)=>{
    res.send('OK');
});

require('./controller/authController')(app);
require('./controller/projectController')(app);

app.listen(PORT);
