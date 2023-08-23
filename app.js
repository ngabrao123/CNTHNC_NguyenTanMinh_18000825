const express = require('express');
const greetMiddleware = require('./greet.js');
express()
.use('/api/v1/', greetMiddleware({ greeting:'nguyen tan minh' }))
.listen(8050);