// 1.push() : Ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau.

let fruits1 = ["apple", "banana"];
fruits1.push("orange"); // ["apple", "banana", "orange"]

// 2.pop() : Supprime le dernier élément d'un tableau et retourne cet élément.
let fruits2 = ["apple", "banana", "orange"];
let last = fruits2.pop(); // "orange", fruits = ["apple", "banana"]

// 3.shift() : Supprime le premier élément d'un tableau et retourne cet élément.
let fruits = ["apple", "banana", "orange"];
let first = fruits.shift(); // "apple", fruits = ["banana", "orange"]

// 4-unshift() : Ajoute un ou plusieurs éléments au début d'un tableau et retourne la nouvelle longueur du tableau.