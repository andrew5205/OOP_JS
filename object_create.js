
// The Object.create() method creates a new object, 
// using an existing object as the prototype of the newly created object.




// Object of protos
// have const variable called bookProtos 
// which is an object that contain two functions 
// key => function name 
// value => function 
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old`;
    }
};


// Create Object
// Object.create(), the "Object" is refered to  "__proto__: Object"  in browser console
// Object.create() will write everything passed in to __proto__
const book1 = Object.create(bookProtos);

// title, author, year are property set on book1, not bookProtos
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2013';

console.log(book1);


// **************************************************************************** //
const book2 = Object.create(bookProtos, {
    title: { value: 'Book Two'},
    author: { value: 'Jane Doe'},
    year: { value: '2018'},
});

console.log(book2);

// cpmparison 
// when create an object, Object.values() gives all the value of key value pairs

// title: {value: ''}
