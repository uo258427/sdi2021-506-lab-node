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
        let nombre = req.body.nombre;
        let grupo = req.body.grupo;
        let rol = req.body.rol;

        if(typeof (req.body.nombre) == "undefined")
            nombre = "El nombre no";
        if(typeof  (req.body.grupo) == "undefined")
            grupo = "El grupo no";
        if(typeof (req.body.rol) == "undefined")
            rol = "El rol no";
        res.send("Autor agregado:" + nombre + "<br>"
            + " grupo :" + grupo + "<br>"
            + " rol: " + rol);
    });
};