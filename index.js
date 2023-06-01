const express = require('express');

const app = express();

app.get('/initiate', require('./lib/initiate'));

app.get('/refresh', require('./lib/refresh'));

app.get('/oauth/callback', require('./lib/callback'));

app.listen(3000, () => {
    console.log("App Listening on 3000 !");
});
