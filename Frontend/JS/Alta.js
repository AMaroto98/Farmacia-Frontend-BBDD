function irGestion() {

    // Obtengo el valor del sessionStorage
    var codigoSesion = sessionStorage.getItem("session");

    // Verifica si se ha guardado la información
    if (codigoSesion != 0) {

        // Redirigir a la página de Gestión
        window.location.href = "../pages/Gestion.html";

    } else {

        window.location.href = "../Login.html";;
    }
}

function getPatients() {

    var http = new XMLHttpRequest();

    http.open("GET", "http://localhost:3000/Farmacia/ServPatients", true);
    http.send();

    http.onreadystatechange = function(){

        if (http.readyState == 4 && http.status == 200) {

            let listaPacientes = http.responseText;
            
            document.getElementById("listaPacientes").innerHTML = listaPacientes;

        }
    }
}

function getMedicines() {

    var http = new XMLHttpRequest();

    http.open("GET", "http://localhost:3000/Farmacia/ServMedicines", true);
    http.send();

    http.onreadystatechange = function(){

        if (http.readyState == 4 && http.status == 200) {

            let listaMedicamentos = http.responseText;
            
            document.getElementById("listaMedicamentos").innerHTML = listaMedicamentos;

        }
    }
}

function enviar() {

    var http = new XMLHttpRequest();

    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    let idXip = document.getElementById("idChip").value;
    let mailPaciente = document.getElementById("listaPacientes").value;
    let idMedicamento = document.getElementById("listaMedicamentos").value;
    let fecha = document.getElementById("fechaLimite").value;


    http.open("POST", "http://localhost:3000/Farmacia/Release", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send("mail="+mail+"&session="+session+"&idXip="+idXip+"&mailPaciente="+mailPaciente+"&idMedicamento="+idMedicamento+"&fecha="+fecha);
}