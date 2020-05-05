var xhr;
function inici() {

    var p = [];
    var pp = []
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'pasarArray', true);
    xhr.onload = function (e) {
        if (this.status == 200) {
            var posOthello = JSON.parse(this.response);
            for (i = 0; i < posOthello.length; i++) {
                if (posOthello[i].color == "2") {
                    p.push(posOthello[i].id);
                    var xhr2 = new XMLHttpRequest();
                    xhr2.open('GET', 'imagenFicha2', true);
                    xhr2.responseType = 'arraybuffer';

                    xhr2.onload = function (e) {

                        if (this.status == 200) {

                            var uInt8Array = new Uint8Array(this.response);
                            var z = uInt8Array.length;
                            var binaryString = new Array(z);

                            while (z--) {
                                binaryString[z] = String.fromCharCode(uInt8Array[z]);
                            }
                            var data = binaryString.join('');
                            var base64 = window.btoa(data);
                            for (var j = 0; j < p.length; j++) {
                                document.getElementById(p[j]).src = "data:image/png;base64," + base64;
                                console.log(p);
                            }


                        }
                    }; xhr2.send()

                }
                else if (posOthello[i].color == "1") {
                    pp.push(posOthello[i].id);
                    var xhr1 = new XMLHttpRequest();
                    xhr1.open('GET', 'imagenFicha1', true);
                    xhr1.responseType = 'arraybuffer';

                    xhr1.onload = function (e) {

                        if (this.status == 200) {

                            var uInt8Array = new Uint8Array(this.response);
                            var z = uInt8Array.length;
                            var binaryString = new Array(z);

                            while (z--) {
                                binaryString[z] = String.fromCharCode(uInt8Array[z]);
                            }
                            var data = binaryString.join('');
                            var base64 = window.btoa(data);
                            for (var j = 0; j < pp.length; j++) {
                                document.getElementById(pp[j]).src = "data:image/png;base64," + base64;
                                console.log(pp);
                            }


                        }
                    }; xhr1.send()

                };

            }
        }
    }
    xhr.send();
}


window.addEventListener("load", inici, true);
setInterval(inici, 3000);


function passarPosicion() {
    var xhr = new XMLHttpRequest();
    $(function () {
        $('img').click(function () {
            var posicionJugador = $(this).attr('id');
            var jugador = localStorage.getItem("nom");
            xhr.open("GET", "jugadaPosicion?posicionJugador=" + posicionJugador + "&jugador=" + jugador, true);
            xhr.send();

        });
    });
}

function obtenerNombre(){
    var xhr = new XMLHttpRequest();
    var jugador = localStorage.getItem("nom");
    console.log(jugador);
    console.log('dentro de obtnerNombre');
    //aqui has de cambiar jugadores y jugador que jugadore es el pathname y jugador es la varaiable
    xhr.open("GET", "jugadores?jugador=" + jugador, true);
    xhr.send();
}


function salirTablero(){
    var xhr = new XMLHttpRequest();

    window.location.href = "http://localhost:8888/"
    localStorage.clear();
    xhr.open("GET", "volverInicio", true);
    xhr.send();
}

function puntosBlancas(){
    var xhr = new XMLHttpRequest();

    //var puntos = localStorage.getItem("blancas");

    xhr.open("GET", "mostrarBlancas",true);
    xhr.send();
}
function puntosNegras(){
    var xhr = new XMLHttpRequest();

    //var puntos = localStorage.getItem("blancas");

    document.getElementById("blancas").value = xhr.open("GET", "mostrarBlancas",true);
    xhr.send();
}

window.addEventListener("load", passarPosicion, true);
window.addEventListener("load", obtenerNombre, true);
document.getElementById('perdre').addEventListener('click', mongo, false);
document.getElementById('salir').addEventListener('click', salirTablero, false);
window.addEventListener("load", mongo, true);
window.addEventListener("load", puntosBlancas, true);
//window.addEventListener("load", puntosNegras, true);

