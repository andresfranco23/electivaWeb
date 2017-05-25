var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto'
});

conexion.connect(function (error) {
    if (error)
        console.log('Problemas de conexion con mysql');
    else
        console.log('conexion establecida!');
});


module.exports = conexion;
