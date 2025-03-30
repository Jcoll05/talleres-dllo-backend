//Punto 1
function desglosarString(text, tipo) {
    const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚüÜàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜéÉœŒåÅøØõÕıI"; //incluye las vocales y sus variaciones con tildes y dieresis, para compatibilidad con varios idiomas.
    const consonants = "bcdfghjklmnpqrstvwxyzñBCDFGHJKLMNPQRSTVWXYZÑçÇðÐþÞłŁŋŊňŇŕŔśŚźŹżŻğĞ"; //incluye las consonantes y todas sus variaciones en varios idiomas.

    if (tipo === "vocales") {
        let vowelCounter = 0;
        text.split("").forEach(element => {
            if (vowels.includes(element)) {
                vowelCounter = vowelCounter + 1;
            }
        });
        return vowelCounter;
    }
    if (tipo === "consonantes") {
        let consonantCounter = 0;
        text.split("").forEach(element => {
            if (consonants.includes(element)) {
                consonantCounter = consonantCounter + 1;
            }
        });
        return consonantCounter;
    }
    else {
        return "Tipo solo puede ser 'vocales' o 'consonantes'";
    }
}
console.log(desglosarString("electroencefalograma", "vocales"));

//Punto 2
function twoSum(lista, numero) {
    let listMap = new Map();
    let result = [];

    for (let i = 0; i < lista.length; i++) {
        let complement = numero - lista[i];

        if (listMap.has(complement)) {
            result.push([listMap.get(complement), i]);
        }
        listMap.set(lista[i], i);
    }
    return result.length > 0 ? result : "No hay solución";
}
console.log(twoSum([3, 4, 5, 8, 9, 10, 6, 1], 7));

//punto 3
function conversionRomana(romano) {
    const valoresRomanos = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

    let total = 0;

    for (let i = 0; i < romano.length; i++) {
        let actual = valoresRomanos[romano[i]];
        let siguiente = valoresRomanos[romano[i + 1]] || 0;

        if (actual < siguiente) {
            if (
                (actual === 1 && (siguiente === 5 || siguiente === 10)) ||
                (actual === 10 && (siguiente === 50 || siguiente === 100)) ||
                (actual === 100 && (siguiente === 500 || siguiente === 1000))
            ) {
                total -= actual;
            } else {
                return "Número romano inválido"; // Si la resta no es válida
            }
        } else {
            total += actual;
        }
    }
    return total;
}
console.log(conversionRomana("MCMXCVII"));

//El ejemplo "MXMVII"1997 en el taller es incorrecto ya que ese no es un numero romano segun las reglas.
//"MCMXCVII" es 1997 verdaderamente, segun las reglas de los numeros romanos.