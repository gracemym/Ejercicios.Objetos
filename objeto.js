// OBJETOS

// 1234
// "strings""
// arrays = [1,2.3,4]
// true/false
// function()

//{} // Objeto literal

//Propiedades
// un objeto puede tener propiedades
// se definen como si fueran variables
// se les asigna valor con dos PushSubscriptionOptionsse separan con comas

// var persona = {
//     nombre: "Ada",
//     edad: 27,
//     array: [1,2.3],
//     bool: true,
//     otraPersona: {nombre: "Marcela", edad: 27}
// };

// console.log(persona);

// // acceder a la propiedad de un objeto

// var persona = {
//     nombre: "Ada",
//     edad: 27
// };
// console.log(persona.nombre);
// console.log(persona.edad);

// // propiedad que no existe === undefined

// console.log(persona.dni) //===undefined porque no existe puej

// // asignar el valor a una propiedad, si se repete, JS lo va a repetir

// var persona = {
//     nombre: "Ada",
//     edad: 27
// };

// var persona = "Grace"; //ahora el valor es grace, pero si le pongo un console.log en la linea 45
// //entonces dice ada y luego grace...

// // los objetos son dinamicos
// //crear propiedades que no fueron definidas
// var persona = {
//     nombre: "Ada",
//     edad: 27,
// };

// persona.dni = 9090909;  //PARA ARREGLAR ALGO NUEVO LO HACES ASI, SIN DECLARAR COMO VAR...
// console.log(persona) 

//Metodos
//propiedad que tiene una funcion

// var persona = {
//     nombre: "Ada",
//     saludar: function() {
//         console.log("hola!");
//     }
// }

// persona.saludar()

////un metodo puede aceptar parametros
// var persona = {
//     nombre: "Ada",
//     saludar: function(personaSaludar) {
//         console.log("hola!" + personaSaludar + "!");
//     }
// }

// persona.saludar("Grace");
// persona.saludar(true);
// persona.saludar([1,2,3])

// podemos acceder a las propiedades del objeto
//por medio de la palabra reservada THIS


// var persona = {
//     nombre: "Ada",
//     saludar: function() {
//         console.log("hola! mi nombre es " + this.nombre + "!");
//     }
// }

// persona.saludar() // Hola mi nombre es ada!


// var persona = {
//     nombre: "Ada",
//     saludar: function() {
//         console.log(this.nombre.toUpperCase());
//     }
// }

//persona.saludar()

// var persona = {
//     nombre: "Ada",
//     edad: 27,
//     saludar: function() {
//         console.log("hola! mi nombre es " + this.nombre + "!");
//     },
//     cumpleanios: function() {
//         this.edad++
//     }
// }

// console.log(persona.edad)
// persona.cumpleanios()
// console.log(persona.edad) //aca modificanos la edad agregandole 1 y será por siempre


// var persona = {
//     nombre: "Ada",
//     edad: 27,
//     darPlata: function() { //   aqui vamos a hacer q esto de plata a otraPersona
//         otraPersona.billetera++
//     } 
// }

// var otraPersona = {
//     nombre: "Grace",
//     billetera: 0   //ACA DA CERO
// }

// persona.darPlata()
// console.log(otraPersona.billetera) //ACA DA UNO


//EJERCICIO

// var biblioteca = [
//     {
//         titulo: "Cumbres Borrascosas",
//         autor: "Emily Brontë", 
//         leido: true
//     },
//     {
//         titulo: "Orlando",
//         autor: "Virginia Woolf",
//         leido: false
//     },
 
//     {
//         titulo: "Arbol de Diana",
//         autor: "Alejandra Pizarnik",
//         leido: false
//     }
//   ];

// //   Hacer un programa que nos muestre los siguientes mensajes en consola

// // El libro cumbres borrascosas de emily bronte ya fue leido
// // el libro orlando de virginia woolf aun no fue leido
// // el libro arbol de diana de alejandra pizarnik aun no fue leido




// for (var i = 0; i < biblioteca.length; i++ ) {
//     if (biblioteca[i].leido == true) {
//         console.log("El libro"+ " " + biblioteca[i].titulo + " " + "de " + biblioteca[i].autor + " " +"fue leido")
//     } else { 
//         console.log("El libro"+ " " + biblioteca[i].titulo + " " + "de " + biblioteca[i].autor + " " +"no fue leido")
//     }
        
// }

//CON UN MAP
// for (var indice = 0; indice < biblioteca.length; indice++)

