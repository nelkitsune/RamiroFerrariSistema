function mostrarDatos() {
    var vnombre = document.getElementById("nombre").value;
    var vapellido = document.getElementById("apellido").value;
    var vnum = document.getElementById("ndni").value;
    var vnacimiento = document.getElementById("fecha_na").value;
    var vdomicilio = document.getElementById("domicilio").value;
    var vlocalidad = document.getElementById("localidad").value;
    
    var vbox_idioma1 = document.getElementById("idioma1").checked ? "Inglés" : "";
    var vbox_idioma2 = document.getElementById("idioma2").checked ? "Francés" : "";
    var vbox_idioma3 = document.getElementById("idioma3").checked ? "Español" : "";
    var vbox_idioma4 = document.getElementById("idioma4").checked ? "Chino" : "";

    var vrange_idioma1 = document.getElementById("barra_idioma1") . value;
    var vrange_idioma2 = document.getElementById("barra_idioma2") . value;
    var vrange_idioma3 = document.getElementById("barra_idioma3") . value;
    var vrange_idioma4 = document.getElementById("barra_idioma4") . value;

    document.write("<h3>Mostramos los datos</h3>");
    document.write("Apellido: " + vapellido + "<br/>");
    document.write("Nombre: " + vnombre + "<br/>");
    document.write("Número de documento: " + vnum + "<br/>");
    document.write("Fecha de nacimiento: " + vnacimiento + "<br/>");
    document.write("Domicilio: " + vdomicilio + "<br/>");
    document.write("Localidad: " + vlocalidad + "<br/>");
    document.write("Idiomas que conoces: " + vbox_idioma1 + ", " + vbox_idioma2 + ", " + vbox_idioma3 + ", " + vbox_idioma4 + "<br/>");
    document.write("tienes un " + vrange_idioma1 + "% de dominio en el ingles" + "<br/>")
    document.write("tienes un " + vrange_idioma2 + "% de dominio en el frances" + "<br/>")
    document.write("tienes un " + vrange_idioma3 + "% de dominio en el español" + "<br/>")
    document.write("tienes un " + vrange_idioma4 + "% de dominio en el chino" + "<br/>")
    document.write("<br/><strong>Gracias por tus datos</strong>");
}