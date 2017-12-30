
var promise = require('bluebird');

var options = {
	promiseLib : promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/routes';
var db = pgp(connectionString);

// add query functions
module.exports = {
	getAllRoutes : getAllRoutes/*,
	getRouteId : getRouteId,
	createRoute : createRoute,
	updateRoute : updateRoute,
	removeRoute : removeRoute*/
}

function getAllRoutes(req, res, next) {
  db.any('select * from routes')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL routes'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
