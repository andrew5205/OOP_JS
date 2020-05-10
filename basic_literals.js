const s1 = "Hello";
console.log(s1.toUpperCase());      // HELLO
console.log(typeof s1);             // string
console.log(typeof(s1));            // string

// craete string as object 
const s2 = new String('Hello');
console.log(typeof s2);             // object



// ******************   DOM   ****************************** //
// DOM
// Window object 
console.log(window);
// window.alert('This is an alert from window.alert() object');
// window.alert() is an object 
alert('This is an alert from window.alert() object');
// appVersion is a property of navigator object 
// navigator -> opbject
// appVersion -> property
console.log(navigator.appVersion);



// ******************   Object literals   ****************************** //

// book1 --> object 
// title, author, year --> property 

const book1 = {
    title: 'Book one',
    author: 'John Doe',
    year: '2013',

    getSumary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}


console.log(book1);         // { title: 'Book one', author: 'John Doe', year: '2013' }
console.log(book1.title);   // Book one
console.log(book1.getSumary());




const book2 = {
    title: 'Book two',
    author: 'John Doe',
    year: '2016',

    getSumary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// to see all values in object 
// Object.values()
console.log(Object.values(book2));      // [ 'Book two', 'John Doe', '2016', [Function: getSumary] ]
// shows only the key in object 
console.log(Object.keys(book2));        // [ 'title', 'author', 'year', 'getSumary' ]


