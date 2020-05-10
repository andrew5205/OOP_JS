
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



// Magazine Constructor 
// Magazine has 4 parameter title, author, year, month 
// title, author, year is inherit from Book 
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}


// Inherit Prototype 
// Object.create()  takes in all prototype from Book 
// pass in to prototype of Magazine
Magazine.prototype = Object.create(Book.prototype);



// Instantiate Magazine Object 
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');
console.log(mag1);      // constructor: ƒ Book(title, author, year)
console.log(mag1.getSummary());

// // Use Magazine Constructor 
// Magazine.prototype.constructor = Magazine;
// console.log(mag1);      // constructor: ƒ Magazine(title, author, year, month)




