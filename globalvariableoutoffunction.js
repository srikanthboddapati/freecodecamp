// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, bookName) {
    var  newBookList = bookList.slice();
  newBookList.push(bookName);
  return newBookList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookList, bookName) {
    var newBookList = bookList.slice();
  var book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {

    newBookList.splice(book_index, 1);
    return newBookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList);
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList);
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(newestBookList);
console.log(bookList);