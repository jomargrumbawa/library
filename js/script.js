let myLibrary = [{
  title: "Book 1",
  pages: 200,
  author: "Author 1",
  isRead: true
},
{
  title: "Book 2",
  pages: 300,
  author: "Author 2",
  isRead: false
},
{
  title: "Book 3",
  pages: 150,
  author: "Author 3",
  isRead: true
}];


function Book(title, pages, author, isRead) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let newBook = document.createElement('div');

    let title = document.createElement('h2');
    title.textContent = book.title;

    let author = document.createElement('p');
    author.textContent = book.author;

    let pages = document.createElement('p');
    pages.textContent = book.pages;

    let isRead = document.createElement('p');
    isRead.textContent = book.isRead ? 'Read' : 'Not Read';

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    newBook.appendChild(isRead);

    document.getElementById('books').appendChild(newBook);
  }
}

displayBooks();