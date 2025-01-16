/**
 * serveix per juntar dos paraules 
 * aixo fa que las variables cadena1 i la variable cadena2 sean amb format de lletras 
 * @param {string} cadena1 
 * @param {string} cadena2 
 * @returns mostra las dos paraules contatenades 
 */
function concatena(cadena1, cadena2) {
    return cadena1 + cadena2;
}
/**
 * Una funcio que el que fa es posar les lleras en majuscula
 * @param {string} cadena la frase que posa en majuscula
 * @returns per mostrar el resultat
 */
function passarAMajuscules(cadena) {
    let resultat = "";

    for (let caracter of cadena) {
        let charCode = caracter.charCodeAt();

        if (charCode >= 97 && charCode <= 122) {
            charCode = charCode - 32;
        }

        resultat += String.fromCharCode(charCode);
    }

    return resultat;
}
/**
 * Una funcio que el que fa es pasar la frase a minusculas
 * @param {string} cadena la frase que posa en minusculas
 * @returns per mostrar el resultat
 */
function passarAMinuscules(cadena) {
    let resultat = "";

    for (let caracter of cadena) {
        let charCode = caracter.charCodeAt();

        if (charCode >= 65 && charCode <= 90) {
            charCode = charCode + 32;
        }

        resultat += String.fromCharCode(charCode);
    }

    return resultat;
}
/**
 * Una funcio que el que fa es repetir una frase un numero de vegadas
 * @param {string} cadena la frase que repiteix
 * @param {number} vegades el numero de vegadas que es repiteix
 * @returns mostra el resultat 
 */
function repetir(cadena, vegades) {
    let resultat = "";

    for (let i = 0; i < vegades; i++) {
        resultat += cadena;
    }

    return resultat;
}
/**
 * Una funcio que el que fa es eliminar les vocals d'una frase
 * @param {string} cadena la frase
 * @returns mostrar la frase sense les vocals
 */
function eliminaVocals(cadena) {
    let resultat = "";

    for (let caracter of cadena) {
        switch (passarAMinuscules(caracter)) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                caracter = "";
        }
        resultat += caracter;
    }

    return resultat;
}
/**
 * Una funcio que el que fa es eliminar les consonats d'una frase
 * @param {string} cadena la frase 
 * @returns mostra la frase sense les consonats
 */
function eliminaConsonants(cadena) {
    let resultat = "";
    const CONSONANTS = "qwrtypsdfghjklñzxcvbnm";

    for (let caracter of cadena) {
        let consonant = false;
        let i = 0;

        while(!consonant && i < CONSONANTS.length) {
            if(passarAMinuscules(caracter) === CONSONANTS[i]) {
                consonant = true;
            }
            i++;
        }

        if(!consonant) {
            resultat += caracter;
        }
    }

    return resultat;
}
/**
 * Una funcio que el que fa es encriptar una frase 
 * @param {string} cadena frase per encriptar
 * @param {number} clau la clau de la encriptacio
 * @returns la frase encriptada
 */
function encriptarMissatge(cadena, clau) {
    let resultat = "";

    for(let caracter of cadena) {
        let charCode = caracter.charCodeAt();
        
        charCode += clau;

        resultat += String.fromCharCode(charCode);
    }

    return resultat;
}
/**
 * Una funcio que el que fa es desencriptar una frase
 * @param {string} cadena la frase que vols desencriptar
 * @param {number} clau la clau de desencriptacio
 * @returns el resultat de la descriptacio
 */
function desencriptarMissatge(cadena, clau) {
    let resultat = "";

    for(let caracter of cadena) {
        let charCode = caracter.charCodeAt();
        
        charCode -= clau;

        resultat += String.fromCharCode(charCode);
    }

    return resultat;
}



// Exemples d'us de cada funció, no cal comentar
function exemples() {
    console.log("-- concatena --");
    console.log(concatena("ho", "la"));
    console.log();

    console.log("-- passarAMajuscules --");
    console.log(passarAMajuscules("Aquesta cadena s'escriu en majuscules"));
    console.log();

    console.log("-- passarAMinuscules --");
    console.log(passarAMinuscules("AquesTa cadeNA s'eSCriu en MINUScules"));
    console.log();
    
    console.log("-- repetir --");
    console.log(repetir("hola", 3));
    console.log();
    
    console.log("-- eliminaVocals --");
    console.log(eliminaVocals("Aquesta cadena no presenta cap vocal"));
    console.log();
    
    console.log("-- eliminaConsonants --");
    console.log(eliminaConsonants("Aquesta cadena no presenta cap consonant"));
    console.log();
    
    console.log("-- encriptarMissatge --");
    let missatgeEncriptat = encriptarMissatge("Aquest missatge està encriptat", 78);
    console.log(missatgeEncriptat);
    console.log();
    
    console.log("-- desencriptarMissatge --");
    console.log(desencriptarMissatge(missatgeEncriptat, 78));
    console.log();
}

exemples();
