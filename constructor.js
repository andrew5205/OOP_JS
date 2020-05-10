
// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Initiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1);

/* 
Book {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: [Function]
}
*/


console.log(book1.getSummary());
// Book One was written by John Doe in 2013

