"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0, -10, 38]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('XaaybZDohsjcl');
// const sorter = new Sorter(numbersCollection);
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
// console.log(numbersCollection.data);
console.log(charactersCollection.data);