// biblioteca.map(function(elementoASerleido, indica, array) {
//     if (elementoASerleido.leido === true) {
//         console.log(elementoASerleido.titulo + "leido")
//     }
//      else {console.log(elementoASerleido.titulo + " no fue leido")}

// })

// EJERCICIO

// codear dos objetos 
// asignados a las variables pikachu & charmander

// cada uno tiene tres propiedades
// nombre, vida y ataque
// nombre es un stringvida y ataque son un numero

// var pikachu = {
//     nombre: "Pikachu",
//     vida: 550,
//     ataque: 85,
//     atacar: // hacer una funcion que reste la vida del otro pokemon que cuando se llame la funcion
//     //el otro pierda 20 puntos
// }

// var charmander = {
//     nombre: "Charmander",
//     vida: 600,
//     ataque: 56,
// }




//EJERCICIOS GITHUB

//EJERCICIO 1

// var persona = {};

// console.log(persona)

//EJERCICIO 2

// var sobreMi = {
//     nombre: "Grace",
//     apellido: "Mijares",
//     edad: 26

// };

// console.log(sobreMi)

//EJERCICIO 3

// var user = {
//     fullname: "gracemym",
//     email: "gracemijares10@gmail.com",
//     age: 26
// };

// console.log(user);
// console.log("Hola, mi nombre es", user.fullname, "y tengo", user.age, "años");

//EJERCICIO 4

// var song = {
//     title: 'Rock and Roll',
//     bandName: 'Led Zeppelin',
//     duration: 166000,
//     album: 'Led Zeppelin IV'
//   }
  
//   var cancion = {
//     title: song.title,
//     bandName: song.bandName,
//     duración: song.duration/1000,

//   }

//   console.log(cancion)

//EJERCICIO 5

// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

// var ada = {
//     id: 1,
//     nombre: "Ada Lovelace",
//     email: "ada@gmail.com",
//     telefono: "1234567890"
// };

// var grace = {
//     id: 2,
//     nombre: "Grace Hooper",
//     email: "grace@hotmail.com",
//     telefono: "0987654321"
// };

// var hedy = {
//     id: 3,
//     nombre: "Hedy Lamarr",
//     email: "hedy@gmail.com",
//     telefono: "6789054321"
// };

// var radia = {
//     id: 4,
//     nombre: "Radia Perlman",
//     email: "radia@yahoo.com",
//     telefono: "1234509876"
// };

// var sheryl = {
//     id: 5,
//     nombre: "Sheryl Sandberg",
//     email: "Sheryl@facebook.com",
//     telefono: "5432167890"
// };

// console.log(ada, grace, hedy, radia, sheryl);

// EJERCICIO 6

// // 1. El nombre de Ada:
// console.log(ada.nombre);

// // 2. El ID de Grace
// console.log(grace.id);

// // 3. El email de Hedy
// console.log(hedy.email);

// // 4. El ID y nombre de Radia
// console.log(radia.id, radia.nombre);

// // 5. El telefono de Sheryl
// console.log(sheryl.telefono);

//EJERCICIO 7

// var datos = {
//     id: 1,
//     nombre: 'Ada',
//     apellido: 'Lovelace',
//     email: 'ada.lovelace@gmail.com',
//     telefono: '1234567890',
//     edad: '29',
//     programa: true
// }
// var edad = parseInt(datos.edad);
// datos.edad = edad;
// datos.telefono = 0192837465;
// console.log(datos)

//EJERCICIO 8

// var datos = {
//     id: 1,
//     nombre: 'Ada',
//     apellido: 'Lovelace',
//     email: 'ada.lovelace@gmail.com',
//     telefono: '1234567890',
//     edad: 29,
//     programa: true
// }

// if(datos.programa) {
//     datos.lenguajeFavorito = "Javascript";
// } 

// console.log(datos)

// EJERCICIO 9

// var datos = {
//     id: 1,
//     nombre: 'Ada',
//     apellido: 'Lovelace',
//     email: 'ada.lovelace@gmail.com',
//     telefono: '1234567890',
//     edad: 29,
//     programa: true
//   };

// if (datos.programa) {
//     datos.lenguajesFavoritos = ["Javascript", "React"];
// }

// console.log("Hola, mi nombre es", datos.nombre, "y programo en", datos.lenguajesFavoritos)

//EJERCICIOS 10

// var disco = {
//     id: 1,
//     nombre: 'Wasting Light',
//     anioLanzamiento: 2011,
//     cantidadDeTemas: 12,
//     banda: {
//       nombre: 'Foo Fighters',
//       anioFormacion: 1994
//     }
//   };
  
