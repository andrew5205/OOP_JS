

// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // move this part into prototype
    // this.getSummary = function() {
    //     return `${this.title} was written by ${this.author} in ${this.year}`;
    // }
}


// getSummary
// store in prototype 
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
}

// Revise / Change year 
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
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

console.log(book2.getSummary());
// Book Two was written by Jane Doe in 2016

console.log(book2.getAge());


console.log(book2);
book2.revise('2020');
console.log(book2);         // Book { title: 'Book Two', author: 'Jane Doe', year: '2020', revised: true }

console.log(book1);         // Book { title: 'Book One', author: 'John Doe', year: '2013' }


// revise is in prototype 
// not showing unless its been called 

