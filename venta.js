function calcular(){
    let ivaporcentaje = 1.19
    let descuentoporcentaje = 1
    let cantidadproductos = document.getElementById("cantidad").value;
    let preciounitario = document.getElementById("precio").value;
    let cantidad_productos_float = parseFloat(cantidadproductos)
    let precio_unitario_float = parseFloat(preciounitario)
    if(cantidadproductos > 5){
        descuentoporcentaje = 0.80
        document.getElementById("descuento").value = `20 %`
    }
    else{
        document.getElementById("descuento").value = `No Aplica`
    };
    let subtotal = cantidad_productos_float * precio_unitario_float
    let total = (subtotal*descuentoporcentaje)*ivaporcentaje
    document.getElementById("iva").value = `${(ivaporcentaje*100)-100}%`
    document.getElementById("subtotal").value = `${subtotal.toLocaleString('es-CO')}$`
    document.getElementById("total").value = `${total.toLocaleString('es-CO')}$`
}
