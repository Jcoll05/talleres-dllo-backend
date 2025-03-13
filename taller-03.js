//Punto 1
function desglosarString(text, tipo) {
    const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚüÜàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜéÉœŒåÅøØõÕıI"; //incluye las vocales y sus variaciones con tildes y dieresis, para compatibilidad con varios idiomas.
    const consonants = "bcdfghjklmnpqrstvwxyzñBCDFGHJKLMNPQRSTVWXYZÑçÇðÐþÞłŁŋŊňŇŕŔśŚźŹżŻğĞ"; //incluye las consonantes y todas sus variaciones en varios idiomas.
    let vowelCounter = 0;
    let consonantCounter = 0;

    if (tipo === "vocales") {
        text.split("").forEach(element => {
            if (vowels.includes(element)) {
                vowelCounter = vowelCounter + 1;
            }
        });
        return "Vocales: " + vowelCounter;
    }
    if (tipo === "consonantes") {
        text.split("").forEach(element => {
            if (consonants.includes(element)) {
                consonantCounter = consonantCounter + 1;
            }
        });
        return "Consonantes: " + consonantCounter;
    }
    else{
        return "Tipo solo puede ser 'vocales' o 'consonantes'";
    }
}
console.log(desglosarString("electroencefalograma", "vocales"));