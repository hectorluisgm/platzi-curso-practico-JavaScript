//Media Armonica

// Un ejemplo en el que la media armónica es útil es cuando se examina la velocidad de varios viajes de distancia fija. 
// Por ejemplo, si la velocidad para ir del punto A al B era 60 km/h, y la velocidad para regresar de B a A fue de 40 km/h.

// Un carro recorre 300km, los primeros 80km los hace a una velocidad de 110km/h , luego reduce su velocidad porque la via no permite ir a mas de 40km/h la cual 
// fue la velocidad en la que recorrio 100km en el segundo tramo, en el ultimo tramo aumenta la velocidad a 160km/h y recorre los 120km restantes.
const carro = [
    {
        velocidad : 110,
        distancia : 80,
    },
    {
        velocidad : 40,
        distancia : 100,
    },
    {
        velocidad : 160,
        distancia : 120,
    },
]

//  const velocidadCarro = carro.map(function(carroObject){
//     return (1 / carro.velocidad);
//  });

//  const sumaVelocidadCarro = velocidadCarro.reduce(
//      function(sum= 0 , nuevoValor){
//          return sum + nuevoValor;
//      }
//  );

//  const mediaArmonica = (velocidadCarro.length) / sumaVelocidadCarro;

 function calcularMediaArmonica(datoDelObjeto){
     const velocidadCarro = datoDelObjeto.map(function(datoDelObjeto){
         return 1 / datoDelObjeto.velocidad;
     });
     const sumaVelocidadCarro = velocidadCarro.reduce(
         function( sum = 0, nuevoValor){
             return sum + nuevoValor;
         }
     );
    const mediaArmonica = (velocidadCarro.length) / sumaVelocidadCarro;
    return mediaArmonica;
 }

