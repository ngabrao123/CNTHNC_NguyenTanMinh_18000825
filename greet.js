const express = require('express');
module.exports = function(options = {}) { 
const router = express.Router();

// Get controller
const {service} = options;
router.get('/greet', (req, res, next) => {GoalKicker.com – Node.js Notes for Professionals 33
res.end(
service.createGreeting(req.query.name || 'Stranger')
);
});
return router;
};