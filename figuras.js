
//Codigo Cuadrado

console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado: " + ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");

function perimetroCuadrado (lado){
    return (lado * 4);
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del curadrado: " + areaCuadrado + "cm^2");
function areaCuadrado (lado){
    return (lado * lado)
}

console.groupEnd();



//Codigo Triangulo


console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: " 
// + ladoTriangulo1 + "cm, " 
// + ladoTriangulo2 + "cm, " 
// + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base){
    return (lado1 + lado2 + base);
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2 ;
// console.log("El área del triangulo mide: " + areaTriangulo + "cm^2");

function areaTriangulo(base, altura){
    return ((base * altura)/2);
}

console.groupEnd();


// Codigo circulo

console.group("Circulo");


//Radio
//const radioCirculo = 4;
const PI = Math.PI;

//Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo mide: " + diametroCirculo + "cm");
function diametroCirculo(radio){
    return (radio * 2);
}
//PI
//console.log("La constante PI mide: " + PI);
//Circunfetencia
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo mide: " + perimetroCirculo + "cm");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return (radio * PI);
}

//Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo mide: " + areaCirculo + "cm^2");
function areaCirculo(radio){
    return ((radio * radio) * PI);
}
console.groupEnd();

// Aqui Empezamos a interactuar con HTML


//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);    
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado (value);
    alert(area);    
}
//Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const base = Number(input3.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro)    
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTrianguloBase");
    const base = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloAltura");
    const altura = Number(input2.value);

    const area = areaTriangulo(base, altura);
    alert(area);    
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);   
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);    
}

//Reto: Matematicas Con JavaScript

function CalculadoraTrianguloIsoseles(){
    const inputA = document.getElementById("InputTrianguloLadoA");
    const ladoA = Number(inputA.value);
    const inputB = document.getElementById("InputTrianguloLadoB");
    const ladoB = Number(inputB.value);
    const inputC = document.getElementById("InputTrianguloBaseX");
    const baseX = Number(inputC.value);
    
    if (ladoA === ladoB && ladoA!= baseX){
        alert("Isoseles");
        
        const Altura = Math.sqrt((ladoA * ladoB)-((baseX / 2)*(baseX / 2)));
        console.log(Altura)
    }
    else {
        alert("Tu Triangulo no es un Isoseles");
    }
}



