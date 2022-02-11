# Comandos útiles y básicos para JavaScript

## Para accedr y modificar el contenido HTML.

>***document.write(texto nuevo)***

*Nota:* va bien utlizarlo para hac er pruebas

---

## Comandos para la visualización o salida de datos:

* ### Ventana emergente o pop-up:
    >**alert(mensaje)** o **window.alert()**

* ### Para escribir en la consola del navegador:
    >**console.log(mensaje)**

---

## Para la confirmación de la salida de datos:

**window.confirm("mensaje")**

*Ejemplos:*

    A)
    resultat = window.confirm(missatge);

    B)
    if (window.confirm("Estàs segur que vols continuar?")) {
     ... (instruccions)
    }
---
## Para recoger datos introducidos por la usuaria:

> var info= **prompt("texto de la pregunta","valor/text predeterminado");**
---

## Tipos de Variables:

* **var:** Declara variables a nivel global. Las variables de ámbito global se pueden utilizar en cualquier lugar del script.
  
* **let:** Declara variables locales a nivel local. Las variables de ámbito local sólo tienen validez en el ámbito de una función, que es el bloque o fragmento de código delimitado por {}. 
  
* **const:** Declara constantes de sólo lectura.

---

## Valores vs Expresiones:

* **Valores:**
La sintaxis de JavaScript define dos tipos de valores: valores fijos y valores variables:
Los valores fijos se llaman literales. Se utilizan para representar valores en Javascript. Como su nombre indica son literalmente proporcionados por el programador en el código. Uno de sus significados es “Que reproduce exactamente lo que se ha dicho o se ha escrito”, en el código.
Los valores variables son las propias.
             
* **Expresiones:**
Una expresión es una combinación de valores, variables y operadores que calcula con un valor.
El cálculo se llama evaluación.
Los valores pueden ser de varios tipos, como números y cadenas.

---
## Intrucciones o comandos de JS:

* break
* case, catch, continue
* default, delete, do
* else
* finally, for, function
* if, in, instanceof
* new
* return
* switch
* this, throw, try, typeof
* var, void, let
* while, with
<<<<<<< HEAD:comandos_utiles.md

---

## Para convertir Strings en Int

> **parseInt()**

