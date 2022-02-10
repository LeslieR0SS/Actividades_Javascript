function mas_grande(){
    var numero_a = prompt("Introduce un número" )
    var numero_b = prompt("Introduce otro número")
    var resultado = "El número más grande es: "
    if (numero_a > numero_b){
        document.write(resultado + numero_a)
    }
    else 
        document.write(resultado + numero_b)
}

mas_grande()