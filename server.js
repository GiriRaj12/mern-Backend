import loginService from './services/loginService'
const express = require('express');
const port = 9000;
const app = express();
var login = new loginService();
app.route('/login')
    .get((req, res) => {
        login.checkUser("soemthing",'SOemth');
    });

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`)
    )