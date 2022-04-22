// const PrecioOriginal = 100;
// const descuento = 15;
// console.log({
//     PrecioOriginal,
//     descuento,
//     porcentajeDePrecioConDescuento,
//     precioConDescuento,
// });

const coupons = [{
    name: 'Burbuja12345678',
    discount: 10,
    },{
    name: 'Caraotas12345',
    discount: 15,
    },{
    name: 'Compota340218',
    discount: 20,
    },
];   


function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDePrecioConDescuento)/100;
    
    return precioConDescuento;
}

function onCickPrinceWithDiscount(){
    const price = document.getElementById("PrecioTotal");
    const priceValue = price.value;

    const coupon = document.getElementById("porcentajeDescuento");
    const couponValue= coupon.value;

    //const PrinceWithDiscount = calcularPrecioConDescuento(priceValue, discountValue)
    const isUserCouponValid = function(coupons){
        return coupons.name === coupon.value;
    };
    
    const userCoupon = coupons.find(isUserCouponValid);
    
    if (!userCoupon){
        alert ('El coupon ingresado '+ couponValue + 'no es valido');
    }else{
        const discount = userCoupon.discount;
        const PriceWithDiscount = calcularPrecioConDescuento(priceValue, discount);
        
        const ResultPrice = document.getElementById("ResultPrice");
        ResultPrice.innerText = "Tu precio final con descuento es de " + PriceWithDiscount;
    }
}