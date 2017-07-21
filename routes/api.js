var express = require('express'),
	router = express.Router();


module.exports = function(db) {

	/* CRUD for User model */
	const crudDocente = require('mongoose-restful-crud')(db.Docente)

	router.get('/Docente', crudDocente.get)
	router.post('/Docente', crudDocente.post)
	router.get('/Docente/:id', crudDocente.getOne)
	router.put('/Docente/:id', crudDocente.put)
	router.delete('/Docente/:id', crudDocente.delete)

	return router;
}