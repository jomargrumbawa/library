const bookFormDialog = document.getElementById('book-form-dialog');
const openDialogBtn = document.getElementById('open-dialog-btn');
const closeDialogBtn = document.getElementById('close-dialog-btn');
const submitBtn = document.getElementById('submit-btn');
const bookForm = document.getElementById('book-form');

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

openDialogBtn.addEventListener('click', () => {
  bookFormDialog.showModal();
})

closeDialogBtn.addEventListener('click', () => {
  bookFormDialog.close();
})

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('is-read').checked;
  myLibrary.push(new Book(title, pages, author, isRead));
  bookFormDialog.close();
  bookForm.reset();
  displayBooks();
})

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
  document.getElementById('books').innerHTML = '';
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

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      displayBooks();
    })

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    newBook.appendChild(isRead);
    newBook.appendChild(deleteBtn);
    document.getElementById('books').appendChild(newBook);
  }
}

displayBooks();