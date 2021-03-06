import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sort Numbers
const numbersCollection = new NumbersCollection([10, 3, -5, 0, -10, 38]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Sort Characters
const charactersCollection = new CharactersCollection('XaaybZDohsjcl');
charactersCollection.sort();
console.log(charactersCollection.data);

//Sort LinkedList
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(20);
linkedList.add(0);

linkedList.sort();
linkedList.print();
