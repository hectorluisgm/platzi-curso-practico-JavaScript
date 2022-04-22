// const PrecioOriginal = 100;
// const descuento = 15;
// console.log({
//     PrecioOriginal,
//     descuento,
//     porcentajeDePrecioConDescuento,
//     precioConDescuento,
// });


function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDePrecioConDescuento)/100;
    
    return precioConDescuento;
}

function onCickPrinceWithDiscount(){
    const price = document.getElementById("PrecioTotal");
    const priceValue = price.value;

    const discount = document.getElementById("porcentajeDescuento");
    const discountValue= discount.value;

    const PrinceWithDiscount = calcularPrecioConDescuento(priceValue, discountValue)

    const ResultPrice = document.getElementById("ResultPrice");
    ResultPrice.innerText = "Tu precio final con descuento es de " + PrinceWithDiscount;
}