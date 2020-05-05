var http = require("http");
var url = require("url");
var fs = require('fs');
var colorFichaTurno = 0;
var jugador1 = "";
var jugador2 = ""; 

var tablero =
    [
        { id: "a1", color: "0", posicion: "esquinaAI" }, { id: "a2", color: "0", posicion: "arriba" }, { id: "a3", color: "0", posicion: "arriba" }, { id: "a4", color: "0", posicion: "arriba" }, { id: "a5", color: "0", posicion: "arriba" }, { id: "a6", color: "0", posicion: "arriba" }, { id: "a7", color: "0", posicion: "arriba" }, { id: "a8", color: "0", posicion: "esquinaAD" },
        { id: "b1", color: "0", posicion: "lateralI" }, { id: "b2", color: "0", posicion: "centro" }, { id: "b3", color: "0", posicion: "centro" }, { id: "b4", color: "0", posicion: "centro" }, { id: "b5", color: "0", posicion: "centro" }, { id: "b6", color: "0", posicion: "centro" }, { id: "b7", color: "0", posicion: "centro" }, { id: "b8", color: "0", posicion: "lateralD"},
        { id: "c1", color: "0", posicion: "lateralI" }, { id: "c2", color: "0", posicion: "centro" }, { id: "c3", color: "0", posicion: "centro" }, { id: "c4", color: "0", posicion: "centro" }, { id: "c5", color: "0", posicion: "centro" }, { id: "c6", color: "0", posicion: "centro" }, { id: "c7", color: "0", posicion: "centro" }, { id: "c8", color: "0", posicion: "lateralD" },
        { id: "d1", color: "0", posicion: "lateralI" }, { id: "d2", color: "0", posicion: "centro" }, { id: "d3", color: "0", posicion: "centro" }, { id: "d4", color: "1", posicion: "centro" }, { id: "d5", color: "2", posicion: "centro" }, { id: "d6", color: "0", posicion: "centro" }, { id: "d7", color: "0", posicion: "centro" }, { id: "d8", color: "0", posicion: "lateralD" },
        { id: "e1", color: "0", posicion: "lateralI" }, { id: "e2", color: "0", posicion: "centro" }, { id: "e3", color: "0", posicion: "centro" }, { id: "e4", color: "2", posicion: "centro" }, { id: "e5", color: "1", posicion: "centro" }, { id: "e6", color: "0", posicion: "centro" }, { id: "e7", color: "0", posicion: "centro" }, { id: "e8", color: "0", posicion: "lateralD" },
        { id: "f1", color: "0", posicion: "lateralI" }, { id: "f2", color: "0", posicion: "centro" }, { id: "f3", color: "0", posicion: "centro" }, { id: "f4", color: "0", posicion: "centro" }, { id: "f5", color: "0", posicion: "centro" }, { id: "f6", color: "0", posicion: "centro" }, { id: "f7", color: "0", posicion: "centro" }, { id: "f8", color: "0", posicion: "lateralD" },
        { id: "g1", color: "0", posicion: "lateralI" }, { id: "g2", color: "0", posicion: "centro" }, { id: "g3", color: "0", posicion: "centro" }, { id: "g4", color: "0", posicion: "centro" }, { id: "g5", color: "0", posicion: "centro" }, { id: "g6", color: "0", posicion: "centro" }, { id: "g7", color: "0", posicion: "centro" }, { id: "g8", color: "0", posicion: "lateralD" },
        { id: "h1", color: "0", posicion: "esquinaBI" }, { id: "h2", color: "0", posicion: "abajo" }, { id: "h3", color: "0", posicion: "abajo" }, { id: "h4", color: "0", posicion: "abajo" }, { id: "h5", color: "0", posicion: "abajo" }, { id: "h6", color: "0", posicion: "abajo" }, { id: "h7", color: "0", posicion: "abajo" }, { id: "h8", color: "0", posicion: "esquinaBD" },

    ];
    class Jugador {
        constructor(turnoJ) {
            this.turnoJ = turnoJ;
            this.nombre = '';
    
        }
        setNombre(nombre) {
            this.nombre = nombre;
        }  

        comprobarDerecha(posicionFicha) {
            if (tablero[i + 1].color == "2") {
                var recorrido = 1;
                this.ficha1(recorrido,posicionFicha);
            }
            else if (tablero[i + 1].color == "1") {
                var recorrido = 1;
                this.ficha2(recorrido,posicionFicha);
            }
        }

        comprobarDerecha(posicionFicha) {
            if (tablero[i + 1].color == "2") {
                var recorrido = 1;
                this.ficha1(recorrido,posicionFicha);
            }
            else if (tablero[i + 1].color == "1") {
                var recorrido = 1;
                this.ficha2(recorrido,posicionFicha);
            }
        }

         comprobarAbajoIzquierda(posicionFicha) {
            if (tablero[i + 7].color == "2") {
                var recorrido = 7;
                this.ficha1(recorrido,posicionFicha);
            } else if (tablero[i + 7].color == "1") {
                var recorrido = 7;
                this.ficha2(recorrido,posicionFicha);
            }
        }
       
        comprobarAbajo(posicionFicha) {
            if (tablero[i + 8].color == "2") {
                var recorrido = 8;
                this.ficha1(recorrido,posicionFicha);
            } else if (tablero[i + 8].color == "1") {
                var recorrido = 8;
                this.ficha2(recorrido,posicionFicha);
            }
        }
        
        comprobarAbajoDerecha(posicionFicha) {
            if (tablero[i + 9].color == "2") {
                var recorrido = 9;
                this.ficha1(recorrido,posicionFicha);
            } else if ((tablero[i + 9].color == "1")) {
                var recorrido = 9;
                this.ficha2(recorrido,posicionFicha);
            }
        }
        
        comprobarIzquierda(posicionFicha) {
            if (tablero[i - 1].color == "2") {
                var recorrido = -1;
                this.ficha1(recorrido,posicionFicha);
            } else if (tablero[i - 1].color == "1") {
                var recorrido = -1;
                this.ficha2(recorrido,posicionFicha);
            }
        }

        comprobarArribaDerecha(posicionFicha) {
            if (tablero[i - 7].color == "2") {
                var recorrido = -7;
                this.ficha1(recorrido,posicionFicha);
            } else if (tablero[i - 7].color == "1") {
                var recorrido = -7;
                this.ficha2(recorrido,posicionFicha);
            }
        }

        comprobarArriba(posicionFicha) {
            if (tablero[i - 8].color == "2") {
                var recorrido = -8;
                this.ficha1(recorrido,posicionFicha);
            } else if (tablero[i - 8].color == "1") {
                var recorrido = -8;
                this.ficha2(recorrido,posicionFicha);
            }
        }

        comprobarArribaIzquierda(posicionFicha) {
            if (tablero[i - 9].color == "2") {
                var recorrido = -9;
                this.ficha1(recorrido,posicionFicha);
            } else if (tablero[i - 9].color == "1") {
                var recorrido = -9;
                this.ficha2(recorrido,posicionFicha);
            }
        }
        
        aPosiciones(posicionFicha) {
            // -------ESQUINAS ARRIBA--------
           
            if (posicionFicha == "esquinaAI") {
                this.comprobarDerecha(posicionFicha);
                this.comprobarAbajo(posicionFicha);
                this.comprobarAbajoDerecha(posicionFicha);   
            }
            if (posicionFicha == "esquinaAD") {
               this.comprobarIzquierda(posicionFicha);
               this.comprobarAbajoIzquierda(posicionFicha);
               this.comprobarAbajo(posicionFicha);
            }
            // -------ESQUINAS ABAJO--------
            if (posicionFicha == "esquinaBI") {
                this.comprobarIzquierda(posicionFicha);
                this.comprobarArriba(posicionFicha);
                this.comprobarArribaIzquierda(posicionFicha);
            }
            if (posicionFicha == "esquinaBD") {
                this.comprobarIzquierda(posicionFicha);
                this.comprobarArriba(posicionFicha);
                this.comprobarArribaDerecha(posicionFicha);
            }
            // -------LATERALES--------
            if (posicionFicha == "lateralI") {
                this.comprobarDerecha(posicionFicha);
                this.comprobarAbajo(posicionFicha);
                this.comprobarAbajoDerecha(posicionFicha);
                this.comprobarArribaDerecha(posicionFicha);
                this.comprobarArriba(posicionFicha);
            }
            if (posicionFicha == "lateralD") {
                this.comprobarIzquierda(posicionFicha);
                this.comprobarArribaIzquierda(posicionFicha);
                this.comprobarArriba(posicionFicha);
                this.comprobarAbajo(posicionFicha);
                this.comprobarAbajoIzquierda(posicionFicha);
            }
            // -------Centro--------
            if (posicionFicha == "centro") {
                this.comprobarIzquierda(posicionFicha);
                this.comprobarDerecha(posicionFicha);
                this.comprobarArribaIzquierda(posicionFicha);
                this.comprobarAbajoDerecha(posicionFicha);
                this.comprobarArriba(posicionFicha);
                this.comprobarAbajo(posicionFicha);
                this.comprobarArribaDerecha(posicionFicha);
                this.comprobarAbajoIzquierda(posicionFicha);
            }
            if (posicionFicha == "arriba") {
                this.comprobarDerecha(posicionFicha);
                this.comprobarIzquierda(posicionFicha);
                this.comprobarAbajo(posicionFicha);
                this.comprobarAbajoDerecha(posicionFicha);
                this.comprobarAbajoIzquierda(posicionFicha);
            }
            if (posicionFicha == "abajo") {
                this.comprobarDerecha(posicionFicha);
                this.comprobarIzquierda(posicionFicha);
                this.comprobarArriba(posicionFicha);
                this.comprobarArribaIzquierda(posicionFicha);
                this.comprobarArribaDerecha(posicionFicha);

            }
        }

        ficha1(recorrido,posicionFicha) {
            var aFicha1 = [];
            var recorridoTotalFicha1 = recorrido;

            while (tablero[i + recorridoTotalFicha1].color == "2") {
                
                this.exclusionPosicionesTablero(recorridoTotalFicha1,posicionFicha);
                aFicha1.push(i + recorridoTotalFicha1);//guardamos en el array el color de la fichita 
                recorridoTotalFicha1 = recorridoTotalFicha1 + recorrido;

            }
            if (tablero[i + recorridoTotalFicha1].color == "1") {
                tablero[i].color = "1";
                colorFichaTurno = 1;

                for (var x = 0; x < aFicha1.length; x++) {
                    tablero[aFicha1[x]].color = "1"; // inserto las posiciones que se han recorrido en el tablero para psarlo a ficha1
                }
            }

        }
   
        ficha2(recorrido,posicionFicha) {
            var aFichas = [];
            var recorridoTotal = recorrido;
            while (tablero[i + (recorridoTotal)].color == "1") {
                
                this.exclusionPosicionesTablero(recorridoTotal,posicionFicha);
                aFichas.push(i + recorridoTotal);//guardamos en el array el color de la fichita 
                recorridoTotal = recorridoTotal + recorrido;

            }
            if (tablero[i + (recorridoTotal)].color == "2") {
                tablero[i].color = "2";
                colorFichaTurno = 0;
                for (var x = 0; x < aFichas.length; x++) {
                    tablero[aFichas[x]].color = "2"; // inserto las posiciones que se han recorrido en el tablero para psarlo a ficha1
                }
            }
        }

       exclusionPosicionesTablero (recorrido,posicionFicha){
           console.log("llego al final exclusion ");
            var recorridoTotal = recorrido;
             if (recorridoTotal == recorrido){
                 if (posicionFicha == "esquinaAI" ){
                     if (recorridoTotal == -1 || recorridoTotal == -8 || recorridoTotal == -9 || recorridoTotal == -7){
                         return;
                     }
                 }
                 
                 if (posicionFicha == "esquinaAD" ){
                     
                     if (recorridoTotal == 1 || recorridoTotal == -8 || recorridoTotal == -7 || recorridoTotal == -9){
                         return;
                     }
                 }
                 if (posicionFicha == "esquinaBI" ){
                     
                     if (recorridoTotal == -1 || recorridoTotal == 8 || recorridoTotal == 9 || recorridoTotal == 7 ){
                         return;
                     }
                 }
                 if (posicionFicha == "esquinaBD" ){
                     
                     if (recorridoTotal == 1 || recorridoTotal == 8 || recorridoTotal == 7 || recorridoTotal == 9){
                         return;
                     }
                 }
                 if (posicionFicha == "lateralI" ){
                     
                     if (recorridoTotal == -1 || recorridoTotal == -9 || recorridoTotal == 7  ){
                         return;
                     }
                 }
                 if (posicionFicha == "lateralD" ){
             
                     if (recorridoTotal == 1 || recorridoTotal == 9 || recorridoTotal == -7  ){
                         return;
                     }
                 }
                 if (posicionFicha == "arriba" ){
             
                     if (recorridoTotal == -7 || recorridoTotal == -9 || recorridoTotal == -8  ){
                         return;
                     }
                 }
                 if (posicionFicha == "abajo" ){
                     
                     if (recorridoTotal == 8 || recorridoTotal == 9 || recorridoTotal == 7  ){
                         return;
                     }
                 }  
             }

         }

    }

    class Pardida {

        constructor(){
            this.puntosj1 = 0;
            this.puntosj2 = 0;
            this.ganador = "";
        }
    
        getPuntos1(){
            return this.puntosj1;
        }
        setPuntos1(puntos){
            this.puntosj1 = puntos;
        }
        getPuntos2(){
            return this.puntosj2;
        }
        setPuntos2(puntos){
            this.puntosj2 = puntos;
        }
        getGanador(){
            return this.ganador;
        }
        setGanador(ganador){
            this.ganador = ganador;
        }
    
        puntuacion(tablero){
            var j1 = 0;
            var j2 = 0;
            for(var i=0;i<tablero.length;i++){
                if(tablero[i].color == "1"){
                    j1++;
                }else if(tablero[i].color == "2"){
                    j2++;
                }
            }
            this.setPuntos1(j1);
            this.setPuntos2(j2);

        }
    
        ganar(tablero){
            for(var i=0;i<tablero.length;i++){
                if(tablero[i].color == "0") return;
            }
            if(this.getPuntos1() > this.getPuntos2()){
                this.setGanador("Jugador 1");
            }
            else if (this.getPuntos1() < this.getPuntos2()){
                this.setGanador("Jugador 2");
            }
        }
    
    }


    var jugadorFicha1 = new Jugador(1);

    var jugadorFicha2 = new Jugador(0);

    var partida = new Pardida();

    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert'); //utilitzem assercions
    
    var ObjectId = require('mongodb').ObjectID;
    
    function mongoResultat() {
    
        var ruta = 'mongodb://localhost:27017/othello';
        MongoClient.connect(ruta, function (err, db) {
            assert.equal(null, err);
            console.log("Connexió correcta");
    
            afegirDocuments(db, err, function () { });
            db.close();
        });
    
        var afegirDocuments = function (db, err, callback) {
            db.collection('othello').insertOne({
             "jugador1": jugadorFicha2.nombre
            // "score" : nombrevariable
        
                
            });
            db.collection('othello').insertOne({
             "jugador2": jugadorFicha1.nombre
       
            });
            assert.equal(err, null);
            console.log("Afegit document a col·lecció usuaris");
            callback();
    
        };
    
    }

