//https://gf6861cce116dd6-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/game
// url: "http://localhost:8080/api/Games/all",
// ----
// ----  IMPLEMENTACIONES PAR  LAS CONSULTAS METODO GET
// ----
function consultarGames() {
    $.ajax({
        url: "https://gf6861cce116dd6-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            var misItems = respuesta.items;
            $("#miResultado").append("<td > Id del Juego ")
            $("#miResultado").append("<td > Desarrollador")
            $("#miResultado").append("<td > Edad Mínima  ")
            $("#miResultado ").append("<td > Categoria   ")
            $("#miResultado ").append("<td > Nombre      ")
            $("#miResultado ").append("<td > Descripción ")
                //
            for (i = 0; misItems.length; i++) {
                $("#miResultado").append("<tr>")

                $("#miResultado").append("<td>" + misItems[i].id + "</td>")
                $("#miResultado").append("<td>" + misItems[i].developer + "</td>")
                $("#miResultado").append("<td>" + misItems[i].minage + "</td>")
                $("#miResultado").append("<td>" + misItems[i].category_id + "</td>")
                $("#miResultado").append("<td>" + misItems[i].name + "</td>")
                $("#miResultado").append("<td>" + misItems[i].description + "</td>")

                $("#miResultado").append("</tr>")
            }
            console.log(respuesta);
            mostrarGames(respuesta);
        }
    });
}
//  
//   Para Categoria
//
function consultarCategorias() {
    $.ajax({
        url: "https://g91f80c6f2313d9-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/category/category",
        //url: "localhost:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            var misItems = respuesta.items;
            $("#miResultado").append("<td > Id Categoria ")
            $("#miResultado").append("<td > Nombre Categoria")
            $("#miResultado ").append("<td > Descripción ")
                //
            for (i = 0; misItems.length; i++) {
                $("#miResultado").append("<tr>")

                $("#miResultado").append("<td>" + misItems[i].id + "</td>")
                $("#miResultado").append("<td>" + misItems[i].name + "</td>")
                $("#miResultado").append("<td>" + misItems[i].description + "</td>")

                $("#miResultado").append("</tr>")
            }
            console.log(respuesta);
            mostrarGames(respuesta);
        }
    });
}
//  
//   Para Reserva
//
function consultarReserva() {
    $.ajax({
        // url: "https://gf6861cce116dd6-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games",
        url: "localhost:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            var misItems = respuesta.items;
            $("#miResultado").append("<td > Id Reserva ")
            $("#miResultado").append("<td > Fecha de Reserva")
            $("#miResultado").append("<td > Fecha de Devolución")
            $("#miResultado ").append("<td > Status de la Reserva")
                //
            for (i = 0; misItems.length; i++) {
                $("#miResultado").append("<tr>")

                $("#miResultado").append("<td>" + misItems[i].id + "</td>")
                $("#miResultado").append("<td>" + misItems[i].startDate + "</td>")
                $("#miResultado").append("<td>" + misItems[i].devolutionDate + "</td>")
                $("#miResultado").append("<td>" + misItems[i].status + "</td>")
                $("#miResultado").append("</tr>")
            }
            console.log(respuesta);
            mostrarGames(respuesta);
        }
    });
}


function mostrarGames(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").append(myTable);
}
//   Para Mosytrar Mensajes
//
function consultarMensajes() {
    $.ajax({
        // url: "https://gf6861cce116dd6-db202109231930.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games",
        url: "localhost:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            var misItems = respuesta.items;
            $("#miResultado").append("<td > Id Mensaje ")
            $("#miResultado").append("<td > Texto del Mensaje")

            //
            for (i = 0; misItems.length; i++) {
                $("#miResultado").append("<tr>")

                $("#miResultado").append("<td>" + misItems[i].id + "</td>")
                $("#miResultado").append("<td>" + misItems[i].messageText + "</td>")

                $("#miResultado").append("</tr>")
            }
            console.log(respuesta);
            mostrarGames(respuesta);
        }
    });
}
// ----
// ----  IMPLEMENTACIONES PAR  GUARDAR LOS DATOS  METODO POST 
// ----
function guardarGames() {
    /**Creamos  objeto */
    const datos_juego = {
            //id: 100,
            //developer: "CELULAR",
            //minage: 10,
            //category_id: 1,
            //name: "IPHONE",
            //
            id: $("#idGames").val(),
            developer: $("#desarrolladorGames").val(),
            year: $("#ageGames").val(),
            description: $("#nameGames").val(),
            //developer: $("#DescriptionGames").val(),
            //developer: $("#desarrolladorGames").val()
            //
        }
        /**let data = JSON.stringify(data_games)  */
    console.log(datos_juego);
    let datasend = JSON.stringify(datos_juego)

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/api/Game/save",
        //url: endpoint,
        data: datasend,
        dataType: "json",
        contentType: "application/json",
        complete: function(response) {
            console.log(response.status)
        },
        error: function(error) {
            console.log("Error al consumir Api Oracle Cloud")
        }

    });

}