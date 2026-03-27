a = parseFloat(prompt("Ingresa el posible número raíz (ej. 4):"))
b = parseFloat(prompt("Ingresa el número total (ej. 16):"))
if (a * a == b) {
    alert(a + " es la raíz cuadrada exacta de " + b)
} else {
    alert("No es la raíz exacta")
}