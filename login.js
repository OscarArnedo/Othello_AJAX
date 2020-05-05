var emmagatzematge = {
    taula: document.getElementById('taula'),
    desar: function() {
        localStorage.setItem("nom",document.getElementById('nom').value);
        //emmagatzematge.esborrarTaula();
        emmagatzematge.mostrar();
    },
    mostrar: function() {
        for (var i = 0; i < localStorage.length; i++) {
            var fila = taula.insertRow(0);
            fila.insertCell(0).innerHTML = localStorage.key(i);
            fila.insertCell(1).innerHTML = localStorage.getItem(localStorage.key(i));
        };
    },
    esborrarTaula: function() {
        while (taula.rows.length > 0) {
            taula.deleteRow(0);
        }
    },
    esborrarItem: function() {
        localStorage.removeItem(document.getElementById('nom').value);
        emmagatzematge.esborrarTaula();
        emmagatzematge.mostrar();
    }
}
function redirigir(){
    window.location="http://localhost:8888/inici";
}
document.getElementById('submit').addEventListener('click', emmagatzematge.desar, false);
document.getElementById('submit').addEventListener('click', redirigir, false);
emmagatzematge.mostrar();