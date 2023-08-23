const express = require('express');
const app = express();

app.get('/someUri', function (req, res, next) {})

// GET myPath
app.get('/myPath', function (req, res, next) {})

// POST myPath
app.post('/myPath', function (req, res, next) {})

// PUT myPath
app.put('/myPath', function (req, res, next) {})

// DELETE myPath
app.delete('/myPath', function (req, res, next) {})

app.all('/myPath', function (req, res, next) {})

app.route('/myPath')
.get(function (req, res, next) {})
.post(function (req, res, next) {})
.put(function (req, res, next) {})

// other.js
exports.doSomething = function(req, res, next) {/*nguyen tan minh*/};
const other = require('./other.js');
app.get('/someUri', myFunction, other.doSomething);