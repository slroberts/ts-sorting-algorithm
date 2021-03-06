"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Sort Numbers
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, -10, 38]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Sort Characters
var charactersCollection = new CharactersCollection_1.CharactersCollection('XaaybZDohsjcl');
charactersCollection.sort();
console.log(charactersCollection.data);
//Sort LinkedList
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(20);
linkedList.add(0);
linkedList.sort();
linkedList.print();
