//punto 1
function convertidorTemp(c) {
    let f = c * (9 / 5) + 32;
    return f;
}

console.log(convertidorTemp(40));

//punto 2
function resolvedor(a, b, c, esPositivo) {

    let disc = b * b - 4 * a * c;
    let root = Math.sqrt(disc);
    let x0 = (-b + root) / (2 * a);
    let x1 = (-b - root) / (2 * a);

    if (esPositivo) {

        return x0;
    }
    else {
        return x1;
    }

}
console.log(resolvedor(1, 5, 4, true));

//punto 3
function mejorParidad(a) {
    return a % 2 === 0;
}

if (mejorParidad(8)) {
    console.log("Es par");
} else {
    console.log("Es impar");
}


//punto 4

function peorParidad(a) {
    if (a === 1) return "El número 1 es impar";
    if (a === 2) return "El número 2 es par";
    if (a === 3) return "El número 3 es impar";
    if (a === 4) return "El número 4 es par";
    if (a === 5) return "El número 5 es impar";
    if (a === 6) return "El número 6 es par";
    if (a === 7) return "El número 7 es impar";
    if (a === 8) return "El número 8 es par";
    if (a === 9) return "El número 9 es impar";
    if (a === 10) return "El número 10 es par";

    return "Solo puedo calcular hasta el 10";
}

console.log(peorParidad(20));