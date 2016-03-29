/**
 * Le constructeur Function crée un nouvel objet Function.
 * En JavaScript, chaque fonction est un objet Function.
 */
var ajoute = new Function('a', 'b', 'return a + b');
ajoute(2, 6);
// > 8

/**
 * La méthode apply() appelle une fonction en lui passant
 * une valeur this et des arguments sous forme d'un tableau
 */
Function.prototype.apply();

/**
 * Call() exemple
 */
var myObject;
function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);// Will return 20

/**
 * Aplly() exemple
 */
var myObject, myArray;
function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);// Will return 20
