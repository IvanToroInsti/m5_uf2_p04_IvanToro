/**
 * Aquesta funció retorna la suma de dos valors
 * @param {number} n1 primer nombre
 * @param {number} n2 segon nombre
 * @returns {number} el resultat de l'operació
 */
function suma(n1, n2) {
    return n1 + n2;
}



/**
 * Aquesta funció retorna la resta de dos valors
 * @param {number} n1 primer nombre
 * @param {number} n2 segon nombre
 * @returns {number} el resultat de l'operació
 */
function resta(n1, n2) {
    return n1 - n2;
}

/**
 * Aquesta funció retorna la multiplicació de dos valors
 * @param {number} n1 primer nombre
 * @param {number} n2 segon nombre
 * @returns {number} el resultat de l'operació
 */
function multiplicacio(n1, n2) {
    return n1 * n2 ;
}


/**
 * Aquesta funció retorna la divisió de dos valors tenint en compte
 * que l'operació no utilitzi valors de tipus bigint. En cas de rebre
 * un valor de tipus bigint, retornarà undefined
 * 
 * @param {number} n1 primer nombre
 * @param {number} n2 segon nombre
 * @returns {number|undefined} el resultat de l'operació
 */
function divisio(n1, n2) {

    if (typeof (n1) !== "bigint" && typeof (n2) !== "bigint") {
        resultat = n1 / n2;
    }

    return resultat;
}

function divisioSimple(n1, n2) {
    return n1 / n2;
}

function test1(n1, n2) {
    return n1 + n2;
}
function test2(n1, n2) {
    return n1 + n2;
}


module.exports.suma = suma;
module.exports.resta = resta;
module.exports.multiplicacio = multiplicacio;
module.exports.divisio = divisio;
module.exports.divisioSimple = divisioSimple;
module.exports.test1 = test1;
module.exports.test2 = test2;