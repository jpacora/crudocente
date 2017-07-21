//QH: ö
var mongoose = require('mongoose'),
    config  = require('../config');

mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + config.mongodb.dbName, {
    useMongoClient: true
}, function(err) {
    if (err) throw err;
});

var DocenteSchema = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    DNI: String,
    Correo: String,
    Direccion: String,
    Estado: Number,
    Eliminado: {
        type: Boolean,
        default: false
    }
})


module.exports = {
	Docente: mongoose.model('Docente', DocenteSchema)
}