function calcular(){
    let horastrabajadas = document.getElementById("horas").value;
    let valorxhora = document.getElementById("valorhora").value;
    let bonohorasextra = 1;
    if(horastrabajadas > 42){
        bonohorasextra = 1.10
        document.getElementById("salario").value = `${((horastrabajadas*valorxhora)*bonohorasextra).toLocaleString('es-CO')}`
    }
    else{
        document.getElementById("salario").value = `${((horastrabajadas*valorxhora)*bonohorasextra).toLocaleString('es-CO')}`
    }
}