//   // codea aca la solucion
//   var nombreDisco = disco.nombre;
//   var anioDisco = disco.anioLanzamiento;
//   var nombreBanda = disco.banda.nombre;
  
//   console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);

//EJERCICIO 11

// var user = {
//     id: 123456789,
//     name: 'Ada Lovelace',
//     url: 'https://www.linkedin.com/in/ada-lovelace',
//     skills: ['HTML', 'CSS', 'SASS']
//   };

  
//   user.skills.push("JAVASCRIPT")
//   console.log(user)

//EJERCICIO 12

// var user = {
//     id: 123456789,
//     firstName: 'Ada',
//     lastName: 'Lovelace',
//     url: 'https://www.linkedin.com/in/ada-lovelace',
//     skills: ['HTML', 'CSS', 'SASS', 'JS']
// };

// var newUser = {
//     id: 123456789,
//     name: {
//         first: 'Ada',
//         last: 'LoveLace'
//     },
//     url: 'https://www.linkedin.com/in/ada-lovelace',
//     skills: ['HTML', 'CSS', 'SASS', 'JS']
// }

// console.log(newUser);

//EJERCICIO 13

// var spotify = {
//     nombre: 'Lista de Nirvana',
//     privada: true,
//     canciones: ['Smells like teen spirit', 'In bloom', 'Come as you are']

// }

// console.log(spotify.nombre)
// console.log('Privada:', spotify.privada)
// console.log('Canciones:', spotify.canciones)

//EJERCICIO 14

// var ganadoras = [
//     {
//         nombre: 'Bebe Zahara Benet',
//         temporada: '1',
//         foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
//     },
//     {
//         nombre: 'Tyra Sanchez',
//         temporada: '2',
//         foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
//     },
//     {
//         nombre: 'Raja',
//         temporada: '3',
//         foto: 'http://www.nokeynoshade.party/images/raja.jpg'
//     },
//     {
//         nombre: 'Sharon Needles',
//         temporada: '4',
//         foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
//     },
//     {
//         nombre: 'Jinkx Monsoon',
//         temporada: '5',
//         foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
//     },
//     {
//         nombre: 'Bianca Del Rio',
//         temporada: '6',
//         foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
//     }
// ];


//     var nuevo= ganadoras.forEach(function(a){ //foreach es un for a es el primer elemento del array que es 
//         //UN OBJETO
    
//        var mensaje = a.nombre +'ganó la temporada' + a.temporada
//        console.log(mensaje)
    
//     }
//     )

//EJERCICIO 15

// var ganadoras = [
//     {
//       nombre: 'Bebe Zahara Benet',
//       temporada: '1',
//       foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
//     },
//     {
//       nombre: 'Tyra Sanchez',
//       temporada: '2',
//       foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
//     },
//     { nombre: 'Raja',
//       temporada: '3',
//       foto: 'http://www.nokeynoshade.party/images/raja.jpg'
//     },
//     {
//       nombre: 'Sharon Needles',
//       temporada: '4',
//       foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
//     },
//     {
//       nombre: 'Jinkx Monsoon',
//       temporada: '5',
//       foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
//     },
//     {
//       nombre: 'Bianca Del Rio',
//       temporada: '6',
//       foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
//     }
//   ];

// for (var i = 0; i < ganadoras.length ; i++) {
//     var mensaje = ganadoras[i].nombre + 'es la ganadora de la temporada' + ' ' + ganadoras[i].temporada
//     console.log(mensaje)
// }



//EJERCICIO 16

// var nevermind = [
//     { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
//     { id: 2, nombre: "In Bloom", duracion: 255 },
//     { id: 3, nombre: "Come As You Are", duracion: 219 },
//     { id: 4, nombre: "Breed", duracion: 184 },
//     { id: 5, nombre: "Lithium", duracion: 257 }
//   ];
  
// var b = 0

// for(var i = 0; i < nevermind.length ; i++) {
    
//     var a = nevermind[i].duracion
//     var duracionTotal = a + b
//     b = duracionTotal
// }


//   ///// RESULTADO
// console.log(duracionTotal); // 1217

// var duracionPromedioPorCancion = duracionTotal / nevermind.length

// console.log(duracionPromedioPorCancion); // 243.4

//EJERCICIO 17

// var bandas = [
//     { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
//     { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
//     { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
//     { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
//     { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
// ];

// for (var i = 0; i < bandas.length; i++) {
//     if (bandas[i].activa === true ) { console.log(bandas[i].nombre, 'está activa desde', bandas[i].fundacion)}
//     else { console.log(bandas[i].nombre,'no está activa')}
//}

