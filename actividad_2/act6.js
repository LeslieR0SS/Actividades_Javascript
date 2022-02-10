function suma(){
    var numero_a = prompt("Introduce un número: " )
    var numero_b = prompt("Introduce otro número: ")
    var resultado = parseInt(numero_a) + parseInt(numero_b)
    document.write("La suma de los números introducidos es: " + resultado)  
}
suma()