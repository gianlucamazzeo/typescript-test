// importare alcune cose
import { Book, Categories } from './modules/books'

// importare tutto
import * as books from './modules/books'

import MyBookClass from './modules/books'


//console.log(Categories)
let book = new MyBookClass();
book.year = 2018
book.title = 'My story';
book.content = 'ddd';
console.log(book)