//EJERCICIO 18

// var banda = {
//     name: 'Led Zeppelin',
//     year: 1968,
//     active: false,
//     thumbnail: 'http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75',
//     members: ['Jimmy Page', 'Robert Plant', 'John Paul Jones', 'John Bonham'],
//     albums: [
//         { name: 'Led Zeppelin', year: 1969, songs: ['Good Times, Bad Times', "Communication Breakdown"], duration: 2691 },
//         { name: 'Led Zeppelin II', year: 1969, songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"], duration: 2502 },
//         { name: 'Led Zeppelin III', year: 1970, songs: ["Immigrant Song"], duration: 2489 },
//         { name: 'Led Zeppelin IV', year: 1971, songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"], duration: 2559 },
//     ]
// };

// anioLanzamiento = banda.year;
// cantidadMiembros = banda.members.length;
// miembros = banda.members;
// cantidadDiscos = banda.albums.length;


// var c = 0;
// for(var i = 0; i < banda.albums.length ; i++) {
//    var a = banda.albums[i].songs.length;
//    cantidadTotalCanciones = a+c
//    c = cantidadTotalCanciones
// }


// var b = 0;
// for(var i = 0; i < banda.albums.length ; i++) {
// var a = banda.albums[i].duration 
// duracionTotal = a + b
// b = duracionTotal

// }

// promedioDuracion = duracionTotal / cantidadTotalCanciones



// console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
// console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
// console.log("Tiene en total " + cantidadDiscos + " discos");
// console.log("Tiene en total " + cantidadTotalCanciones + " canciones entre todos los discos.");
// console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");

//EJERCICIO 19

// var propiedadNombre = 'nombre';
// var propiedadEdad = 'edad';

// var persona = {
//     nombre: 'Grace',
//     edad: 26
// }

// console.log(persona["nombre"])
// console.log(persona["edad"])

// console.log(persona[propiedadNombre]);
// console.log(persona[propiedadEdad]); 

//EJERCICIO 20 

// var producto = {
//     id: 'ADA-020',
//     title: 'Gubergren sed est amet voluptua',
//     price: 123.75,
//     picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
//     condition: 'nuevo',
//     free_shipping: true,
//     location: 'Capital Federal'
//   };
  
//   // completá acá el código
//   var todasLasPropiedades = Object.keys(producto)
  
//   console.log(todasLasPropiedades);

//EJERCICIO 21

// var producto = {
//     id: 'ADA-020',
//     title: 'Gubergren sed est amet voluptua',
//     price: 123.75,
//     picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
//     condition: 'nuevo',
//     free_shipping: true,
//     location: 'Capital Federal'
// };

// var todosProductos = Object.keys(producto)
  
// for(var i = 0; i < todosProductos.length; i++) {
//     console.log('producto', todosProductos[i], '->', producto[todosProductos[i]] )
// }

//EJERCICIO 22

// var holaMundo = {
//     mostrarMensaje: function mensaje() { console.log('Hola Mundo!')},
//     obtenerMensaje: function obtener() {return 'Alo Mundo!'}
// }




// holaMundo.mostrarMensaje(); // ¡Hola mundo!
// console.log( holaMundo.obtenerMensaje() ); // ¡Alo mundo!

//EJERCICIO 25

// var pelicula = {
//     titulo: 'The Dark Knight',
//     anio: 2008,
//     director: 'Christopher Nolan',
   
//   }

// pelicula.mostrarInfo = function () {
//     console.log('pelicula', pelicula.titulo, '- año', pelicula.anio)
// }

// pelicula.mostrarInfo()

//EJERCICIO 26

// var playlist = {
//     name: 'Rupaul Lipsyncs',
//     owner: 'Ada',
//     followers: 8743,
//     songs: []
//   }

//   playlist.addSong = function (cancion) {
//       playlist.songs.push(cancion)
//   }

//   console.log(playlist)

//   playlist.addSong('Geronimo')
//   playlist.addSong('Sissy That Walk')
//   playlist.addSong('Cover Girl')

//   console.log(playlist.songs)

//EJERCICIO 27

// var user = {
//     firstName: 'Hedy',
//     lastName: 'Lamarr',
//     age: 30
//   };

//   user.getFullName = function () {
//       return user.firstName + ' ' + user.lastName
//   }

//   console.log(user.getFullName());

//EJERCICIO 28 

// var user = {
//     name: {
//       first: 'Hedy',
//       last: 'Lamarr'
//     },
//     age: 30
//   };

