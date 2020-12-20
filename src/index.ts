import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, -10, 38]);
const charactersCollection = new CharactersCollection('XaaybZDohsjcl');

// const sorter = new Sorter(numbersCollection);
const sorter = new Sorter(charactersCollection);

sorter.sort();

// console.log(numbersCollection.data);

console.log(charactersCollection.data);
