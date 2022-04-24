

//Mediana General
const salariosArg = argentina.map(
    function(persona){
        return persona.salary
    }
);

const salariosArgSorted = salariosArg.sort(
    function(SalaryA, SalaryB){
        return SalaryA - SalaryB;
    });

//Helpers
function esPar(numero){
    return numero % 2 === 0;
}
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
        );    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }
//Calcular Mediana
function medianaSalariosArg(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralArg = medianaSalariosArg(salariosArgSorted);

//Mediana del Top 10%
const spliceStart = ((salariosArgSorted.length * 90) / 100);
const spliceCount = salariosArgSorted.length - spliceStart;
 
const salariosArgTop10 = salariosArgSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10 = medianaSalariosArg(salariosArgTop10);

console.log(
    medianaGeneralArg,
    medianaTop10,
);