function enviar() {

    var http = new XMLHttpRequest();

    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;

    // True indica que es asincrono
    http.open("GET", "http://localhost:3000/Farmacia/Login?mail="+mail+"&pass="+pass, true);
    http.send();

    http.onreadystatechange = function(){

        if (http.readyState == 4 && http.status == 200) {

            // Java nos devuelve un paquete en el que está el código de sesión
            // Aquí se guarda la respuesta que hacemos con el getWritter de Java
            let session = http.responseText;
            
            // Si la sesión es difente de 0 todo ha ido bien
            if (session != "0") {

                window.sessionStorage.setItem("mail", mail);
                window.sessionStorage.setItem("session", session);
                document.getElementById("resultat").innerHTML = "Login correcto";

                irGestion();

            } else {

                document.getElementById("resultat").innerHTML = "Login incorrecto";
            }


        }
    }
}

function irGestion() {

    // Obtengo el valor del sessionStorage
    var codigoSesion = sessionStorage.getItem("session");

    // Verifica si se ha guardado la información
    if (codigoSesion != 0) {

        // Redirigir a la página de Gestión
        window.location.href = "../Frontend/pages/Gestion.html";

    }
}

// Adicional que he añadido yo porque el boton reset fuera del Form no funciona
function resetearCampos() {
    document.getElementById("mail").value = "";
    document.getElementById("pass").value = "";
}