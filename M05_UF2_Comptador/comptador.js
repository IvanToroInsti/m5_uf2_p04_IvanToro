/**
 * Aquest script hauria de comptar d'1 a 100 i mostrar el resultat per pantalla.
 * 
 * Autor: Diego Muñoz Jorquera
 */

// Declarem la funció on s'implementa el comptador:

/**
 * Aquesta funció compta les vegades que ens demanin i retorna el resultat final del comptador
 * Dins aquesta funció hi trobarem l'error a corregir.
 * 
 * @param {Number} vegades les vegades que volem que compti
 * @returns {Number} resultat final del comptador
 */
function comptar(vegades) {
    let comptador = 0;
    
    for(let i = 1; i <= vegades; i++) {
        comptador = i;
    }

    return comptador;
}



let resultat_comptar = comptar(100);

console.log(resultat_comptar);
