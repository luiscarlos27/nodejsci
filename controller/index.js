
var express = require('express');
var router = express.router();

var db = require('service/querys.js');

router.get('/api/routes',db.getAllRoutes);
router.get('/api/routes/:id',db.getRouteId);
router.post('/api/routes',db.createRoute);
router.put('/api/updateRoute/:id',db.updateRoute);
router.delete('/api/removeRoute/:id',db.removeRoute);


module.exports = router;