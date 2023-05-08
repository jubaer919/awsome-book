import BookCollection from './modules/boockcollention.js';
import listFunctionality from './modules/listfunctionality.js';
import dateAndTime from './modules/datetime.js';

const myCollection = new BookCollection();
myCollection.addBook('', '');

// call list functionality
listFunctionality();

// calling date and time function
dateAndTime();
