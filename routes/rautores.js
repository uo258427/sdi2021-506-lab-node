module.exports = function(app, swig) {
    app.get("/autores", function(req, res) {

        let autores = [ {
            "nombre" : "Sugar",
            "grupo" : "Los chichos",
            "rol" : "cantante"
        }, {
            "nombre" : "Sueño contigo",
            "grupo" : "Camela",
            "rol" : "teclista"
        }, {
            "nombre" : "Cuando zarpa el amor",
            "grupo" : "Camela",
            "rol" : "cantante"
        } ];

        let respuesta = swig.renderFile('views/autores.html', {
            representante : 'Autores' ,
            autores : autores
        });

        res.send(respuesta);
    });

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    });

    app.post("/autor", function(req, res) {
        res.send("Autor agregado:" + req.body.nombre + "<br>"
            + " grupo :" + req.body.grupo + "<br>"
            + " rol: " + req.body.rol);
    });
};