function iniciar() {

    function onRequest(request, response) {
        var sortida;
        var pathname = url.parse(request.url).pathname;
        var consulta = url.parse(request.url, true).query;

        console.log("Petició per a  " + pathname + " rebuda.");
        if (pathname == '/inici') {
            fs.readFile('./index.html', function (err, sortida) {
                response.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                response.write(sortida);
                response.end();
            });
        } 
        else if (pathname == '/ajax.js') {
            fs.readFile('./ajax.js', function (err, sortida) {
                response.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                response.write(sortida);
                response.end();
            });

        }
        else if (pathname == '/') {
            fs.readFile('./login.html', function (err, sortida) {
                response.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                response.write(sortida);
                response.end();
            })
        } else if (pathname == '/login.js') {
            fs.readFile('./login.js', function (err, sortida) {
                response.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                response.write(sortida);
                response.end();
            })
        }
        else if (pathname == '/desa') {
            var ruta = 'mongodb://localhost:27017/othello';

            MongoClient.connect(ruta, function (err, db) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                db.collection('usuarios').insertOne({
                    "nombre": consulta.nom,
                    "contraseña": consulta.contrasenya
                });
                assert.equal(err, null);
                console.log("Añadido a usuarios");
            });
            response.writeHead(301,
                { Location: '/inici' }
            );
            response.end();
        }
        else if (pathname == '/imagenFicha1') {
            fs.readFile('./ficha1.png', function (err, sortida) {
                response.writeHead(200, {
                    'Content-Type': 'image/png'
                });
                response.write(sortida);
                response.end();
            })
        } else if (pathname == '/imagenFicha2') {
            fs.readFile('./ficha2.png', function (err, sortida) {
                response.writeHead(200, {
                    'Content-Type': 'image/png'
                });
                response.write(sortida);
                response.end();
            });
        } else if (pathname == '/pasarArray') {
            response.writeHead(200, {
                "Content-Type": "aplication/JSON"
            });
            var posicionesStr = JSON.stringify(tablero);
            response.write(posicionesStr);
            response.end();;
 
        } 
        else if (pathname == '/restorearray') {
            response.writeHead(200, {
                "Content-Type": "text/plain; charset=utf-8"

            });
            tablero =
            [
                { id: "a1", color: "0", posicion: "esquinaAI" }, { id: "a2", color: "0", posicion: "arriba" }, { id: "a3", color: "0", posicion: "arriba" }, { id: "a4", color: "0", posicion: "arriba" }, { id: "a5", color: "0", posicion: "arriba" }, { id: "a6", color: "0", posicion: "arriba" }, { id: "a7", color: "0", posicion: "arriba" }, { id: "a8", color: "0", posicion: "esquinaAD" },
                { id: "b1", color: "0", posicion: "lateralI" }, { id: "b2", color: "0", posicion: "centro" }, { id: "b3", color: "0", posicion: "centro" }, { id: "b4", color: "0", posicion: "centro" }, { id: "b5", color: "0", posicion: "centro" }, { id: "b6", color: "0", posicion: "centro" }, { id: "b7", color: "0", posicion: "centro" }, { id: "b8", color: "0", posicion: "lateralD"},
                { id: "c1", color: "0", posicion: "lateralI" }, { id: "c2", color: "0", posicion: "centro" }, { id: "c3", color: "0", posicion: "centro" }, { id: "c4", color: "0", posicion: "centro" }, { id: "c5", color: "0", posicion: "centro" }, { id: "c6", color: "0", posicion: "centro" }, { id: "c7", color: "0", posicion: "centro" }, { id: "c8", color: "0", posicion: "lateralD" },
                { id: "d1", color: "0", posicion: "lateralI" }, { id: "d2", color: "0", posicion: "centro" }, { id: "d3", color: "0", posicion: "centro" }, { id: "d4", color: "1", posicion: "centro" }, { id: "d5", color: "2", posicion: "centro" }, { id: "d6", color: "0", posicion: "centro" }, { id: "d7", color: "0", posicion: "centro" }, { id: "d8", color: "0", posicion: "lateralD" },
                { id: "e1", color: "0", posicion: "lateralI" }, { id: "e2", color: "0", posicion: "centro" }, { id: "e3", color: "0", posicion: "centro" }, { id: "e4", color: "2", posicion: "centro" }, { id: "e5", color: "1", posicion: "centro" }, { id: "e6", color: "0", posicion: "centro" }, { id: "e7", color: "0", posicion: "centro" }, { id: "e8", color: "0", posicion: "lateralD" },
                { id: "f1", color: "0", posicion: "lateralI" }, { id: "f2", color: "0", posicion: "centro" }, { id: "f3", color: "0", posicion: "centro" }, { id: "f4", color: "0", posicion: "centro" }, { id: "f5", color: "0", posicion: "centro" }, { id: "f6", color: "0", posicion: "centro" }, { id: "f7", color: "0", posicion: "centro" }, { id: "f8", color: "0", posicion: "lateralD" },
                { id: "g1", color: "0", posicion: "lateralI" }, { id: "g2", color: "0", posicion: "centro" }, { id: "g3", color: "0", posicion: "centro" }, { id: "g4", color: "0", posicion: "centro" }, { id: "g5", color: "0", posicion: "centro" }, { id: "g6", color: "0", posicion: "centro" }, { id: "g7", color: "0", posicion: "centro" }, { id: "g8", color: "0", posicion: "lateralD" },
                { id: "h1", color: "0", posicion: "esquinaBI" }, { id: "h2", color: "0", posicion: "abajo" }, { id: "h3", color: "0", posicion: "abajo" }, { id: "h4", color: "0", posicion: "abajo" }, { id: "h5", color: "0", posicion: "abajo" }, { id: "h6", color: "0", posicion: "abajo" }, { id: "h7", color: "0", posicion: "abajo" }, { id: "h8", color: "0", posicion: "esquinaBD" },
        
            ];
            
            jugador1 = "";
            jugador2 = "";
            

        }
        else if (pathname == '/jugadores') {
            response.writeHead(200, {
                "Content-Type": "text/plain; charset=utf-8"
                
            });
            var consulta = url.parse(request.url, true).query;
            jugador = consulta["jugador"];
            
            if (jugador1 == "") {
                jugador1 = jugador;
                console.log(jugador1);
            }else{
                jugador2 = jugador;
                console.log(jugador2);
            }
            jugadorFicha2.setNombre(jugador1);
            jugadorFicha1.setNombre(jugador2); 
        }
        else if (pathname == '/jugadaPosicion') {
            response.writeHead(200, {
                "Content-Type": "text/plain; charset=utf-8"

            });
            var respuesta = url.parse(request.url, true).query;
            var idJugador = respuesta['posicionJugador'];
            var jugadorComparar = respuesta['jugador'];
            var posicionFicha;  

            //ficha2            
            if (colorFichaTurno == 0 && jugadorComparar == jugadorFicha2.nombre ) {

                for (i = 0; i < tablero.length; i++) {
                    if (tablero[i].color == "0"){ 
                        if (tablero[i].id == idJugador) {
                            posicionFicha = tablero[i].posicion;
                            jugadorFicha2.aPosiciones(posicionFicha);
                            partida.puntuacion(tablero);
                            partida.ganar(tablero);
                            console.log(partida.getPuntos1());
                            console.log(partida.getPuntos2());
                           
                        }
                    }
                }
            }
//ficha1
            if (colorFichaTurno == 1  && jugadorComparar == jugadorFicha1.nombre ) {

                for (i = 0; i < tablero.length; i++) {
                if (tablero[i].color == "0"){ 
                    if (tablero[i].id == idJugador) {
                        posicionFicha = tablero[i].posicion;
                        jugadorFicha1.aPosiciones(posicionFicha);
                        

                    }
                }
                }
            }
            
        }
        else if (pathname == "/mostrarficha2"){
            response.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });
            var puntos = partida.getPuntos1().toString();

            response.write(puntos);
            response.end();
        }
        else {
            response.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });
            sortida = "404 NOT FOUND";
            response.write(sortida);
            response.end();
        }
    }
    http.createServer(onRequest).listen(8888);
    console.log("Servidor iniciat.");
}
exports.iniciar = iniciar;