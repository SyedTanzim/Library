const myLibrary = [{
    id: crypto.randomUUID(),
    title: 'harry',
    author: 'jk-rollin',
    pages: '205',
    readStatus: 'yes'
},
{
    id: crypto.randomUUID(),
    title: 'harry',
    author: 'jk-rollin',
    pages: '205',
    readStatus: 'yes'
}];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBook() {
    myLibrary.forEach((book) => {
        const library = document.querySelector('.library');
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('h3');
        const pages = document.createElement('p');
        
        card.className = book.id;
        library.appendChild(card);

        title.innerText = book.title;
        title.className = 'title';
        card.appendChild(title);

        author.innerText = book.author;
        author.className = 'author';
        card.appendChild(author);

        pages.innerText = book.pages;
        pages.className = 'pages';
        card.appendChild(pages);   
    });
};

displayBook();