const Lista = [
    200,
    100,
    400,
    500000000,
    10000,
    300,
]

const mitadLista = parseInt(Lista.length/2);

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
        );    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

Lista.sort(function(a,b){return a - b;});

function esPar(numero){
    if (numero % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

let mediana;

if (esPar(Lista.length)){
    const elemento1 = Lista[mitadLista - 1];
    const elemento2 = Lista[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;
    
}else {
    mediana = Lista[mitadLista];
}

