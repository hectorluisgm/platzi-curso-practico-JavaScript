const Lista1 = [
    100,
    200,
    300,
    450,
];

//Promedio
function calcularMediaAritmetica(Lista){
// let sumaLista = 0;
// for (i=0 ; i < Lista.length; i++){
//     sumaLista = sumaLista + Lista[i];
// }

const sumaLista = Lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / Lista.length;
return promedioLista;
}
