function calcular(){
    let costo_bebida = document.getElementById("costo_bebida_por_invitado").value
    let costo_comida = document.getElementById("costo_comida_por_invitado").value
    let numero_invitados = document.getElementById("numero_invitados").value
    let costo_decoracion = document.getElementById("costo_decoracion").value
    let costo_musica = document.getElementById("costo_musica").value
    let porcentaje_propina = document.getElementById("propina_personal").value
    let bebida_float = parseFloat(costo_bebida);
    let comida_float = parseFloat(costo_comida);
    let numero_invitados_float = parseFloat(numero_invitados);
    let decoracion_float = parseFloat(costo_decoracion);
    let musica_float = parseFloat(costo_musica);
    let propina_float = parseFloat(porcentaje_propina);
    let comida_total = numero_invitados_float*comida_float
    let bebida_total = numero_invitados_float*bebida_float
    let subtotal = comida_total+bebida_total+decoracion_float+musica_float
    let propina = subtotal * (propina_float / 100)
    let total_general = subtotal + propina
    let costo_por_invitado = total_general / numero_invitados_float
    if(numero_invitados_float>0){
        document.getElementById("resultado_comida").textContent = `${comida_total.toLocaleString('es-CO')}$`
        document.getElementById("resultado_bebida").textContent = `${bebida_total.toLocaleString('es-CO')}$`
        document.getElementById("resultado_decoracion").textContent = `${decoracion_float.toLocaleString('es-CO')}$`
        document.getElementById("resultado_musica").textContent = `${musica_float.toLocaleString('es-CO')}$`
        document.getElementById("resultado_subtotal").textContent = `${subtotal.toLocaleString('es-CO')}$`
        document.getElementById("resultado_propina").textContent = `${propina.toLocaleString('es-CO')}$`
        document.getElementById("resultado_total_general").textContent = `${total_general.toLocaleString('es-CO')}$`
        document.getElementById("resultado_costo_por_invitado").textContent = `${costo_por_invitado.toLocaleString('es-CO')}$`
    }
    else{
        alert("Error, debes ingresar un numero correcto de invitados.");
    }
}