// user.getFullName = function() {
//     return 'Hedy Lamarr'
// }

// console.log(user.getFullName()); 

//EJERCICIO 29

// var shoppingCart = {
//     owner: {
//       id: 123,
//       name: 'Ada Lovelace'
//     },
//     products: []
//   };

// shoppingCart.addProduct = function (id, title, price, freeShipping) {
//     shoppingCart.products.push({id: id, title: title, price: price, freeShipping: freeShipping})
// }

// shoppingCart.addProduct(1,'At vero elitr',320,true)
// shoppingCart.addProduct(2,'Dolore ipsum est eos',230,false)
// shoppingCart.addProduct(3,'Lorem sadipscing tempor',120.50,true)
// shoppingCart.addProduct(4,'Duo invidunt accusam',510,false)
// shoppingCart.addProduct(5,'Labore accusam eirmod.',125.99,true)

// console.log(shoppingCart.products)

// shoppingCart.getTotal = function() { 
//     var b = 0;
//     for(var i = 0; i < shoppingCart.products.length; i++) {
//         var a = shoppingCart.products[i].price
//         var resultado = a + b;
//         var b = resultado;
//     }
//     return 'Su total es ' + b
// }

// console.log( shoppingCart.getTotal() );

//EJERCICIO 30

// var shoppingCart = {
//     owner: {
//         id: 123,
//         name: 'Ada Lovelace'
//     },
//     products: []
// };

// shoppingCart.addProduct = function (id, title, price, freeShipping) {
//     shoppingCart.products.push({ id: id, title: title, price: price, freeShipping: freeShipping })
// }

// shoppingCart.addProduct(1, 'At vero elitr', 320, true)
// shoppingCart.addProduct(2, 'Dolore ipsum est eos', 230, false)
// shoppingCart.addProduct(3, 'Lorem sadipscing tempor', 120.50, true)
// shoppingCart.addProduct(4, 'Duo invidunt accusam', 510, false)
// shoppingCart.addProduct(5, 'Labore accusam eirmod.', 125.99, true)

// console.log(shoppingCart.products)

// shoppingCart.getTotal = function () {
//     var zero = 0;
//     for (var i = 0; i < shoppingCart.products.length; i++) {
//         if (shoppingCart.products[i].freeShipping === false) {
//             shoppingCart.products[i].price = shoppingCart.products[i].price + 120;


//         }

//         var a = shoppingCart.products[i].price
//         var resultado = a + zero
//         zero = resultado
//         var iva = 1.21
//     }
//     return 'su total es ' + zero * iva

// }



// console.log(shoppingCart.getTotal()); 

// EJERCICIO 31

// var shoppingCart = {
//     owner: {
//         id: 123,
//         name: 'Ada Lovelace'
//     },
//     products: []
// };

// shoppingCart.addProduct = function (id, title, price, freeShipping) {
//     shoppingCart.products.push({ id: id, title: title, price: price, freeShipping: freeShipping })
// }

// shoppingCart.addProduct(1, 'At vero elitr', 320, true)
// shoppingCart.addProduct(2, 'Dolore ipsum est eos', 230, false)
// shoppingCart.addProduct(3, 'Lorem sadipscing tempor', 120.50, true)
// shoppingCart.addProduct(4, 'Duo invidunt accusam', 510, false)
// shoppingCart.addProduct(5, 'Labore accusam eirmod.', 125.99, true)



// shoppingCart.getTotal = function () {
//     var zero = 0;
//     for (var i = 0; i < shoppingCart.products.length; i++) {
//         if (shoppingCart.products[i].freeShipping === false) {
//             shoppingCart.products[i].price = shoppingCart.products[i].price + 120;
//         }

//         var a = shoppingCart.products[i].price
//         var resultado = a + zero
//         zero = resultado
//         var iva = 1.21
//         var totalDetotales = zero * iva
//     }
//     return 'su total es ' + totalDetotales

// }

// console.log(shoppingCart.getTotal())

// shoppingCart.render = function () {
//     var zero = 0;
//     console.log('Listado de Precios')
//     for (var i = 0; i < shoppingCart.products.length; i++) {
//         console.log('Producto:', shoppingCart.products[i].title, 'precio:', shoppingCart.products[i].price, 'pesos') 

//     var a = shoppingCart.products[i].price
//     resultado = a + zero
//     zero = resultado
//     var iva = 1.21
//     var totalDetotales = zero * iva
//     }

// return 'Su total es ' + totalDetotales

// }

// console.log(shoppingCart.render())

