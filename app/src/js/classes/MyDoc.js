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

/**
 * @Heritage Simple
 *
 */
function Employe() {
    this.nom = "";
    this.branche = "commun";
}

function Manager() {
    this.rapports = [];
}

Manager.prototype = new Employe;

function Travailleur () {
    this.projets = [];
}

Travailleur.prototype = new Employe;

function Vendeur () {
    this.branche = "ventes";
    this.quota = 100;
}

Vendeur.prototype = new Travailleur;

function Ingénieur () {
    this.dept = "ingénierie";
    this.moteur = "";
}

Ingénieur.prototype = new Travailleur;
