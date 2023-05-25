function logOut() {

    // Elimino todo lo almacenado en el sessionStorage
    sessionStorage.clear();
    // Vuelve a la página del Login
    window.location.href = "../Login.html";
}

function irAlta() {

    // Obtengo el valor del sessionStorage
    var codigoSesion = sessionStorage.getItem("session");

    // Verifica si se ha guardado la información
    if (codigoSesion != 0) {

        // Redirigir a la página de Gestión
        window.location.href = "../pages/Alta.html";;
    } else {

        window.location.href = "../Login.html";;
    }
}

function getTable() {

    var http = new XMLHttpRequest();

    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");

    http.open("GET", "http://localhost:3000/Farmacia/ServXips?mail="+mail+"&session="+session, true);
    http.send();


    http.onreadystatechange = function(){

        if (http.readyState == 4 && http.status == 200) {

            let tabla = http.responseText;
            
            document.getElementById("tabla").innerHTML = tabla;

        }
    }
}
