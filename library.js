//books array
const myLibrary = [{
    id: crypto.randomUUID(),
    title: "1984",
    author: "George Orwell",
    pages: 328,
    read: 'Yes'
},
{
    id: crypto.randomUUID(),
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    read: 'No'
}];

//book object
function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//New book button open
document.querySelector('.newBookBtn').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.show();
});

//New book button close
document.querySelector('.closeBtn').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.close();
});

// add new book
function addBookToLibrary(id, title, author, pages, read) {
    const newBook = new Book(id, title, author, pages, read);
    myLibrary.push(newBook);
    renderBooks();
};

document.querySelector('.submitBookBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('titleIp').value;
    const author = document.getElementById('authorIp').value;
    const pages = document.getElementById('pagesIp').value;

    const read = document.getElementById('readIp');
    let readStatus = 'No';
    if (read.checked == true) {
        readStatus = 'Yes';
    };

    addBookToLibrary(crypto.randomUUID(), title, author, pages, readStatus);
});

//render books
function renderBooks() {
    const library = document.querySelector('.library');
    library.textContent = '';

    myLibrary.forEach(book => {

        const bookCard = document.createElement('div');
        bookCard.className = book.id;

        const title = document.createElement('h1');
        title.innerText = book.title;
        bookCard.appendChild(title);

        const author = document.createElement('p');
        author.innerText = `Author: ${book.author}`;
        bookCard.appendChild(author);

        const pages = document.createElement('p');
        pages.innerText = `Total pages : ${book.pages}`;
        bookCard.appendChild(pages);

        const read = document.createElement('button');
        read.className = 'readToggleBtn'
        read.innerText = book.read;
        bookCard.appendChild(read);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete Book'
        deleteBtn.className = 'deleteBtn';
        bookCard.appendChild(deleteBtn);

        library.appendChild(bookCard);
    });
    deleteCard();
};

renderBooks();